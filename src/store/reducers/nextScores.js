import {
    GET_NEXT_SCORE_NBA,
    GET_NEXT_SCORE_MLB,
    GET_NEXT_SCORE_NFL,
    GET_NEXT_SCORE_NHL,
    GET_NEXT_SCORE_MLS,
    GET_NEXT_SCORE_NBA_SUCCESS,
    GET_NEXT_SCORE_MLB_SUCCESS,
    GET_NEXT_SCORE_NFL_SUCCESS,
    GET_NEXT_SCORE_NHL_SUCCESS,
    GET_NEXT_SCORE_MLS_SUCCESS,
    GET_NEXT_SCORE_ERROR,
} from '../actions/actionsTypes';
  
const defaultState = {};
  
export const nextScores = (state = defaultState, action = {}) => {
switch (action.type) {
    case GET_NEXT_SCORE_NBA:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_NEXT_SCORE_NBA_SUCCESS:
    return {
        ...state,
        loading: false,
        gameNextScores: action.payload,
        requestError: false
    }
    case GET_NEXT_SCORE_NFL:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_NEXT_SCORE_NFL_SUCCESS:
    return {
        ...state,
        loading: false,
        gameNextScores: action.payload,
        requestError: false
    }
    case GET_NEXT_SCORE_MLB:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_NEXT_SCORE_MLB_SUCCESS:
    return {
        ...state,
        loading: false,
        gameNextScores: action.payload,
        requestError: false
    }
    case GET_NEXT_SCORE_NHL:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_NEXT_SCORE_NHL_SUCCESS:
    return {
        ...state,
        loading: false,
        gameNextScores: action.payload,
        requestError: false
    }
    case GET_NEXT_SCORE_MLS:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_NEXT_SCORE_MLS_SUCCESS:
    return {
        ...state,
        loading: false,
        gameNextScores: action.payload,
        requestError: false
    }
    case GET_NEXT_SCORE_ERROR:
    return {
        ...state,
        loading: false,
        requestError: true
    }
    default:
        return state;
    }
};