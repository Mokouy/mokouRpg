import NP from 'number-precision';

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
    console.log('initiatorCrit', NP.strip(initiatorCrit));
    const currentRoll = NP.times(Math.random(), 100);
    if (NP.strip(initiatorCrit) > currentRoll || NP.strip(initiatorCrit) === currentRoll) {
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
  console.log('bakaProps', bakaProps);
  const turnHealPercentValue = NP.times(maxHp, turnHealPercent);
  const newHp = NP.plus(hp, turnHeal, turnHealPercentValue);
  const res = { 
    ...bakaProps,
    hp: newHp > maxHp ? maxHp : newHp,
   };

  return res;
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
};
