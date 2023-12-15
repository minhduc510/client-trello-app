import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Tooltip
} from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import FilterListIcon from '@mui/icons-material/FilterList'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'

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

const BoardBar = () => {
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
          <Chip
            icon={<DashboardIcon />}
            label="MinhDuc app"
            clickable
            sx={MENU_STYLE}
          />
          <Chip
            icon={<VpnLockIcon />}
            label="Public/Private Workspace"
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
          <AvatarGroup max={4}>
            <Tooltip title="Minh Đức">
              <Avatar
                alt="Remy Sharp"
                src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt92e78c219124afdc/6433d049311bf7a3417725d5/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-10T100035.769.png?auto=webp&format=pjpg&width=3840&quality=60"
              />
            </Tooltip>
            <Tooltip title="Minh Đức">
              <Avatar
                alt="Remy Sharp"
                src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt92e78c219124afdc/6433d049311bf7a3417725d5/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-10T100035.769.png?auto=webp&format=pjpg&width=3840&quality=60"
              />
            </Tooltip>
            <Tooltip title="Minh Đức">
              <Avatar
                alt="Remy Sharp"
                src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt92e78c219124afdc/6433d049311bf7a3417725d5/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-10T100035.769.png?auto=webp&format=pjpg&width=3840&quality=60"
              />
            </Tooltip>
            <Tooltip title="Minh Đức">
              <Avatar
                alt="Remy Sharp"
                src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt92e78c219124afdc/6433d049311bf7a3417725d5/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-10T100035.769.png?auto=webp&format=pjpg&width=3840&quality=60"
              />
            </Tooltip>
            <Tooltip title="Minh Đức">
              <Avatar
                alt="Remy Sharp"
                src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt92e78c219124afdc/6433d049311bf7a3417725d5/GOAL_-_Blank_WEB_-_Facebook_-_2023-04-10T100035.769.png?auto=webp&format=pjpg&width=3840&quality=60"
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar
