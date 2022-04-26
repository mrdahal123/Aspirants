import { LOGIN_USER ,SUBJECTS } from "../Type/Type";
export  const LoginAction = (payload) => {
    console.log(payload)
    return{
        type: LOGIN_USER,
        payload:payload,
    }
}
const subjectDataApi = ('https://mocki.io/v1/eebaf1e7-3230-4209-ac45-49e3d79b0bcc');
export const Subjects = () => {
   try{
       return async dispatch => {
           const result = await fetch(subjectDataApi,{
               method:'GET',
               headers :{
                   'Content-type' :'application/json',
               }
           });
           const json = await result.json();
           console.log(json);
           if(json){
              dispatch ({
                  type:SUBJECTS,
                  payload:json,
              }) 
           }
           else {
               console.log("data not found")
           }
       }
   }
   catch(error) {
       console.log(error);
   }
} 