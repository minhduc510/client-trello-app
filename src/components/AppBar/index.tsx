import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import AppsIcon from '@mui/icons-material/Apps'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import {
  Badge,
  Box,
  Button,
  IconButton,
  SvgIcon,
  SwipeableDrawer,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'

import TrelloIcon from '@/assets/trello.svg?react'
import ModeSelect from '../ModeSelect'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Profiles from './Menus/Profiles'
import Templates from './Menus/Templates'
import Workspaces from './Menus/Workspaces'

const AppBar = () => {
  const [menuMobile, setMenuMobile] = React.useState(false)
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
            paddingTop: '2px',
            gap: 2
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setMenuMobile(true)}
            color="inherit"
            sx={{
              display: {
                xs: 'flex',
                md: 'none'
              },
              padding: 1,
              alignItems: 'center'
            }}
          >
            <MenuIcon
              sx={{
                color: 'primary.main'
              }}
            />
          </IconButton>
          <AppsIcon
            sx={{
              color: 'primary.main',
              display: { xs: 'none', md: 'block' }
            }}
          />
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
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1
            }}
          >
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button variant="outlined">Create</Button>
          </Box>
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
            label="Search"
            type="search"
            size="small"
            sx={{ marginTop: '2px', minWidth: 120 }}
          />
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <ModeSelect />
          </Box>
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

      <SwipeableDrawer
        anchor={'left'}
        open={menuMobile}
        onClose={() => setMenuMobile(false)}
        onOpen={() => setMenuMobile(true)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
            padding: 2,
            width: '40vw'
          }}
        >
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
          <Box sx={{ marginTop: 2 }}>
            <ModeSelect />
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default AppBar
