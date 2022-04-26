import { combineReducers } from 'redux';
import LoginUserDetailReducer from '../Reducers/Reducers';
import { SubjectDetailsReducers } from './SubjectsReducers';

export default combineReducers ({
    LoginUserDetailReducer , SubjectDetailsReducers
});