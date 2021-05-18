import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './actionCss';

const ActionButton = (props) => {
  const classes = useStyles();
  const { loading, text, description, onClick } = props;

  return (
    <div className={classes.buttonWrapper}>
      <Tooltip title={description} placement="top">
        <Button loading={loading} onClick={onClick} variant="contained" color="secondary">{text}</Button>
      </Tooltip>
    </div>
  );
};

export default ActionButton;
