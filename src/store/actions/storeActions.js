import * as type from "./../types/storeTypes";

export const loginStart = () => ({ type: type.USER_LOGIN_START });

export const loginSuccess = (user) => ({ type: type.USER_LOGIN_SUCCESS, payload: user });

export const loginError = () => ({ type: type.USER_LOGIN_ERROR });

export const logout = () => {
  window.localStorage.removeItem("SENA-User");
  window.location.reload();
  return { type: type.USER_LOGOUT }
};

export const setErrorReq = (error) => ({ type: type.SET_ERROR_REQ, payload: error });

export const handleRouteChange = (title) => ({ type: type.HANDLE_ROUTE_CHANGE, payload: title });