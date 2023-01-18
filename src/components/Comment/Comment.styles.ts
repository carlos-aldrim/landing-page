import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    backgroundColor: '#FFFFFF',
    minWidth: '215px',
    maxHeight: '347px',
    minHeight: '325px',
    borderRadius: '20px',
    padding: '33px 35px 0px 30px',
    margin: '0px 0px 0px 49px',
  },
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  img: {
    width: '50px',
    height: '50px',
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
    margin: '0px 0px 23px 10px',
  },
  name: {
    '&.css-ahj2mt-MuiTypography-root': {
      fontSize: '20px',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '24px',
      color: '#000000',
      maxWidth: '120px',
    },
  },
  user: {
    '&.css-ahj2mt-MuiTypography-root': {
      fontSize: '16px',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '19px',
      color: '#4E4E4E',
    },
  },
  comment: {
    width: '100%',
    height: 'auto',
    maxHeight: '200px',
    margin: '19px 0px 0px 0px',
  },
  text: {
    '&.css-ahj2mt-MuiTypography-root': {
      fontSize: '16px',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '19px',
      color: '#000000',
    },
  },
});