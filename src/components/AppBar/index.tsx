import {
  Badge,
  Box,
  Button,
  SvgIcon,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'

import TrelloIcon from '@/assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'

const AppBar = () => {
  return (
    <>
      <Box
        px={2}
        sx={{
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            <SvgIcon
              component={TrelloIcon}
              inheritViewBox
              sx={{ color: 'primary.main' }}
            />
            <Typography
              variant="span"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'primary.main'
              }}
            >
              Trello
            </Typography>
          </Box>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            size="small"
          />
          <Tooltip title="Notification">
            <Badge
              color="secondary"
              variant="dot"
              sx={{ cursor: 'pointer' }}
            >
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  )
}

export default AppBar