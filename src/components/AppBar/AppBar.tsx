import { useState } from 'react'
import {
  Box,
  Badge,
  Button,
  SvgIcon,
  Tooltip,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  SwipeableDrawer
} from '@mui/material'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Profiles from './Menus/Profiles'
import Templates from './Menus/Templates'
import Workspaces from './Menus/Workspaces'
import MenuIcon from '@mui/icons-material/Menu'
import AppsIcon from '@mui/icons-material/Apps'
import ModeSelect from '../ModeSelect/ModeSelect'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

import TrelloIcon from '@/assets/trello.svg?react'

const AppBar = () => {
  const [menuMobile, setMenuMobile] =
    useState<boolean>(false)
  const [valueSearch, setValueSeach] = useState<string>('')
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
            type="text"
            size="small"
            value={valueSearch}
            onChange={(e) => setValueSeach(e.target.value)}
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
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setValueSeach('')}
                >
                  <ClearIcon
                    sx={{
                      color: 'white',
                      cursor: 'pointer',
                      opacity: valueSearch ? 1 : 0
                    }}
                  />
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
