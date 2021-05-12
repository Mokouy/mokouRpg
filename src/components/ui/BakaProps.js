import React from 'react';
import { useStore } from 'reto';
import LinearProgress from '@material-ui/core/LinearProgress';
import NP from 'number-precision';
import BakaPropsStore from '../../stores/BakaPropsStore';
import useStyles from './propsCss';

const BakaProps = () => {
  const classes = useStyles();
  const bakaPropsStore = useStore(BakaPropsStore);
  const { getBakaProps } = bakaPropsStore;
  const { hp, mp, maxHp, maxMp, attack, defend } = getBakaProps();

  return (
    <div className={classes.root}>
      <div className={classes.line}>
        <div className={classes.title}>生命力:</div>
        <div>{`${hp} / ${maxHp}`}</div>
      </div>
      <div className={classes.line}>
        <LinearProgress className={classes.progress} variant="determinate" value={NP.divide(hp, maxHp) * 100} />
      </div>
      <div className={classes.line}>
        <div className={classes.title}>气力:</div>
        <div>{`${mp} / ${maxMp}`}</div>
      </div>
      <div className={classes.line}>
        <LinearProgress className={classes.progress} variant="determinate" value={NP.divide(mp, maxMp) * 100} />
      </div>
      <div className={classes.line}>
        <div className={classes.title}>攻击力:</div>
        <div>{attack}</div>
      </div>
      <div className={classes.line}>
        <div className={classes.title}>防御力:</div>
        <div>{defend}</div>
      </div>
    </div>
  );
};

export default BakaProps;
