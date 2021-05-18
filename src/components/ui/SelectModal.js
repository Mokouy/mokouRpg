import React from 'react';
import { useStore } from 'reto';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import BakaPropsStore from '../../stores/BakaPropsStore';
import { getTrophy } from '../../utils/calculate';
import Trophy from '../../utils/trophy';
import useStyles from './selectModalCss';

const MainArea = () => {
  const bakaPropsStore = useStore(BakaPropsStore);
  const classes = useStyles();
  const { getModalData, updateBakaProps, getBakaProps, setModalData } = bakaPropsStore;
  const { open, trophys } = getModalData();

  const handleClickItem = (trophyProps) => {
    const newProps = getTrophy(getBakaProps(), trophyProps);
    updateBakaProps(newProps);
    setModalData({ open: false });
  };

  return (
    <Modal
      open={open}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {
            (trophys || []).map((item) => {
              const trophy = Trophy[item] || {};
              const { name, description, effectDes } = trophy;
              return (
                <div onClick={() => handleClickItem(trophy)} className={classes.itemWrapper}>
                  <div className={classes.title}>{name}</div>
                  <div className={classes.description}>{description}</div>
                  <div className={classes.effectDescription}>{effectDes}</div>
                </div>
              );
            })
          }
        </div>
      </Fade>
    </Modal>
  );
};

export default MainArea;
