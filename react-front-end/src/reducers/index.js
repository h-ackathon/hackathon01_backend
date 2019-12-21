import { combineReducers } from 'redux';
import StatsReducer from './stats';
import LeaguesReducers from './LeaguesReducers';
import AddPlayerReducer from './AddPlayerReducer';
import TeamsReducer from './TeamsReducer';
import AddTeamReducer from './AddTeamReducer';
import AddMatchReducer from './AddMatchReducer';

export default combineReducers({
    stats: StatsReducer,
    leagues: LeaguesReducers,
    addPlayerForm: AddPlayerReducer,
    teams: TeamsReducer,
    addTeamForm: AddTeamReducer,
    addMatchForm: AddMatchReducer,
});