import { useColorScheme } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, {
  SelectChangeEvent
} from '@mui/material/Select'

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
      <InputLabel id="demo-select-small-label">
        Mode
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
