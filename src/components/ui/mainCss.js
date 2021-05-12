import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginLeft: 32,
    width: 'calc(100% - 32px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  action: {
    width: '100%',
  },
});

export default useStyles;
