import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    width: 'calc(100vw - 33px)',
    height: '55px',
    minWidth: 'max-content',
    maxWidth: '100%',
    background: '#D9D9D9',
    position: 'fixed',
    zIndex: 5,
  },
  subContainer: {
    padding: '15px 30px 16px 55px',
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
    fontSize: '20px',
    lineHeight: '24px',
    color: '#000000',
    textDecorationColor: '#D9D9D9',
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
    '&:hover': {
      textDecorationColor: '#000000',
    },
    '&.css-ahj2mt-MuiTypography-root': {
      margin: '0px 34px 0px 0px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  title: {
    width: 'auto',
    height: '29px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '29px',
    color: '#000000',
    margin: '0px 40px 0px 0px',
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