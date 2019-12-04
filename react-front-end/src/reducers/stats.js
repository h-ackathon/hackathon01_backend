import {FETCH_ALL_LEAGUES, FETCH_ALL_LEAGUES_LOADING, FETCH_ALL_LEAGUES_ERROR,
    SET_MATCH, SET_PLAYER, SET_STAT,
    SAVE_STAT_LOADING, SAVE_STAT_FAILURE,
    SET_LEAGUE_MATCHES_AND_PLAYERS_LOADING, SET_LEAGUE_MATCHES_AND_PLAYERS_ERROR,
    SET_LEAGUE_MATCHES_AND_PLAYERS} from '../actions/types';
import PlayerStats from '../models/playerstats';

const INITIAL_STATE = {
    leagues: [],
    matches: [],
    players: [],
    league: null,
    match: null,
    player: null,
    player_stats: new PlayerStats(0,0,0,0,0,0,0,0,0,0),
    save_stat_loading: false,
    league_matches_and_players_loading: false,
    league_matches_and_players_error: false,
    save_stat_error: false,
    error_message: '',
    leagues_loading: false,
    leagues_error: false,
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case SAVE_STAT_LOADING:
            return {
                ...state,
                save_stat_loading: true
            };
        case SAVE_STAT_FAILURE:
            return {
                ...state,
                save_stat_error: true,
                error_message: action.payload
            };
        case SET_LEAGUE_MATCHES_AND_PLAYERS:
            return {
                ...state,
                matches: action.payload[0],
                players: action.payload[1]
            };
        case SET_LEAGUE_MATCHES_AND_PLAYERS_LOADING:
            return {
                ...state,
                league_matches_and_players_loading: true,
                league: action.payload
            };
        case SET_LEAGUE_MATCHES_AND_PLAYERS_ERROR:
            return {
                ...state,
                league_matches_and_players_error: true
            };
        case FETCH_ALL_LEAGUES:
            return {
                ...state,
                leagues: action.payload
            };
        case FETCH_ALL_LEAGUES_LOADING:
            return {
                ...state,
                leagues_loading: true
            };
        case FETCH_ALL_LEAGUES_ERROR:
            return {
                ...state,
                leagues_error: true,
                error_message: action.payload
            };
        case SET_MATCH:
            return {
                ...state,
                match: action.payload
            };
        case SET_PLAYER:
            return {
                ...state,
                player: action.payload
            };
        case SET_STAT:
            return {
                ...state,
                player_stats: {...state.player_stats, [action.payload.key]: action.payload.value}
            };
        default:
            return {
                ...state
            };
    };
};