import { createContext, useEffect, useReducer } from 'react';
import storeReducer from "./../reducers/storeReducer";

export const StoreContext = createContext(null);

const initStoreReducer = () => {
  return JSON.parse(localStorage.getItem('SENA-User')) || {isLogged: false, user: null};
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(storeReducer, {}, initStoreReducer);

  useEffect(() => {
    const { user, isLogged } = state;
    localStorage.setItem('SENA-User', JSON.stringify({ user, isLogged }));
  }, [state]);

  return (
    <StoreContext.Provider value={{...state, dispatch}}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;