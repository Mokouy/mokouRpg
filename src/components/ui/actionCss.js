import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 6px',
    width: 'calc(100% - 12px)',
    border: '1px solid #fafafa',
    borderRadius: 4,
    display: 'inline-block',
  },
  buttonWrapper: {
    display: 'inline-block',
    padding: '12px 6px',
  },
});

export default useStyles;
