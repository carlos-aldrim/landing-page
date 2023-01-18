import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    width: '100%',
    minWidth: '1000px',
  },
  list: {
    position: 'fixed',
    top: '50px',
    right: '50px',
    backgroundColor: '#C2C1C1',
    width: '80px',
    height: '100px',
    '& ul': {
      padding: '0px',
    },
    '& li': {
      width: '80px',
    },
  },
  itemButtom: {
    height: '33.33px',
    
    '& div': {
      '& span': {
        color: '#FFFFFF',
        fontSize: '20px',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '24px',
        fontStyle: 'normal',
        width: '57px',
        height: '24px',
        letterSpacing: '-0.01rem',
      }
    },
  },
  firstSection: {
    width: '100%',
    maxWidth: '-webkit-fill-available',
    height: '486px',
    backgroundColor: '#E7E7E7',
    padding: '145px 0px 137px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    '&.css-ahj2mt-MuiTypography-root': {
      margin: '0px 0px 0px 55px',
      fontSize: '48px',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '58px',
    },
    color: '#000000',
    width: '25%',
    minWidth: '200px',
    height: 'auto',
    minHeight: '58px',
  },
  subtext: {
    '&.css-ahj2mt-MuiTypography-root': {
      margin: '0px 0px 5px 64px',
      fontSize: '24px',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '29px',
    },
    color: '#1E1E1E',
    width: '25%',
    minWidth: '300px',
    height: 'auto',
    minHeight: '29px',
  },
  button: {
    '&.css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
      margin: '0px 0px 0px 55px',
      display: 'flex',
      width: '180px',
      height: '30px',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontSize: '20px',
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
    maxWidth: '671px',
    maxHeight: '486px',
    minWidth: '300px',
    margin: '0px 63px 0px 0px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  secondSection: {
    width: '100%',
    maxWidth: '-webkit-fill-available',
    height: '546px',
    backgroundColor: '#F2F2F2',
    padding: '72px 0px 150px 0px',
    '& .react-slideshow-container .default-nav:first-of-type': {
      backgroundColor: 'transparent',
      margin: '8px 0px 0px 20%',
    },
    '& .react-slideshow-container .default-nav:last-of-type': {
      backgroundColor: 'transparent',
      margin: '0px 20% 0px 0px',
    },
    '& div>div>div>div': {
      display: 'flex',
      justifyContent: 'center',
    },
    '& img': {
      height: '383px',
    },
  },
  titleSelection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0px 0px 72px 0px',
    '& .css-ahj2mt-MuiTypography-root': {
      fontSize: '48px',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '48px',
      color: '#000000',
      width: 'auto',
      height: '48px',
    },
  },
  thirdSection: {
    width: '100%',
    maxWidth: '-webkit-fill-available',
    height: '546px',
    backgroundColor: '#E7E7E7',
    padding: '72px 216px 93px 223px',
  },
  comments: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: '0px 50px 0px 0px',
  },
  comment: {
    height: '349px',
  },
  subComment: {
    height: '325px',
    padding: '25px 17px 0px 18px',
  },
});