import { combineReducers } from 'redux';
import token from './token';
import image from './image';

const appReducers = combineReducers({
    token,
    image
});

export default appReducers;