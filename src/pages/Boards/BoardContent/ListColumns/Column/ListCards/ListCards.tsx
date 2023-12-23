import { Box } from '@mui/material'
import {
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'

import Card from './Card/Card'
import { CardProps } from '@/interface'

interface IProps {
  cards: CardProps[]
}

const ListCards = ({ cards }: IProps) => {
  if (!Array.isArray(cards)) {
    cards = [cards]
  }
  return (
    <>
      <SortableContext
        items={cards.map((card) => card._id)}
        strategy={verticalListSortingStrategy}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            p: '0 5px 5px 5px',
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
          {cards?.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </Box>
      </SortableContext>
    </>
  )
}

export default ListCards
