import { LOGIN_USER } from "../Type/Type";
const intialState = {
    userDetails :null
};

const LoginUserDetailReducer = (state = intialState, action) => {
    console.log(action);

  switch (action.type) {
    case LOGIN_USER:
      console.log("action",action);
      return {
        ...state,
        userDetails: action.payload
      };
    // case LOGOUT_USER :
    //   return{loginUserDetail: null}
    default:
      return state;
  }
};
export default LoginUserDetailReducer;