import React from 'react';
import { useStore } from 'reto';
import NP from 'number-precision';
import LinearProgress from '@material-ui/core/LinearProgress';
import BakaPropsStore from '../../stores/BakaPropsStore';
import useStyles from './enemyCss';

const MainArea = () => {
  const classes = useStyles();
  const bakaPropsStore = useStore(BakaPropsStore);
  const { getEnemyProps } = bakaPropsStore;
  const { hp, mp, maxHp, maxMp, name, id } = getEnemyProps();

  if (!id) {
    return (
      <div className={classes.root}>
        <div className={classes.line}>
          <div className={classes.name}>出发吧</div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.line}>
        <div className={classes.name}>{name}</div>
      </div>
      <div className={classes.line}>
        <div className={classes.title}>生命力:</div>
        <div>{`${hp} / ${maxHp}`}</div>
      </div>
      <div className={classes.line}>
        <LinearProgress color="secondary" className={classes.progress} variant="determinate" value={NP.divide(hp, maxHp) * 100} />
      </div>
      <div className={classes.line}>
        <div className={classes.title}>气力:</div>
        <div>{`${mp} / ${maxMp}`}</div>
      </div>
      <div className={classes.line}>
        <LinearProgress color="secondary" className={classes.progress} variant="determinate" value={NP.divide(mp, maxMp) * 100} />
      </div>
    </div>
  );
};

export default MainArea;
