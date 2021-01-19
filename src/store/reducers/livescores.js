import {
  GET_LIVE_SCORE_L1,
  GET_LIVE_SCORE_L2,
  GET_LIVE_SCORE_N1,
  GET_LIVE_SCORE_L1_SUCCESS,
  GET_LIVE_SCORE_L2_SUCCESS,
  GET_LIVE_SCORE_N1_SUCCESS,
  GET_LIVE_SCORE_ERROR
} from '../actions/actionsTypes';

const defaultState = {};

export const liveScores = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_LIVE_SCORE_L1:
      return {
        ...state,
        loading: true
      }
    case GET_LIVE_SCORE_L1_SUCCESS:
      return {
        ...state,
        loading: false,
        L1liveScrores: action.payload,
        eventsInLive: action.payload
      }
    case GET_LIVE_SCORE_N1:
      return {
        ...state,
        loading: true
      }
    case GET_LIVE_SCORE_N1_SUCCESS:
      return {
        ...state,
        loading: false,
        N1liveScrores: action.payload,
        eventsInLive: action.payload
      }
    case GET_LIVE_SCORE_L2:
      return {
        ...state,
        loading: true
      }
    case GET_LIVE_SCORE_L2_SUCCESS:
      return {
        ...state,
        loading: false,
        L2liveScrores: action.payload,
        eventsInLive: action.payload
      }
    case GET_LIVE_SCORE_ERROR:
      return {
        ...state,
        loading: false,
        requestError: true
      }
    default:
      return state;
  }
};