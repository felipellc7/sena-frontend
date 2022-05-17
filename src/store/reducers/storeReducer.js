import * as type from "./../types/storeTypes";

const userReducer = (state, action) => {
  switch (action.type) {
    case type.USER_LOGIN_START:
      return {
        user: null,
        isLogged: false
      };
    case type.USER_LOGIN_SUCCESS:  
      return {
        ...action.payload,
        isLogged: true
      };
    case type.USER_LOGIN_ERROR:
      return {
        user: null,
        isLogged: false,
      };
    case type.USER_LOGOUT:
      return {
        user: null,
        isLogged: false
      };
    case type.SET_ERROR_REQ:
      return {
        ...state,
        errorReq: action.payload
      };
    case type.HANDLE_ROUTE_CHANGE:
      return {
        ...state,
        currentRouteTitle: action.payload
      };
    default:
      return state;
  }
};

export default userReducer