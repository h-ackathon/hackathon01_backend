import {
    FETCH_ALL_LEAGUES,
    SET_MATCH, SET_PLAYER, SET_STAT,
    SET_LEAGUE_MATCHES_AND_PLAYERS
} from '../actions/types';
import PlayerStats from '../models/playerstats';

const INITIAL_STATE = {
    leagues: [],
    matches: [],
    players: [],
    league: null,
    match: null,
    player: null,
    player_stats: new PlayerStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case SET_LEAGUE_MATCHES_AND_PLAYERS:
            return {
                ...state,
                league: action.payload.league,
                matches: action.payload.matches,
                players: action.payload.players
            };
        case FETCH_ALL_LEAGUES:
            return {
                ...state,
                leagues: action.payload
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
            console.log(state.player_stats);
            return {
                ...state,
                player_stats: { ...state.player_stats, [action.payload.key]: action.payload.value }
            };
        default:
            return {
                ...state
            };
    };
};