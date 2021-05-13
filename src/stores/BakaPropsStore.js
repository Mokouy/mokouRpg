import { useState } from 'react';

export default function BakaPropsStore() {
  const initBakaProps = {
    hp: '100',
    maxHp: '100',
    mp: '50',
    maxMp: '50',
    attack: '10',
    defend: '1',
    name: 'Mokou',
    defeat: [],
  };

  const [baka, setBaka] = useState(initBakaProps);
  const [enemy, setEnemy] = useState({});

  const [text, setText] = useState('');

  const setBakaProps = (newProps = {}) => {
    setBaka(newProps);
  };

  const updateBakaProps = (newProps = {}) => {
    setBaka({ ...baka, ...newProps });
  };

  const getBakaProps = () => baka;

  const setEnemyProps = (newProps = {}) => {
    setEnemy(newProps);
  };

  const updateEnemyProps = (newProps = {}) => {
    setEnemy({ ...enemy, ...newProps });
  };

  const getEnemyProps = () => enemy;

  const getHitorys = () => text;

  return {
    getBakaProps,
    setBakaProps,
    updateBakaProps,
    getHitorys,
    setText,
    getEnemyProps,
    setEnemyProps,
    updateEnemyProps,
  };
}
