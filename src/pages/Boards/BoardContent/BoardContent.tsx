import { Box } from '@mui/material'

import ListColumns from './ListColumns/ListColumns'
import {
  BoardProps,
  CardProps,
  ColumnProps
} from '@/interface'
import { mapOrder } from '@/utils/sorts'
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverlay,
  defaultDropAnimationSideEffects,
  DragOverEvent,
  closestCorners,
  Active,
  Over
} from '@dnd-kit/core'
import { cloneDeep } from 'lodash'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

interface IProps {
  board: BoardProps
}

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

type ActiveDragItemType =
  | 'ACTIVE_DRAG_ITEM_TYPE_COLUMN'
  | 'ACTIVE_DRAG_ITEM_TYPE_CARD'

const BoardContent = ({ board }: IProps) => {
  const [orderedColumns, setOrderedColumns] = useState<
    ColumnProps[]
  >([])

  const [activeDragItemId, setActiveDragItemId] = useState<
    number | string | null
  >(null)

  const [activeDragItemType, setActiveDragItemType] =
    useState<ActiveDragItemType | null>(null)

  const [activeDragItemData, setActiveDragItemData] =
    useState<any>(null)

  const [
    oldColumnWhenDraggingCard,
    setOldColumnWhenDraggingCard
  ] = useState<ColumnProps | null>(null)

  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10
  //   }
  // })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500
    }
  })
  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    setOrderedColumns(
      mapOrder(board?.columns, board?.columnOrderIds, '_id')
    )
  }, [board])

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  const findColumnByCardId = (cardId: string) => {
    return orderedColumns.find((column) =>
      column.cards.map((card) => card._id)?.includes(cardId)
    )
  }

  const moveCardBetweenDifferentColumns = (
    overColumn: ColumnProps,
    overCardId: string | number,
    active: Active,
    over: Over,
    activeColumn: ColumnProps,
    activeDraggingCardId: string | number,
    activeDraggingCardData: any
  ) => {
    setOrderedColumns((prevColumns) => {
      const overCardIndex = overColumn?.cards?.findIndex(
        (card) => card._id === overCardId
      )
      let newCardIndex
      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top >
          over.rect.top + over.rect.height
      const modifier = isBelowOverItem ? 1 : 0
      newCardIndex =
        overCardIndex >= 0
          ? overCardIndex + modifier
          : overColumn?.cards?.length + 1

      const nextColumns = cloneDeep(prevColumns)
      const nextActiveColumn = nextColumns.find(
        (column) => column._id === activeColumn._id
      )
      const nextOverColumn = nextColumns.find(
        (column) => column._id === overColumn._id
      )
      if (nextActiveColumn) {
        nextActiveColumn.cards =
          nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          )
        nextActiveColumn.cardOrderIds =
          nextActiveColumn.cards.map((card) => card._id)
      }
      if (nextOverColumn) {
        nextOverColumn.cards = nextOverColumn.cards.filter(
          (card) => card._id !== activeDraggingCardId
        )
        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData,
          columnId: nextOverColumn._id
        }
        const nextOverColumnClone = [
          ...nextOverColumn.cards
        ]
        nextOverColumnClone.splice(
          newCardIndex,
          0,
          rebuild_activeDraggingCardData as CardProps
        )
        nextOverColumn.cards = nextOverColumnClone
        nextOverColumn.cardOrderIds =
          nextOverColumn.cards.map((card) => card._id)
      }
      return nextColumns
    })
  }

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(
      (event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN) as ActiveDragItemType
    )
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(
        findColumnByCardId(
          String(event?.active?.id)
        ) as ColumnProps
      )
    }
    setActiveDragItemData(event?.active?.data?.current)
  }

  const handleDragOver = (event: DragOverEvent) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN)
      return
    const { active, over } = event
    if (!active || !over) return

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData }
    } = active

    const { id: overCardId } = over

    const activeColumn = findColumnByCardId(
      `${activeDraggingCardId}`
    )
    const overColumn = findColumnByCardId(`${overCardId}`)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      moveCardBetweenDifferentColumns(
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardData
      )
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!active || !over) return

    if (activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData }
      } = active

      const { id: overCardId } = over

      const activeColumn = findColumnByCardId(
        `${activeDraggingCardId}`
      )
      const overColumn = findColumnByCardId(`${overCardId}`)

      if (!activeColumn || !overColumn) return

      if (
        oldColumnWhenDraggingCard?._id !== overColumn._id
      ) {
        moveCardBetweenDifferentColumns(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDraggingCardId,
          activeDraggingCardData
        )
      } else {
        const oldCardIndex =
          oldColumnWhenDraggingCard.cards.findIndex(
            (c) => c._id === activeDragItemId
          )
        const newCardIndex = overColumn.cards.findIndex(
          (c) => c._id === overCardId
        )
        const dndOrderedCards = arrayMove(
          oldColumnWhenDraggingCard.cards,
          oldCardIndex,
          newCardIndex
        )
        setOrderedColumns((prevColumns) => {
          const nextColumns = cloneDeep(prevColumns)

          const targetColumn = nextColumns.find(
            (column) => column._id === overColumn._id
          ) as ColumnProps

          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map(
            (card) => card._id
          )
          return nextColumns
        })
      }
    }

    if (
      activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.COLUMN
    ) {
      if (active.id !== over.id) {
        const oldColumnIndex = orderedColumns.findIndex(
          (c) => c._id === active.id
        )
        const newColumnIndex = orderedColumns.findIndex(
          (c) => c._id === over.id
        )
        const dndOrderedColumns = arrayMove(
          orderedColumns,
          oldColumnIndex,
          newColumnIndex
        )
        // const dndOrderedColumnsIds = dndOrderedColumns.map(
        //   (c) => c._id
        // )
        setOrderedColumns(dndOrderedColumns)
      }
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumnWhenDraggingCard(null)
  }
  return (
    <>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
        sensors={sensors}
      >
        <Box
          sx={{
            width: '100%',
            p: '10px 0',
            height: (theme) =>
              theme.trello.boardContentHeight,
            bgcolor: (theme) =>
              theme.palette.mode === 'dark'
                ? '#34495e'
                : '#1976d2',
            display: 'flex'
          }}
        >
          <ListColumns columns={orderedColumns} />
          <DragOverlay dropAnimation={dropAnimation}>
            {!activeDragItemType && null}
            {activeDragItemType ===
              ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
              <Column column={activeDragItemData} />
            )}
            {activeDragItemType ===
              ACTIVE_DRAG_ITEM_TYPE.CARD && (
              <Card card={activeDragItemData} />
            )}
          </DragOverlay>
        </Box>
      </DndContext>
    </>
  )
}

export default BoardContent
