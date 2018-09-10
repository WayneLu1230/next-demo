import {combineReducers} from 'redux';
import LayoutReducer from '../components/Layout/LayoutReducer';

export default combineReducers({
    layout:LayoutReducer
})