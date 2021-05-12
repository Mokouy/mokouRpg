import React from 'react';
import { useStore } from 'reto';
import NP from 'number-precision';
import Button from '@material-ui/core/Button';
import BakaPropsStore from '../../stores/BakaPropsStore';
import TextHistory from './TextHistory';
import ActionArea from './ActionArea';
import Enemy from './Enemy';
import useStyles from './mainCss';

const MainArea = () => {
  const classes = useStyles();
  const bakaPropsStore = useStore(BakaPropsStore);

  return (
    <div className={classes.root}>
      <Enemy />
      <div className={classes.action}>
        <TextHistory />
        <ActionArea />
      </div>
    </div>
  );
};

export default MainArea;
