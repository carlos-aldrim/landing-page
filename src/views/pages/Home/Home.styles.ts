import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    width: '100%',
    minWidth: '1000px',
  },
  list: {
    position: 'fixed',
    top: '55px',
    right: '5vw',
    backgroundColor: '#C2C1C1',
    width: '8vw',
    height: '8vw',
    '& ul': {
      padding: '0px',
    },
    '& li': {
      width: '8vw',
    },
  },
  itemButtom: {
    height: '2.65vw',
    '& div': {
      padding: 'auto',
      textAlign: 'center',
      '& span': {
        color: '#FFFFFF',
        fontSize: '1.2vw',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '24px',
        fontStyle: 'normal',
        width: 'auto',
        height: 'auto',
        letterSpacing: '-0.01rem',
      }
    },
  },
  firstSection: {
    width: 'calc(100vw - 33px)',
    height: '100%',
    backgroundColor: '#E7E7E7',
    padding: '12% 0px 10% 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    '&.css-ahj2mt-MuiTypography-root': {
      margin: '0px 0px 0px 11%',
      fontSize: '4vw',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '130%',
    },
    color: '#000000',
    width: '25%',
    height: 'auto',
  },
  subtext: {
    '&.css-ahj2mt-MuiTypography-root': {
      margin: '0px 0px 5px 12%',
      fontSize: '1.8vw',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '130%',
    },
    color: '#1E1E1E',
    width: '50%',
    height: 'auto',
    minHeight: '29px',
  },
  button: {
    '&.css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
      margin: '0px 0px 0px 11%',
      display: 'flex',
      width: '25%',
      height: '10%',
      padding: '0.5%',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontSize: '1.5vw',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '24px',
      borderRadius: '20px',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#C4C4C4',
        color: '#000000',
        border: 'solid 2px #000000',
      },
    },
  },
  logo: {
    width: '75%',
    height: '75%',
    margin: '0px 63px 0px 0px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  secondSection: {
    width: 'calc(100vw - 33px)',
    height: '100%',
    backgroundColor: '#F2F2F2',
    padding: '72px 0px 150px 0px',
    '& .react-slideshow-container .default-nav:first-of-type': {
      backgroundColor: 'transparent',
      margin: '8px 0px 0px 10%',
    },
    '& .react-slideshow-container .default-nav:last-of-type': {
      backgroundColor: 'transparent',
      margin: '0px 10% 0px 0px',
    },
    '& div>div>div>div': {
      display: 'flex',
      justifyContent: 'center',
    },
    '& img': {
      height: '40vw',
    },
    '& .react-slideshow-container+ul.indicators': {
      padding: 0,
    },
  },
  titleSelection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0px 0px 5% 0px',
    '& .css-ahj2mt-MuiTypography-root': {
      fontSize: '5vw',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '130%',
      color: '#000000',
      width: 'auto',
      height: 'auto',
    },
  },
  thirdSection: {
    width: 'calc(100vw - 33px)',
    height: '100%',
    backgroundColor: '#E7E7E7',
    padding: '72px 0px 93px 0px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  comments: {
    display: 'flex',
    width: '80vw',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: '0px 1vw 0px 0px',
  },
  comment: {
    height: '25vw',
  },
  subComment: {
    height: '20vw',
    padding: '25px 17px 20px 18px',
  },
});