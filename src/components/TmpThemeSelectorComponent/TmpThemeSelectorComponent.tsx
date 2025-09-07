import { Box, Button, ButtonGroup, Typography } from '@mui/joy';
import { useColorScheme } from '@mui/joy';

const TmpThemeSelectorComponent = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <ButtonGroup>
        <Button
          onClick={() => setMode('light')}
        >
          <Typography>Light</Typography>
        </Button>
        <Button
          onClick={() => setMode('dark')}
        >
          <Typography>Dark</Typography>
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TmpThemeSelectorComponent;
