import React, { useEffect } from 'react';
import { useStore } from 'reto';
import Enemys from '../enemys';
import BakaPropsStore from '../../stores/BakaPropsStore';
import { BakaProps, MainArea } from '../ui';
import useStyles from './css';

const MainPage = (props) => {
  const { first } = props;
  const classes = useStyles();
  const bakaPropsStore = useStore(BakaPropsStore);
  const { setEnemyProps, setText } = bakaPropsStore;

  if (first) {
    console.log('first');
  }

  useEffect(() => {
    setEnemyProps(Enemys[0]);
    setText(`${Enemys[0].name} 出现了！`);
  }, []);
  
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.props}>
            <BakaProps />
          </div>
          <div className={classes.main}>
            <MainArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
