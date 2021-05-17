import React, { useState } from 'react';
import { useStore } from 'reto';
import BakaPropsStore from '../../stores/BakaPropsStore';
import { delay } from '../../utils/common';
import descriptionText from '../../utils/descriptionText';
import { handleAttack, turnEnd, getRandomArr } from '../../utils/calculate';
import Enemys from '../enemys';
import ActionButton from './ActionButton';
import useStyles from './actionCss';

const ActionArea = () => {
  const classes = useStyles();
  const bakaPropsStore = useStore(BakaPropsStore);
  const { getBakaProps, getEnemyProps, updateBakaProps, updateEnemyProps, setText, setEnemyProps, setModalData } = bakaPropsStore;
  const [loading, setLoading] = useState(false);
  const [actionStatus, setActionStatus] = useState('common');

  const victory = (baka, enemy) => {
    setText(`${enemy.name} 被击败了`);
    baka.defeat.push(enemy.id);
    updateBakaProps(baka);
    setEnemyProps({});
    const currentTrophys = getRandomArr(enemy.trophy, 3);
    setModalData({ open: true, trophys: currentTrophys });
    setActionStatus('common');
  };

  const actionTurnEnd = (turnEndBakaProps) => {
    const result = turnEnd(turnEndBakaProps);
    updateBakaProps(result);
  };

  const handleClickAttack = async () => {
    setLoading(true);
    const charaResult = handleAttack(getBakaProps(), getEnemyProps(), setText);
    const { iProps, tProps } = charaResult;
    updateBakaProps(iProps);
    updateEnemyProps(tProps);
    await delay(233);
    if (!(iProps.hp > 0)) {
      console.log('战败');
      return null;
    }
    if (!(tProps.hp > 0)) {
      actionTurnEnd(iProps);
      victory(iProps, tProps);
      setLoading(false);
      return null;
    }
    const enemyResult = handleAttack(tProps, iProps, setText);
    const { iProps: newIProps, tProps: newTProps } = enemyResult;
    updateEnemyProps(newIProps);
    updateBakaProps(newTProps);
    await delay(233);
    if (!(newTProps.hp > 0)) {
      console.log('战败');
      return null;
    }
    if (!(newIProps.hp > 0)) {
      actionTurnEnd(newTProps);
      victory(newTProps, newIProps);
      setLoading(false);
      return null;
    }
    actionTurnEnd(newTProps);
    setLoading(false);
  };

  const handleClickStep = async () => {
    const { defeat } = getBakaProps();
    const currentEnemy = Enemys[defeat.length] || {};
    const { name, id } = currentEnemy;
    if (!id) {
      return null;
    }
    setLoading(true);
    await delay(233);
    setText(`${name} 出现了！`);
    setEnemyProps(currentEnemy);
    setActionStatus('action');
    setLoading(false);
  };

  if (actionStatus === 'common') {
    return (
      <div className={classes.root}>
        <ActionButton
          loading={loading}
          text="前进"
          description={descriptionText.common.step}
          onClick={handleClickStep}
        />
      </div>
    );
  }

  if (actionStatus === 'action') {
    return (
      <div className={classes.root}>
        <ActionButton
          loading={loading}
          text="攻击"
          description={descriptionText.action.attack}
          onClick={handleClickAttack}
        />
        <ActionButton
          loading={loading}
          text="技能"
          description={descriptionText.action.skill}
          onClick={() => setActionStatus('skill')}
        />
      </div>
    );
  }

  if (actionStatus === 'skill') {
    return (
      <div className={classes.root}>
        <ActionButton
          loading={loading}
          text="治愈"
          description={descriptionText.skill.heal}
          onClick={handleClickAttack}
        />
        <ActionButton
          loading={loading}
          text="返回"
          description={descriptionText.back}
          onClick={() => setActionStatus('action')}
        />
      </div>
    );
  }
};

export default ActionArea;
