import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './Comment.styles';

interface CommentProps {
  name: string;
  user: string;
  text: string;
  className?: string;
  img?: string;
};

export const Comment: React.FC<CommentProps> = ({
  name,
  user,
  text,
  className,
  img,
}) => {
  const styles = useStyles();

  return (
    <Box className={`${styles.container} ${className}`}>
      <Box className={styles.main}>
        <Box className={styles.img}>
          <img src={img}/>
        </Box>
        <Box className={styles.data}>
          <Typography className={styles.name}>{name}</Typography>
          <Typography className={styles.user}>{user}</Typography>
        </Box>
      </Box>
      <Divider/>
      <Box className={styles.comment}>
        <Typography className={styles.text}>{text}</Typography>
      </Box>
    </Box>
  );
};