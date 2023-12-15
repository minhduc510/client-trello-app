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
  InputAdornment,
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
import SearchIcon from '@mui/icons-material/Search'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'

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
          justifyContent: 'space-between',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'black'
              : '#1565c0'
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
                color: 'white'
              }}
            />
          </IconButton>
          <AppsIcon
            sx={{
              color: 'white',
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
              sx={{ color: 'white' }}
            />
            <Typography
              variant="span"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'white'
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
            <Button
              variant="outlined"
              startIcon={<AddToPhotosIcon />}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: '#bababf'
                }
              }}
            >
              Create
            </Button>
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
            sx={{
              marginTop: '2px',
              minWidth: 120,
              '& label': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& input': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                fieldset: { borderColor: 'white' },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              )
            }}
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
              color="error"
              variant="dot"
              sx={{ cursor: 'pointer' }}
            >
              <NotificationsNoneIcon
                sx={{ color: 'white' }}
              />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon
              sx={{ cursor: 'pointer', color: 'white' }}
            />
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
