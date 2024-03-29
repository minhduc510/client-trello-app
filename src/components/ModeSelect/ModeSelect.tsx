import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  useColorScheme
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

type Mode = 'dark' | 'light' | 'system'

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event: SelectChangeEvent) => {
    const mode: Mode = event.target.value as Mode
    setMode(mode)
  }

  return (
    <FormControl
      sx={{
        minWidth: 120,
        marginTop: '2px',
        width: '100%'
      }}
      size="small"
    >
      <InputLabel
        id="demo-select-small-label"
        sx={{
          color: 'white',
          '&.Mui-focused': { color: 'white' }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: 'white',
          '&.Mui-focused': { color: 'white' },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
            borderWidth: '1px !important'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: 'white'
            },
          svg: {
            color: 'white'
          }
        }}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
