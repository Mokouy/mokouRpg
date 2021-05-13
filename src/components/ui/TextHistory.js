import React, { useEffect, useState } from 'react';
import { useStore } from 'reto';
import BakaPropsStore from '../../stores/BakaPropsStore';
import useStyles from './textHistoryCss';

const TextHistory = () => {
  const classes = useStyles();
  const bakaPropsStore = useStore(BakaPropsStore);
  const { getHitorys } = bakaPropsStore;
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const text = getHitorys();

  useEffect(() => {
    setText1(text2);
    setText2(text3);
    setText3(text4);
    setText4(text);
  }, [text]);

  return (
    <div className={classes.root}>
      <div className={classes.line}>
        {text1}
      </div>
      <div className={classes.line}>
        {text2}
      </div>
      <div className={classes.line}>
        {text3}
      </div>
      <div className={classes.newLine}>
        {text4}
      </div>
    </div>
  );
};

export default TextHistory;
