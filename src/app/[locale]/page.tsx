import { Container, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const Home = () => {
  const _ = useTranslations();

  return (
    <Container maxWidth="xl" style={{ margin: '0 auto' }}>
      <Typography component="h1" variant="h3">
        Welcome Home
      </Typography>

      <Typography component="h1" variant="h3">
        {_('greeting')}
      </Typography>
    </Container>
  );
};

export default Home;
