import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    width: 'calc(100vw - 33px)',
    height: '55px',
    background: '#D9D9D9',
    position: 'fixed',
    zIndex: 12,
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
    fontSize: '1.8vw',
    lineHeight: '24px',
    color: '#000000',
    textDecorationColor: '#D9D9D9',
    letterSpacing: '0rem',
    cursor: 'pointer',
    marginRight: '34px',
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
      margin: '0px 4vw 0px 0px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '1.8vw',
      lineHeight: '24px',
    },
  },
  title: {
    width: '70px',
    height: '29px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '2vw',
    lineHeight: '19px',
    color: '#000000',
    margin: '0px 40px 0px 2vw',
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