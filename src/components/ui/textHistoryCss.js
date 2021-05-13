import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 24,
  },
  line: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 8,
    transition: 'all 0.3s ease-in',
    opacity: 1,
  },
  newLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    width: '100%',
    marginBottom: 8,
    transition: 'all 0.3s ease-in',
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: 'all 0.3s ease-in',
  },
});

export default useStyles;
