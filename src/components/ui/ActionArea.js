import React, { useState } from 'react';
import { useStore } from 'reto';
import NP from 'number-precision';
import BakaPropsStore from '../../stores/BakaPropsStore';
import { delay } from '../../utils/common';
import descriptionText from '../../utils/descriptionText';
import { handleAttack, turnEnd, getRandomArr, handleSkillHeal, handleEnemySkill } from '../../utils/calculate';
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
    const trophyPool = enemy.trophy.filter((v) => !baka.trophy.includes(v));
    const currentTrophys = getRandomArr(trophyPool, 3);
    setModalData({ open: true, trophys: currentTrophys });
    setActionStatus('common');
  };

  const gameOver = () => {
    setText('你死了，菜!');
    setActionStatus('die');
    setLoading(false);
  };

  const actionTurnEnd = (turnEndBakaProps) => {
    const result = turnEnd(turnEndBakaProps);
    updateBakaProps(result);
  };

  const enemyAction = async (bakaProps, enemyProps) => {
    let enemyResult = {};
    let newEnemyProps = {};
    let newBakaProps = {};
    const currentRoll = NP.times(Math.random(), 100);
    if (enemyProps?.skill.length > 0 && !(enemyProps.skillProbability < currentRoll)) {
      enemyResult = handleEnemySkill(enemyProps, bakaProps, setText);
      newEnemyProps = enemyResult.iProps;
      newBakaProps = enemyResult.tProps;
    } else {
      enemyResult = handleAttack(enemyProps, bakaProps, setText);
      newEnemyProps = enemyResult.iProps;
      newBakaProps = enemyResult.tProps;
    }

    updateEnemyProps(newEnemyProps);
    updateBakaProps(newBakaProps);
    await delay(233);
    
    if (!(newBakaProps.hp > 0)) {
      gameOver();
      return null;
    }
    if (!(newEnemyProps.hp > 0)) {
      actionTurnEnd(newBakaProps);
      victory(newBakaProps, newEnemyProps);
      setLoading(false);
      return null;
    }
    actionTurnEnd(newBakaProps);
    setLoading(false);
  };

  const handleClickAttack = async () => {
    setLoading(true);
    const charaResult = handleAttack(getBakaProps(), getEnemyProps(), setText);
    const { iProps, tProps } = charaResult;
    updateBakaProps(iProps);
    updateEnemyProps(tProps);
    await delay(233);
    if (!(iProps.hp > 0)) {
      gameOver();
      return null;
    }
    if (!(tProps.hp > 0)) {
      actionTurnEnd(iProps);
      victory(iProps, tProps);
      setLoading(false);
      return null;
    }
    enemyAction(iProps, tProps);
  };

  const handleClickSkillHeal = async () => {
    setLoading(true);
    const bakaProps = handleSkillHeal(getBakaProps(), setText);
    updateBakaProps(bakaProps);
    await delay(233);
    enemyAction(bakaProps, getEnemyProps());
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

  const handleClickAgain = () => {
    window.location.reload();
  };

  if (actionStatus === 'common') {
    return (
      <div className={classes.root}>
        <ActionButton
          loading={loading}
          text="前进"
          key="step"
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
          key="attack"
          description={descriptionText.action.attack}
          onClick={handleClickAttack}
        />
        <ActionButton
          loading={loading}
          text="技能"
          key="skill"
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
          loading={loading || getBakaProps().mp < 10}
          text="治愈"
          key="heal"
          description={descriptionText.skill.heal}
          onClick={handleClickSkillHeal}
        />
        <ActionButton
          loading={loading}
          text="返回"
          key="skillBack"
          description={descriptionText.back}
          onClick={() => setActionStatus('action')}
        />
      </div>
    );
  }
  
  if (actionStatus === 'die') {
    return (
      <div className={classes.root}>
        <ActionButton
          loading={loading}
          text="再来"
          key="again"
          description={descriptionText.die.again}
          onClick={handleClickAgain}
        />
      </div>
    );
  }
};

export default ActionArea;
