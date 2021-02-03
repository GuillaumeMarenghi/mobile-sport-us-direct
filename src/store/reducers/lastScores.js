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
    POST_NAV,
    GET_EVENT_DETAIL_STATS_SUCCESS,
    GET_EVENT_DETAIL_TIMELINE_SUCCESS,
    GET_EVENT_DETAIL,
    CLEAR_STATE
} from '../actions/actionsTypes';
  
const defaultState = {};
  
export const lastScores = (state = defaultState, action = {}) => {
switch (action.type) {
    case CLEAR_STATE:
        return{
            ...state,
            eventDetailStats: "",
            eventDetailTimeline: ""
        }
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
    case GET_EVENT_DETAIL:
        return {
            ...state,
            eventId : action.payload,
            eventDetailStats: "",
            eventDetailTimeline: ""
        }
    case GET_EVENT_DETAIL_STATS_SUCCESS:
        return {
            ...state,
            eventDetailStats : action.payload,      
        }
    case GET_EVENT_DETAIL_TIMELINE_SUCCESS:
        return {
            ...state,
            eventDetailTimeline : action.payload
        }
    default:
    return state;
}
};