import NP from 'number-precision';
import enemySkill from '../components/enemys/enemySkill';

// 攻击触发
const handleAttack = (initiatorProps, targetProps, setText) => {
  const { attack: initiatorAttack, name: initiatorName, crit: initiatorCrit, critDamage: initiatorCritDamage } = initiatorProps;
  const { defend: targetDefend, hp: targetHp, name: targetName } = targetProps;
  let isCrit = false;
  let initiatorDamege = NP.minus(initiatorAttack, targetDefend);
  // 未能击穿护甲
  if (initiatorDamege < 0) {
    initiatorDamege = 0;
  }
  // 暴击判定
  if (NP.strip(initiatorCrit) > 0) {
    const currentRoll = NP.times(Math.random(), 100);
    if (!(NP.strip(initiatorCrit) < currentRoll)) {
      initiatorDamege = NP.times(initiatorDamege, initiatorCritDamage);
      isCrit = true;
    }
  }

  const iProps = {
    ...initiatorProps,
  };

  const tProps = {
    ...targetProps,
    hp: NP.minus(targetHp, initiatorDamege),
  };

  let resultText = `${initiatorName} 对 ${targetName} 造成了 ${initiatorDamege} 点伤害`;
  if (isCrit) {
    resultText = `${initiatorName}暴击了！ 对 ${targetName} 造成了 ${initiatorDamege} 点暴击伤害`;
  }
  setText(resultText);

  return {
    iProps,
    tProps,
    resultText,
  };
};

// 回合结束方法
const turnEnd = (bakaProps) => {
  const { maxHp, turnHealPercent, turnHeal, hp } = bakaProps;
  const turnHealPercentValue = NP.times(maxHp, turnHealPercent);
  const newHp = NP.plus(hp, turnHeal, turnHealPercentValue);
  const res = { 
    ...bakaProps,
    hp: newHp > maxHp ? maxHp : newHp,
  };

  return res;
};

// 获得战利品
const getTrophy = (bakaProps, trophyProps) => {
  const { propsAdd, id } = trophyProps;
  const changeProps = {
    hp: NP.plus(bakaProps.hp, propsAdd?.hp || 0),
    maxHp: NP.plus(bakaProps.maxHp, propsAdd?.maxHp || 0),
    mp: NP.plus(bakaProps.mp, propsAdd?.mp || 0),
    maxMp: NP.plus(bakaProps.maxMp, propsAdd?.maxMp || 0),
    attack: NP.plus(bakaProps.attack, propsAdd?.attack || 0),
    defend: NP.plus(bakaProps.defend, propsAdd?.defend || 0),
    turnHealPercent: NP.plus(bakaProps.turnHealPercent, propsAdd?.turnHealPercent || 0),
    turnHeal: NP.plus(bakaProps.turnHeal, propsAdd?.turnHeal || 0),
    crit: NP.plus(bakaProps.crit, propsAdd?.crit || 0),
    critDamage: NP.plus(bakaProps.critDamage, propsAdd?.critDamage || 0),
  };
  if (changeProps.hp > changeProps.maxHp) {
    changeProps.hp = changeProps.maxHp;
  }
  if (changeProps.mp > changeProps.maxMp) {
    changeProps.mp = changeProps.maxMp;
  }
  bakaProps.trophy.push(id);
  return {
    ...bakaProps,
    ...changeProps,
  };
};

// 治愈技能
const handleSkillHeal = (bakaProps, setText) => {
  const { hp, maxHp, name, mp } = bakaProps;
  const healHp = NP.times(maxHp, 0.2);
  const newHp = NP.plus(hp, healHp);
  const newMp = NP.minus(mp, 10);
  const res = { 
    ...bakaProps,
    hp: newHp > maxHp ? maxHp : newHp,
    mp: newMp,
  };
  setText(`${name} 使用了 治愈 回复了 ${NP.minus(res.hp, hp)} 点生命力`);

  return res;
};

// 敌方技能触发
const handleEnemySkill = (enemyProps, bakaProps, setText) => {
  const { attack: initiatorAttack, name: initiatorName, crit: initiatorCrit, critDamage: initiatorCritDamage, skill: initiatorSkill } = enemyProps;
  const { defend: targetDefend, hp: targetHp, name: targetName } = bakaProps;
  let isCrit = false;
  const useSkill = enemySkill[getRandomArr(initiatorSkill, 1)];
  let initiatorDamege = NP.minus(useSkill.damage, targetDefend);
  // 未能击穿护甲
  if (initiatorDamege < 0) {
    initiatorDamege = 0;
  }
  // 暴击判定
  if (NP.strip(initiatorCrit) > 0) {
    const currentRoll = NP.times(Math.random(), 100);
    if (!(NP.strip(initiatorCrit) < currentRoll)) {
      initiatorDamege = NP.times(initiatorDamege, initiatorCritDamage);
      isCrit = true;
    }
  }

  const iProps = {
    ...enemyProps,
  };

  const tProps = {
    ...bakaProps,
    hp: NP.minus(targetHp, initiatorDamege),
  };

  let resultText = `${initiatorName} 使用了 ${useSkill.name} 造成了 ${initiatorDamege} 点伤害`;
  if (isCrit) {
    resultText = `${initiatorName} 使用 ${useSkill.name} 暴击了！ 对 ${targetName} 造成了 ${initiatorDamege} 点暴击伤害`;
  }
  setText(resultText);

  return {
    iProps,
    tProps,
    resultText,
  };
};

// 随机抽取数组中几个数
const getRandomArr = (arr, count) => {
  let i = arr.length;
  if (i < count || i === count) {
    return arr;
  }
  const shuffled = arr.slice(0);
  const min = i - count;
  let temp;
  let index;
  // eslint-disable-next-line no-plusplus
  while (i-- > min) { // 打乱数组
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
};

export {
  handleAttack,
  turnEnd,
  getRandomArr,
  getTrophy,
  handleSkillHeal,
  handleEnemySkill,
};
