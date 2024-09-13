import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

type ICardProps = {
  id: number;
  title: string;
  route: string;
}

interface CardProps {
  cards: ICardProps[];
}

const PaperCustom = styled(Paper)(({ theme }) => ({
  width: 280,
  height: 100,
  padding: theme.spacing(2),
  border: '1px solid grey',
  ...theme.typography.body2,
  textAlign: 'center',

  '&:hover': {
    border: `1px solid ${theme.palette.primary.dark}`, // Ajuste para incluir a largura da borda
    cursor: 'pointer',
  },
}));

const Card: FC<CardProps> = ({ cards }) => {
  return (
    <Grid container spacing={2} style={{ marginTop: '15px' }}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Stack direction="row" className="card">
            <PaperCustom elevation={3}>{card.title}</PaperCustom>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card;
