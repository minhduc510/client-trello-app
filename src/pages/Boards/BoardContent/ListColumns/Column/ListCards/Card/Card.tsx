import Button from '@mui/material/Button'

import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { Card as MuiCard, Typography } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

const Card = () => {
  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        overflow: 'unset',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1199a93b420b1e8c/65733dbaff29a6040a17ea2b/Power_Rank_Chelsea_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60"
        title="green iguana"
      />
      <CardContent
        sx={{
          p: 1.5,
          '&:last-child': {
            p: 1.5
          }
        }}
      >
        <Typography>TRaanf mINH ddUWCS</Typography>
      </CardContent>
      <CardActions
        sx={{
          p: '0 4px 8px 4px'
        }}
      >
        <Button size="small" startIcon={<PeopleAltIcon />}>
          10
        </Button>
        <Button
          size="small"
          startIcon={<ModeCommentIcon />}
        >
          10
        </Button>
        <Button size="small" startIcon={<AttachmentIcon />}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
