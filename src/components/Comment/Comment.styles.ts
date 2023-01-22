import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFFFFF',
    minWidth: '10vw',
    borderRadius: '20px',
    padding: '3vh 3vh 3vh 3vh',
    margin: '30px 1vw 30px 1vw',
  },
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  img: {
    width: '4vw',
    height: '4vw',
    backgroundColor: '#D9D9D9',
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '25px',
    },
  },
  data: {
    margin: '0px 0px 10% 10px',
  },
  name: {
    '&.css-ahj2mt-MuiTypography-root': {
      fontSize: '1.4vw',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '130%',
      color: '#000000',
      maxWidth: '120px',
    },
  },
  user: {
    '&.css-ahj2mt-MuiTypography-root': {
      fontSize: '1.2vw',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '130%',
      color: '#4E4E4E',
    },
  },
  comment: {
    width: '100%',
    height: 'auto',
    maxHeight: '200px',
    margin: '10px 0px 0px 0px',
  },
  text: {
    '&.css-ahj2mt-MuiTypography-root': {
      fontSize: '1.2vw',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '130%',
      color: '#000000',
    },
  },
});