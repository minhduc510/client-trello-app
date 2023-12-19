import { Box } from '@mui/material'
import Card from './Card/Card'
import { CardProps } from '@/interface'
import {
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'

interface IProps {
  cards: CardProps[]
}

const ListCards = ({ cards }: IProps) => {
  const listIdCards = cards.map((card) => card._id)
  return (
    <>
      <SortableContext
        items={listIdCards}
        strategy={verticalListSortingStrategy}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            p: '0 5px',
            m: '0 5px',
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) =>
              `calc(${
                theme.trello.boardContentHeight
              } - ${theme.spacing(5)}  - ${
                theme.trello.columnHeaderHeight
              } - ${theme.trello.columnFooterHeight})`
          }}
        >
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </Box>
      </SortableContext>
    </>
  )
}

export default ListCards
