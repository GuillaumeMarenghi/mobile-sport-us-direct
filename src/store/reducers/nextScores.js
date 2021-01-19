import {
    GET_NEXT_SCORE_L1,
    GET_NEXT_SCORE_L2,
    GET_NEXT_SCORE_N1,
    GET_NEXT_SCORE_L1_SUCCESS,
    GET_NEXT_SCORE_L2_SUCCESS,
    GET_NEXT_SCORE_N1_SUCCESS,
    GET_NEXT_SCORE_ERROR,
} from '../actions/actionsTypes';
  
const defaultState = {};
  
export const nextScores = (state = defaultState, action = {}) => {
switch (action.type) {
    case GET_NEXT_SCORE_L1:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_NEXT_SCORE_L1_SUCCESS:
    return {
        ...state,
        loading: false,
        gameNextScores: action.payload,
        requestError: false
    }
    case GET_NEXT_SCORE_N1:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_NEXT_SCORE_N1_SUCCESS:
    return {
        ...state,
        loading: false,
        gameNextScores: action.payload,
        requestError: false
    }
    case GET_NEXT_SCORE_L2:
    return {
        ...state,
        loading: true,
        visibleLeague: action.payload
    }
    case GET_NEXT_SCORE_L2_SUCCESS:
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