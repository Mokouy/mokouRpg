import React, { useState } from 'react';
import { useStore } from 'reto';
import Button from '@material-ui/core/Button';
import BakaPropsStore from '../../stores/BakaPropsStore';
import { delay } from '../../utils/common';
import { handleAttack } from '../../utils/calculate';
import useStyles from './actionCss';

const ActionArea = () => {
  const classes = useStyles();
  const bakaPropsStore = useStore(BakaPropsStore);
  const { getBakaProps, getEnemyProps, updateBakaProps, updateEnemyProps, setText } = bakaPropsStore;
  const [loading, setLoading] = useState(false);

  const handleClickAttack = async () => {
    setLoading(true);
    const charaResult = handleAttack(getBakaProps(), getEnemyProps(), setText);
    const { iProps, tProps } = charaResult;
    updateBakaProps(iProps);
    updateEnemyProps(tProps);
    await delay(333);
    if (tProps.hp === 0) {
      setText(`${tProps.name} 再起不能`);
      setLoading(false);
      return null;
    }
    const enemyResult = handleAttack(tProps, iProps, setText);
    const { iProps: newIProps, tProps: newTProps } = enemyResult;
    updateEnemyProps(newIProps);
    updateBakaProps(newTProps);
    await delay(333);
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <div>
        <Button disabled={loading} onClick={handleClickAttack} variant="contained" color="secondary">攻击</Button> 
      </div>
    </div>
  );
};

export default ActionArea;
