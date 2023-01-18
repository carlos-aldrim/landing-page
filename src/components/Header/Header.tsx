import { Box, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './Header.styles';
import { PagesRoutes } from '../../views/constants/routes';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  name: string;
};

export const Header: React.FC<HeaderProps> = ({
  onClick,
  name,
}) => {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Box className={styles.container}>
        <Box className={styles.subContainer}>
          <Box>
            <Link className={styles.title} to={PagesRoutes.home}>Bem-vindo, {name}!</Link>
          </Box>
          <Box className={styles.menu}>
            <a className={styles.link} href='#first-section'>Início</a>
            <a className={styles.link} href='#second-section'>Coleções</a>
            <a className={styles.link} href='#third-section'>Comentários</a>
            <Typography className={styles.text} onClick={onClick}>Lista</Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};