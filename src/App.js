import React, { useEffect, useState } from 'react';
import { Provider, useStore } from 'reto';
import MainPage from './components/main-page';
import { load, save } from './utils/save';
import BakaPropsStore from './stores/BakaPropsStore';

function App() {
  const [isFirst, setIsFirst] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const bakaData = load();
    // const { isExist } = bakaData;
    // if (!isExist) {
    //   setIsFirst(true);
    //   save({
    //     isExist: true,
    //     hp: '100',
    //     mp: '50',
    //   });
    // }
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Provider of={BakaPropsStore}>
      <MainPage
        first={isFirst}
      />
    </Provider>
  );
}

export default App;
