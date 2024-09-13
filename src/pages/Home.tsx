import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Card from '../components/Card/Card';

const Home = () => {
  const cards = [
    {
      id: 1,
      title: 'Teste',
      route: '/',
    },
    {
      id: 2,
      title: 'Teste 2',
      route: '/',
    },
    {
      id: 3,
      title: 'Teste 3',
      route: '/',
    },
    {
      id: 4,
      title: 'Teste 4',
      route: '/',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '25px' }}>
      <Typography
        variant="h2"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Lorem ipsum
      </Typography>
      <Typography
        variant="h7"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's .
      </Typography>

      <Card cards={cards} />
    </Box>
  );
};

export default Home;
