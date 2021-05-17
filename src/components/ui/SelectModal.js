import React from 'react';
import { useStore } from 'reto';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import BakaPropsStore from '../../stores/BakaPropsStore';

const MainArea = () => {
  const bakaPropsStore = useStore(BakaPropsStore);
  const { getModalData } = bakaPropsStore;
  const { open } = getModalData();

  return (
    <Modal
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div>123</div>
    </Modal>
  );
};

export default MainArea;
