import {
    GET_HIGHLIGHTS,
    GET_HIGHLIGHTS_L1_SUCCESS,
    GET_HIGHLIGHTS_L2_SUCCESS,
    GET_HIGHLIGHTS_N1_SUCCESS,
    GET_HIGHLIGHTS_ERROR
} from '../actions/actionsTypes';

const defaultState = {};

export const highlights = (state = defaultState, action = {}) => {
    switch (action.type) {
        case GET_HIGHLIGHTS:
            return {
                ...state,
                loading: true,
                league: action.payload
            }
        case GET_HIGHLIGHTS_L1_SUCCESS:
            return {
                ...state,
                loading: false,
                L1highlights: action.payload
            }
        case GET_HIGHLIGHTS_L2_SUCCESS:
            return {
                ...state,
                loading: false,
                L2highlights: action.payload
            }
        case GET_HIGHLIGHTS_N1_SUCCESS:
            return {
                ...state,
                loading: false,
                N1highlights: action.payload
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