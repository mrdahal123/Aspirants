import { SUBJECTS } from "../Type/Type";
const intialState = {
    subjectdata:[],
}
export  const SubjectDetailsReducers = (state = intialState , action) =>{
    switch (action.type) {
        case SUBJECTS :
            console.log('scton',action)
            let apiData = action.payload
            state.subjectdata=apiData
            return{state};
        default :
        return state;
    }
}