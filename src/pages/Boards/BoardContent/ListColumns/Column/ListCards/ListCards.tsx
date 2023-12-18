import { Box } from '@mui/material'
import Card from './Card/Card'
import { CardProps } from '@/interface'

interface IProps {
  cards: CardProps[]
}

const ListCards = ({ cards }: IProps) => {
  return (
    <>
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
    </>
  )
}

export default ListCards
