import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    width: 'calc(100vw - 33px)',
    minWidth: '500px',
    height: '55px',
    background: '#D9D9D9',
    position: 'fixed',
    zIndex: 5,
  },
  subContainer: {
    padding: '15px 15px 16px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '24px',
  },
  link: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
    color: '#000000',
    textDecorationColor: '#D9D9D9',
    letterSpacing: '0rem',
    cursor: 'pointer',
    marginRight: '20px',
    '&:hover': {
      textDecorationColor: '#000000',
    },
  },
  text: {
    color: '#000000',
    cursor: 'pointer',
    textDecorationColor: '#D9D9D9',
    textDecorationLine: 'underline',
    letterSpacing: '0rem',
    '&:hover': {
      textDecorationColor: '#000000',
    },
    '&.css-ahj2mt-MuiTypography-root': {
      margin: '0px 20px 0px 0px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  title: {
    width: '70px',
    height: '29px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '120%',
    lineHeight: '19px',
    color: '#000000',
    margin: '0px 40px 0px 0px',
    letterSpacing: '0rem',
    textDecorationColor: '#D9D9D9',
    '&:hover': {
      textDecorationColor: '#000000',
    },
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});