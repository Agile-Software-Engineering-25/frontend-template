import { Box, Typography } from '@mui/joy';
import LanguageSelectorComponent from '@components/LanguageSelectorComponent/LanguageSelectorComponent';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import useUser from '@/hooks/useUser';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useUser();

  return (
    <Box sx={{ padding: 2, maxWidth: 700, mx: 'auto' }}>
      <Typography>{t('pages.home.title')}</Typography>
      <Button onClick={() => navigate('/weather')}>
        {t('pages.home.weatherButton')}
      </Button>
      <LanguageSelectorComponent />

      <Typography>
        {t('pages.home.welcomeMessage', { name: user.getFullName() })}
      </Typography>
      <Typography>User ID: {user.getUserId()}</Typography>
      <Typography>E-Mail: {user.getEmail()}</Typography>
      <Typography sx={{ wordBreak: 'break-word' }}>Access Token: {user.getAccessToken()}</Typography>
      <Typography>
        Has role testabc: {user.hasRole('testabc') ? 'Yes' : 'No'}
      </Typography>
      <Typography>
        Has role testdef: {user.hasRole('testdef') ? 'Yes' : 'No'}
      </Typography>
    </Box>
  );
};

export default Home;
