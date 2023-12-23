import { isEmpty } from 'lodash'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Typography,
  CircularProgress
} from '@mui/material'

import BoardBar from './BoardBar/BoardBar'
import AppBar from '@/components/AppBar/AppBar'
import BoardContent from './BoardContent/BoardContent'

import { mapOrder } from '@/utils/sorts'
import { BOARD_ID } from '@/utils/constants'
import { generatePlaceholderCard } from '@/utils/formatters'
import {
  BoardProps,
  CardBodyProps,
  CardProps,
  ColumnBodyProps,
  ColumnProps
} from '@/interface'
import {
  createNewCardAPI,
  createNewColumnAPI,
  fetchBoardDetailsAPI,
  updateBoardDetailsAPI,
  updateColumnDetailsAPI,
  deleteColumnDetailsAPI,
  moveCardToDifferentColumnAPI
} from '@/apis'

const Board = () => {
  const [board, setBoard] = useState<BoardProps | null>(
    null
  )
  useEffect(() => {
    fetchBoardDetailsAPI(BOARD_ID).then((board) => {
      board.columns = mapOrder(
        board?.columns,
        board?.columnOrderIds,
        '_id'
      )
      board.columns.forEach((column: ColumnProps) => {
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [
            generatePlaceholderCard(column)._id
          ]
        } else {
          column.cards = mapOrder(
            column?.cards,
            column?.cardOrderIds,
            '_id'
          )
        }
      })
      setBoard(board)
    })
  }, [])

  const createNewColumn = async (
    newColumnData: ColumnBodyProps
  ) => {
    if (board) {
      const createdColum = await createNewColumnAPI({
        ...newColumnData,
        boardId: String(board._id)
      })
      createdColum.cards = [
        generatePlaceholderCard(createdColum)
      ]
      createdColum.cardOrderIds = [
        generatePlaceholderCard(createdColum)._id
      ]
      const newBoard = { ...board }
      newBoard.columns.push(createdColum)
      newBoard.columnOrderIds.push(createdColum._id)
      setBoard(newBoard)
      return createdColum
    }

    return
  }

  const createNewCard = async (
    newCardData: CardBodyProps
  ) => {
    if (board) {
      const createdCard = await createNewCardAPI({
        ...newCardData,
        boardId: String(board._id)
      })
      const newBoard = { ...board }
      const columnToUpdate = newBoard.columns.find(
        (column) => column._id === createdCard.columnId
      )
      if (columnToUpdate) {
        if (
          columnToUpdate.cards.some(
            (card) => card.FE_PlaceholderCard
          )
        ) {
          columnToUpdate.cards = createdCard
          columnToUpdate.cardOrderIds = createdCard._id
        } else {
          columnToUpdate.cards.push(createdCard)
          columnToUpdate.cardOrderIds.push(createdCard._id)
        }
      }
      setBoard(newBoard)
      return createdCard
    }

    return
  }

  const moveColumns = async (
    dndOrderedColumns: ColumnProps[]
  ) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map(
      (c) => c._id
    )
    const newBoard = { ...board } as BoardProps
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds

    setBoard(newBoard)

    if (newBoard._id && newBoard) {
      await updateBoardDetailsAPI(newBoard._id, {
        columnOrderIds: newBoard.columnOrderIds
      })
    }
  }

  const moveCardInTheSameColumn = async (
    dndOrderedCards: CardProps[],
    dndOrderedCardIds: string[],
    columnId: string
  ) => {
    const newBoard = { ...board } as BoardProps
    const columnToUpdate = newBoard.columns.find(
      (column) => column._id === columnId
    )
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds
    }
    setBoard(newBoard)
    updateColumnDetailsAPI(columnId, {
      cardOrderIds: dndOrderedCardIds
    })
  }

  const moveCardToDifferentColumn = (
    currentCardId: string | number,
    prevColumnId: string,
    nextColumnId: string,
    dndOrderedColumns: ColumnProps[]
  ) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map(
      (c) => c._id
    )
    const newBoard = { ...board } as BoardProps
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds

    let prevCardOrderIds = dndOrderedColumns.find(
      (c) => c._id === prevColumnId
    )?.cardOrderIds as string[]
    if (prevCardOrderIds[0].includes('placeholder-card')) {
      prevCardOrderIds = []
    }
    setBoard(newBoard)
    moveCardToDifferentColumnAPI({
      currentCardId,
      prevColumnId,
      prevCardOrderIds,
      nextColumnId,
      nextCardOrderIds: dndOrderedColumns.find(
        (c) => c._id === nextColumnId
      )?.cardOrderIds as string[]
    })
  }

  const deleteColumnDetails = (columnId: string) => {
    const newBoard = { ...board } as BoardProps
    newBoard.columns = newBoard.columns.filter(
      (c) => c._id !== columnId
    )
    newBoard.columnOrderIds =
      newBoard.columnOrderIds.filter(
        (_id) => _id !== columnId
      )

    setBoard(newBoard)
    deleteColumnDetailsAPI(columnId).then((res) => {
      toast.success(res.deleteResult)
    })
  }

  if (!board) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '100vw',
          height: '100vh'
        }}
      >
        <CircularProgress />
        <Typography>Loading Board...</Typography>
      </Box>
    )
  }
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: '100vh'
        }}
      >
        <AppBar />
        <BoardBar board={board} />
        <BoardContent
          board={board}
          createNewColumn={createNewColumn}
          createNewCard={createNewCard}
          moveColumns={moveColumns}
          moveCardInTheSameColumn={moveCardInTheSameColumn}
          deleteColumnDetails={deleteColumnDetails}
          moveCardToDifferentColumn={
            moveCardToDifferentColumn
          }
        />
      </Container>
    </>
  )
}

export default Board
