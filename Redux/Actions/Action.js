import { LOGIN_USER ,SUBJECTS } from "../Type/Type";
export  const LoginAction = (payload) => {
    console.log(payload)
    return{
        type: LOGIN_USER,
        payload:payload,
    }
}
export const Subjects = (SubjectData) => {
    console.log(SubjectData)
    return{
        type:SUBJECTS,
        payload:SubjectData,
    }
} 