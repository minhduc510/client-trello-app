import {
  Box,
  Chip,
  Avatar,
  Button,
  Tooltip,
  AvatarGroup
} from '@mui/material'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import FilterListIcon from '@mui/icons-material/FilterList'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'

import { BoardProps } from '@/interface'
import { FAKE_DATA_USER } from '@/utils/constants'
import { capitalizeFirstLetter } from '@/utils/formatters'

interface IProps {
  board: BoardProps | null
}

const MENU_STYLE = {
  color: 'white',
  border: 'none',
  bgcolor: 'transparent',
  paddingX: 1,
  borderRadius: '5px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.light'
  }
}

const BoardBar = ({ board }: IProps) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: (theme) => theme.trello.boardBarHeight,
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': {
            m: '0 15px'
          },
          paddingX: 2,
          borderTop: (theme) =>
            `1px solid ${
              theme.palette.mode === 'dark'
                ? '#333232'
                : '#5793d8'
            }`,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'black'
              : '#2677d5'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Tooltip title={board?.description}>
            <Chip
              icon={<DashboardIcon />}
              label={board?.title}
              clickable
              sx={MENU_STYLE}
            />
          </Tooltip>
          <Chip
            icon={<VpnLockIcon />}
            label={capitalizeFirstLetter(board?.type ?? '')}
            clickable
            sx={MENU_STYLE}
          />
          <Chip
            icon={<AddToDriveIcon />}
            label="Add to GoogleDrive"
            clickable
            sx={MENU_STYLE}
          />
          <Chip
            icon={<ElectricBoltIcon />}
            label="Automation"
            clickable
            sx={MENU_STYLE}
          />
          <Chip
            icon={<FilterListIcon />}
            label="Filters"
            clickable
            sx={MENU_STYLE}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Button
            variant="outlined"
            sx={{
              paddingTop: 0.8,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: '#bababf'
              }
            }}
            startIcon={<PersonAddIcon />}
          >
            Invite
          </Button>
          <AvatarGroup max={6} sx={{ gap: 1.5 }}>
            {FAKE_DATA_USER.map((user, index) => (
              <Tooltip title={user.username} key={index}>
                <Avatar
                  alt={user.username}
                  src={user.avatar}
                />
              </Tooltip>
            ))}
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar
