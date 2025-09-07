import { Box, Button, Typography } from '@mui/joy';
import LanguageSelectorComponent from '@components/LanguageSelectorComponent/LanguageSelectorComponent';
import TmpThemeSelectorComponent from '@/components/TmpThemeSelectorComponent/TmpThemeSelectorComponent';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 2, maxWidth: 700, mx: 'auto' }}>
      <Typography>{t('pages.home.title')}</Typography>
      <Button color="primary" onClick={() => navigate('/weather')}>
        {t('pages.home.weatherButton')}
      </Button>
      <LanguageSelectorComponent />
      <TmpThemeSelectorComponent />
    </Box>
  );
};

export default Home;
