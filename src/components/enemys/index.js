const commonTrophy = ['ultimateHeadset', 'ironBranch'];

const wolf = {
  hp: '50',
  mp: '10',
  maxHp: '50',
  maxMp: '10',
  attack: '5',
  defend: '0',
  name: '长得很像一条狼的狗',
  id: '1',
  crit: '20',
  critDamage: '1.5',
  trophy: ['wolfHeat', 'sharpTeeth', ...commonTrophy],
  skill: ['wolfBite'],
  skillProbability: 20,
};

const robber = {
  hp: '100',
  mp: '30',
  maxHp: '100',
  maxMp: '30',
  attack: '7',
  defend: '1',
  crit: '0',
  critDamage: '1.5',
  name: '不知道从那里冒出来的普通强盗',
  id: '2',
  trophy: ['goldChain', ...commonTrophy],
  skill: [],
  skillProbability: 20,
};

const Enemys = [
  wolf,
  robber,
];

export default Enemys;
