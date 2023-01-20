import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    backgroundColor: '#000000',
    width: '100%',
    minWidth: '500px',
    height: '68px',
    display: 'flex',
    padding: '41px 0px 31px 0px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    "& .css-ahj2mt-MuiTypography-root": {
      margin: '0px 0px 10px 0px',
      fontSize: '20px',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '24px',
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