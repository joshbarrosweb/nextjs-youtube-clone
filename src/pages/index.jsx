import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button variant="contained" color="primary">
          JOSUE
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
