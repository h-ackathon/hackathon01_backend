import { combineReducers } from 'redux';
import StatsReducer from './stats';

export default combineReducers({
    stats: StatsReducer
});