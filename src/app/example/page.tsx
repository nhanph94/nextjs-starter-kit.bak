import { Container, Typography } from '@mui/material';
import { Metadata } from 'next';

const Example = () => {
  return (
    <Container>
      <Typography component="h1" variant="h3">
        Welcome Example
      </Typography>
    </Container>
  );
};

export const metadata: Metadata = {
  title: 'Example',
};

export default Example;
