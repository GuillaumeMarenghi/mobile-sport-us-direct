import {
  GET_LIVE_SCORE_NBA,
  GET_LIVE_SCORE_MLB,
  GET_LIVE_SCORE_NFL,
  GET_LIVE_SCORE_NHL,
  GET_LIVE_SCORE_MLS,
  GET_LIVE_SCORE_NBA_SUCCESS,
  GET_LIVE_SCORE_MLB_SUCCESS,
  GET_LIVE_SCORE_NFL_SUCCESS,
  GET_LIVE_SCORE_NHL_SUCCESS,
  GET_LIVE_SCORE_MLS_SUCCESS,
  GET_LIVE_SCORE_ERROR
} from '../actionsTypes';

const defaultState = {};

export const liveScores = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_LIVE_SCORE_NBA:
      return {
        ...state,
        loading: true
      }
    case GET_LIVE_SCORE_NBA_SUCCESS:
      return {
        ...state,
        loading: false,
        NBAliveScrores: action.payload
      }
    case GET_LIVE_SCORE_NFL:
      return {
        ...state,
        loading: true
      }
    case GET_LIVE_SCORE_NFL_SUCCESS:
      return {
        ...state,
        loading: false,
        NFLliveScrores: action.payload
      }
    case GET_LIVE_SCORE_MLB:
      return {
        ...state,
        loading: true
      }
    case GET_LIVE_SCORE_MLB_SUCCESS:
      return {
        ...state,
        loading: false,
        MLBliveScrores: action.payload
      }
    case GET_LIVE_SCORE_NHL:
    return {
      ...state,
      loading: true
    }
    case GET_LIVE_SCORE_NHL_SUCCESS:
      return {
        ...state,
        loading: false,
        NHLliveScrores: action.payload
      }
    case GET_LIVE_SCORE_MLS:
      return {
        ...state,
        loading: true
      }
    case GET_LIVE_SCORE_MLS_SUCCESS:
      return {
        ...state,
        loading: false,
        MLSliveScrores: action.payload
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