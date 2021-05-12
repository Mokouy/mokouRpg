import NP from 'number-precision';

const handleAttack = (initiatorProps, targetProps, setText) => {
  const { attack: initiatorAttack, name: initiatorName } = initiatorProps;
  const { defend: targetDefend, hp: targetHp, name: targetName } = targetProps;
  let initiatorDamege = NP.minus(initiatorAttack, targetDefend);
  if (initiatorDamege < 0) {
    initiatorDamege = 0;
  }

  const iProps = {
    ...initiatorProps,
  };

  const tProps = {
    ...targetProps,
    hp: NP.minus(targetHp, initiatorDamege),
  };

  const resultText = `${initiatorName} 对 ${targetName} 造成了 ${initiatorDamege} 点伤害`;
  setText(resultText);

  return {
    iProps,
    tProps,
    resultText,
  };
};

export {
  handleAttack,
};
