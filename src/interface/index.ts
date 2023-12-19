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
