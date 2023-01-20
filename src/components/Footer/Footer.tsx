import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './Footer.styles';

export const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.text}>Todos os direitos reservados </Typography>
      <Typography className={styles.tag}>@NomeUsuárioGithub</Typography>
    </Box>
  );
};