import {
    GET_HIGHLIGHTS,
    GET_HIGHLIGHTS_NBA_SUCCESS,
    GET_HIGHLIGHTS_MLB_SUCCESS,
    GET_HIGHLIGHTS_NFL_SUCCESS,
    GET_HIGHLIGHTS_NHL_SUCCESS,
    GET_HIGHLIGHTS_MLS_SUCCESS,
    GET_HIGHLIGHTS_ERROR
} from '../actionsTypes';

const defaultState = {};

export const highlights = (state = defaultState, action = {}) => {
    switch (action.type) {
        case GET_HIGHLIGHTS:
            return {
                ...state,
                loading: true,
                league: action.payload
            }
        case GET_HIGHLIGHTS_NBA_SUCCESS:
            return {
                ...state,
                loading: false,
                NBAhighlights: action.payload
            }
        case GET_HIGHLIGHTS_MLB_SUCCESS:
            return {
                ...state,
                loading: false,
                MLBhighlights: action.payload
            }
        case GET_HIGHLIGHTS_NHL_SUCCESS:
            return {
                ...state,
                loading: false,
                NHLhighlights: action.payload
            }
        case GET_HIGHLIGHTS_NFL_SUCCESS:
            return {
                ...state,
                loading: false,
                NFLhighlights: action.payload
            }
        case GET_HIGHLIGHTS_MLS_SUCCESS:
            return {
                ...state,
                loading: false,
                MLShighlights: action.payload
            }
        case GET_HIGHLIGHTS_ERROR:
            return {
                ...state,
                loading: false,
                requestError: true
            }
        default:
            return state;
    }
}