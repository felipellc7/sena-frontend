import React from 'react';
import PublicRouter from "../../routes/PublicRouter";
import StoreProvider from './../../store/context/storeContext';

const PublicContainer = () => {  
  return (
    <StoreProvider>
      <PublicRouter />
    </StoreProvider>
  )
};

const App = () => <PublicContainer />

export default App;