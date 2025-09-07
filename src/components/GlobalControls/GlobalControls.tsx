import { Box, Button, Typography } from '@mui/joy';
import LanguageSelectorComponent from '../LanguageSelectorComponent/LanguageSelectorComponent';
import TmpThemeSelectorComponent from '../TmpThemeSelectorComponent/TmpThemeSelectorComponent';
import { useNavigate } from 'react-router';

const GlobalControls = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        left: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        zIndex: 1500,
        p: 1,
        borderRadius: 'md',
        boxShadow: 'md',
        bgcolor: 'background.surface',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography level="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Select Language / Theme
      </Typography>
      <LanguageSelectorComponent />
      <TmpThemeSelectorComponent />

      <Typography level="h3" sx={{ textAlign: 'center', mt: 2 }}>
        Navigation
      </Typography>
      <Button variant="soft" color="neutral" onClick={() => navigate('/')}>
        Homepage
      </Button>
      <Button
        variant="soft"
        color="neutral"
        onClick={() => navigate('/weather')}
      >
        Weather Page (i18n)
      </Button>
      <Button
        variant="soft"
        color="neutral"
        onClick={() => navigate('/colors')}
      >
        Joy Color Showcase
      </Button>
    </Box>
  );
};

export default GlobalControls;
