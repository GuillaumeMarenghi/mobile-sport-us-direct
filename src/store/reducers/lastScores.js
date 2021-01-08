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
    GET_LOGO,
    GET_LOGO_SUCCESS,
    GET_LAST_SCORE_ERROR,
    POST_NAV
} from '../actions/actionsTypes';
  
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
        gameLastScores: action.payload,
        requestError: false
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
        gameLastScores: action.payload,
        requestError: false
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
        gameLastScores: action.payload,
        requestError: false
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
        gameLastScores: action.payload,
        requestError: false
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
        gameLastScores: action.payload,
        requestError: false
    }
    case GET_LAST_SCORE_ERROR:
    return {
        ...state,
        loading: false,
        requestError: true
    }
    case GET_LOGO:
        return {
            ...state,
            leagueOpen: action.payload,
            logo: null
        }
    case GET_LOGO_SUCCESS:
        return {
            ...state,
            logo: action.payload
        }
    case POST_NAV:
        return {
            ...state,
            navigation: action.payload
        }
    default:
    return state;
}
};