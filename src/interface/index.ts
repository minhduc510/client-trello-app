import { Active } from '@dnd-kit/core'
import { ClientRect } from '@dnd-kit/core'
import { Coordinates } from '@dnd-kit/utilities'
import {
  DroppableContainer,
  RectMap
} from '@dnd-kit/core/dist/store'

export interface CardProps {
  _id: string
  boardId: string
  columnId?: string
  title?: string
  description?: string | null
  cover?: string | null
  memberIds?: string[] | never[]
  comments?: string[] | never[]
  attachments?: string[] | never[]
  FE_PlaceholderCard?: boolean
}

export interface ColumnProps {
  _id: string
  boardId: string
  title: string
  cardOrderIds: string[]
  cards: CardProps[]
}

export interface BoardProps {
  _id: string
  title: string
  description: string
  type: string
  ownerIds: string[] | never[]
  memberIds: string[] | never[]
  columnOrderIds: string[]
  columns: ColumnProps[]
}

export interface ColumnBodyProps {
  title: string
  boardId: string
}

export interface CardBodyProps extends ColumnBodyProps {
  columnId: string
}

export type CollisionArgs = {
  active: Active
  collisionRect: ClientRect
  droppableRects: RectMap
  droppableContainers: DroppableContainer[]
  pointerCoordinates: Coordinates | null
}
