import {
    GET_LAST_SCORE_L1,
    GET_LAST_SCORE_L2,
    GET_LAST_SCORE_N1,
    GET_LAST_SCORE_L1_SUCCESS,
    GET_LAST_SCORE_L2_SUCCESS,
    GET_LAST_SCORE_N1_SUCCESS,
    GET_LOGO,
    GET_LOGO_SUCCESS,
    GET_LAST_SCORE_ERROR,
    POST_NAV
} from '../actions/actionsTypes';
  
const defaultState = {};
  
export const lastScores = (state = defaultState, action = {}) => {
switch (action.type) {
    case GET_LAST_SCORE_L1:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_LAST_SCORE_L1_SUCCESS:
    return {
        ...state,
        loading: false,
        gameLastScores: action.payload,
        requestError: false
    }
    case GET_LAST_SCORE_N1:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_LAST_SCORE_N1_SUCCESS:
    return {
        ...state,
        loading: false,
        gameLastScores: action.payload,
        requestError: false
    }
    case GET_LAST_SCORE_L2:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_LAST_SCORE_L2_SUCCESS:
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