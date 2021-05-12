import { makeStyles } from '@material-ui/core/styles';

const propsWidth = 300;
const mainWidth = `calc(100% - ${propsWidth}px)`;

const useStyles = makeStyles({
  root: {
    backgroundColor: '#121212',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: '#000',
    height: '90%',
    width: '90%',
    color: '#fafafa',
  },
  content: {
    padding: '24px',
    height: 'calc(100% - 48px)',
    display: 'flex',
  },
  props: {
    height: '100%',
    width: propsWidth,
    display: 'inline-block',
  },
  main: {
    height: '100%',
    width: mainWidth,
    display: 'inline-block',
  },
});

export default useStyles;
