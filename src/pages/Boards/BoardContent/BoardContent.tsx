import { Box } from '@mui/material'

import ListColumns from './ListColumns/ListColumns'
import { BoardProps, ColumnProps } from '@/interface'
import { mapOrder } from '@/utils/sorts'
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

interface IProps {
  board: BoardProps
}

const BoardContent = ({ board }: IProps) => {
  const [orderedColumns, setOrderedColumns] = useState<
    ColumnProps[]
  >([])

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10
    }
  })
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(
        (c) => c._id === active.id
      )
      const newIndex = orderedColumns.findIndex(
        (c) => c._id === over.id
      )
      const dndOrderedColumns = arrayMove(
        orderedColumns,
        oldIndex,
        newIndex
      )
      // const dndOrderedColumnsIds = dndOrderedColumns.map(
      //   (c) => c._id
      // )
      setOrderedColumns(dndOrderedColumns)
    }
  }
  return (
    <>
      <DndContext
        onDragEnd={handleDragEnd}
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
        </Box>
      </DndContext>
    </>
  )
}

export default BoardContent
