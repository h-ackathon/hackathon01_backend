import {
    LOADING_START, LOADING_END
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: false,
    error_message: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                loading: true
            };

        case LOADING_END:
            return {
                ...state,
                loading: false,
                error: action.payload.error || false,
                error_message: action.payload.error_message || ''
            };

        default:
            return {
                ...state
            };
    };
};