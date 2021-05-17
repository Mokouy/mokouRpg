const wolfHeat = {
  name: '狼心',
  description: '明明是条狗，为什么它的心脏却是狼的？',
  effectDes: '增加50点生命上限，每回合回复5%的生命力',
  propsAdd: {
    hp: '50',
    turnHealPercent: '0.05',
  },
  id: '1',
};

const sharpTeeth = {
  name: '锋利的牙齿',
  description: '猫猫狗狗们一直都是新人冒险者的好老师，一次性的那种',
  effectDes: '增加5点攻击力，5%的暴击率，10%的暴击伤害',
  propsAdd: {
    attack: '50',
    crit: '5',
    critDamage: '10',
  },
  id: '2',
};

const ultimateHeadset = {
  name: '究极耳机',
  description: '这只耳机超越了耳机的极限，获得了不可思议的力量',
  effectDes: '增加2点防御力',
  propsAdd: {
    defend: '2',
  },
  id: '2',
};

const ironBranch = {
  name: '铁树枝干',
  description: '一根看起来很普通的树枝，它如铁般坚硬的品质赋予持有者好运。',
  effectDes: '增加1点所有属性',
  propsAdd: {
    hp: '1',
    maxHp: '1',
    mp: '1',
    maxMp: '1',
    attack: '1',
    defend: '1',
    turnHealPercent: '1',
    turnHeal: '1',
    crit: '1',
    critDamage: '0.01',
  },
  id: '2',
};

const Trophy = {
  wolfHeat,
  sharpTeeth,
};

export default Trophy;
