import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    backgroundColor: '#000000',
    width: 'calc(100vw - 33px)',
    minWidth: '500px',
    height: '68px',
    display: 'flex',
    padding: '41px 0px 31px 0px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    "& .css-ahj2mt-MuiTypography-root": {
      margin: '0px 0px 0.1vh 0px',
      fontSize: '1.5vw',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '130%',
    },
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    width: '273px',
    height: '24px',
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
  tag: {
    display: 'flex',
    justifyContent: 'center',
    width: '211px',
    height: '24px',
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
});