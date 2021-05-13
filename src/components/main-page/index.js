import React from 'react';
import { BakaProps, MainArea } from '../ui';
import useStyles from './css';

const MainPage = (props) => {
  const { first } = props;
  const classes = useStyles();

  if (first) {
    console.log('first');
  }
  
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.props}>
            <BakaProps />
          </div>
          <div className={classes.main}>
            <MainArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
