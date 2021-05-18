const wolfHeat = {
  name: '狼心',
  description: '明明是条狗，为什么它的心脏却是狼的？',
  effectDes: '增加50点生命上限，每回合回复5%的生命力',
  propsAdd: {
    hp: '50',
    maxHp: '50',
    turnHealPercent: '0.05',
  },
  id: 'wolfHeat',
};

const sharpTeeth = {
  name: '锋利的牙齿',
  description: '猫猫狗狗们一直都是新人冒险者的好老师，一次性的那种',
  effectDes: '增加5点攻击力，5%的暴击率，10%的暴击伤害',
  propsAdd: {
    attack: '5',
    crit: '5',
    critDamage: '0.1',
  },
  id: 'sharpTeeth',
};

const ultimateHeadset = {
  name: '究极耳机',
  description: '这只耳机超越了耳机的极限，获得了不可思议的力量',
  effectDes: '增加2点防御力',
  propsAdd: {
    defend: '2',
  },
  id: 'ultimateHeadset',
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
    turnHealPercent: '0.01',
    turnHeal: '1',
    crit: '1',
    critDamage: '0.01',
  },
  id: 'ironBranch',
};

const goldChain = {
  name: '一条金链子',
  description: '美好的首饰能够为佩戴者增添气质与魅力，爱情需要简简单单的，生活亦是需要简简单单，也许仅仅是一间小小的房子、一页漂亮的落地窗、一米温暖的阳光、便足以为呈现爱的简单与快乐。这是一款18k金项链，它以经典而精致的结链设计为主，其纯粹的金属光泽与精致的抛光处理相搭，再加上那简约时尚的设计元素，无需繁琐复杂的点缀便可尽显颈间风情。哦当然，那是它还在上一任漂亮的女主人脖子上的时候',
  effectDes: '增加1点防御力，5%的暴击率',
  propsAdd: {
    defend: '1',
    crit: '5',
  },
  id: 'goldChain',
};

const Trophy = {
  wolfHeat,
  sharpTeeth,
  ultimateHeadset,
  ironBranch,
  goldChain,
};

export default Trophy;
