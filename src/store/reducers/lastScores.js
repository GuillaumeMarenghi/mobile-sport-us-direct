import {
    GET_LAST_SCORE_NBA,
    GET_LAST_SCORE_MLB,
    GET_LAST_SCORE_NFL,
    GET_LAST_SCORE_NHL,
    GET_LAST_SCORE_MLS,
    GET_LAST_SCORE_NBA_SUCCESS,
    GET_LAST_SCORE_MLB_SUCCESS,
    GET_LAST_SCORE_NFL_SUCCESS,
    GET_LAST_SCORE_NHL_SUCCESS,
    GET_LAST_SCORE_MLS_SUCCESS,
    GET_LAST_SCORE_ERROR
} from '../actionsTypes';
  
const defaultState = {};
  
export const lastScores = (state = defaultState, action = {}) => {
switch (action.type) {
    case GET_LAST_SCORE_NBA:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_LAST_SCORE_NBA_SUCCESS:
    return {
        ...state,
        loading: false,
        NBAlastScores: action.payload
    }
    case GET_LAST_SCORE_NFL:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_LAST_SCORE_NFL_SUCCESS:
    return {
        ...state,
        loading: false,
        NFLlastScores: action.payload
    }
    case GET_LAST_SCORE_MLB:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_LAST_SCORE_MLB_SUCCESS:
    return {
        ...state,
        loading: false,
        MLBlastScores: action.payload
    }
    case GET_LAST_SCORE_NHL:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_LAST_SCORE_NHL_SUCCESS:
    return {
        ...state,
        loading: false,
        NHLlastScores: action.payload
    }
    case GET_LAST_SCORE_MLS:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_LAST_SCORE_MLS_SUCCESS:
    return {
        ...state,
        loading: false,
        MLSlastScores: action.payload
    }
    case GET_LAST_SCORE_ERROR:
    return {
        ...state,
        loading: false,
        requestError: true
    }
    default:
    return state;
}
};