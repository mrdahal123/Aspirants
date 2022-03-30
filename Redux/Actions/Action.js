import { LOGIN_USER } from "../Type/Type";
export  const LoginAction = (payload) => {
    console.log(payload)
    return{
        type: LOGIN_USER,
        payload:payload.number,
    }
}