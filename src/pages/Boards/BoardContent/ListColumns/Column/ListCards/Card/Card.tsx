import Button from '@mui/material/Button'

import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { Card as MuiCard, Typography } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardProps } from '@/interface'

interface IProps {
  card: CardProps
}

const Card = ({ card }: IProps) => {
  const shouldShowCardAction =
    !!card?.memberIds?.length ||
    !!card?.comments?.length ||
    !!card?.attachments?.length

  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        overflow: 'unset',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      }}
    >
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
        />
      )}

      <CardContent
        sx={{
          p: 1.5,
          '&:last-child': {
            p: 1.5
          }
        }}
      >
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction && (
        <CardActions
          sx={{
            p: '0 4px 8px 4px'
          }}
        >
          {!!card?.memberIds?.length && (
            <Button
              size="small"
              startIcon={<PeopleAltIcon />}
            >
              {card?.memberIds?.length}
            </Button>
          )}
          {!!card?.comments?.length && (
            <Button
              size="small"
              startIcon={<ModeCommentIcon />}
            >
              {card?.comments?.length}
            </Button>
          )}

          {!!card?.attachments?.length && (
            <Button
              size="small"
              startIcon={<AttachmentIcon />}
            >
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card