import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '12px',
    width: 'calc(100% - 24px)',
    border: '1px solid #fafafa',
    borderRadius: 4,
    display: 'inline-block',
  },
  line: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    marginRight: 8,
  },
  progress: {
    width: '100%',
  },
  name: {
    fontWeight: 700,
    fontSize: 20,
  },
});

export default useStyles;
