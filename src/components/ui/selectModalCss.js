import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#424242',
    border: '2px solid #000',
    display: 'flex',
    height: '65%',
    width: '90%',
    padding: '4px',
    color: '#fff',
  },
  itemWrapper: {
    padding: '12px',
    margin: '4px',
    border: '1px solid #3f51b5',
    transition: '0.4s',
    cursor: 'pointer',
    height: 'calc(100% - 36px)',
    width: '33%',
    overflowY: 'overlay',

    '&:hover': {
      border: '1px solid #f44336',
      transition: '0.4s',
    },

    '&::-webkit-scrollbar': {
      width: 4,
      height: 4,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 4,
      background: 'rgba(0,0,0,0.2)',
      boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 0,
      boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)',
    },
  },
  title: {
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: 8,
    color: '#ed4b82',
  },
  description: {
    color: '#ed4b82',
    marginBottom: 8,
  },
  effectDescription: {
    color: '#e91e63',
  },
});

export default useStyles;
