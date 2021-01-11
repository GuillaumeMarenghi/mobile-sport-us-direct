import {
    GET_RANKING_NBA,
    GET_RANKING_MLS,
    GET_RANKING_MLB,
    GET_RANKING_NFL,
    GET_RANKING_NHL,
    GET_RANKING_NBA_SUCCESS,
    GET_RANKING_MLS_SUCCESS,
    GET_RANKING_MLB_SUCCESS,
    GET_RANKING_NFL_SUCCESS,
    GET_RANKING_NHL_SUCCESS,
    GET_RANKING_ERROR,
} from '../actions/actionsTypes';

const defaultState = {};

export const schedules = (state = defaultState, action = {}) => {
    switch (action.type) {
      case GET_RANKING_NBA:
        return {
          ...state,
          loading: true
        }
      case GET_RANKING_NBA_SUCCESS:
        return {
          ...state,
          loading: false,
          NBArank: action.payload,
        }
      case GET_RANKING_NFL:
        return {
          ...state,
          loading: true
        }
      case GET_RANKING_NFL_SUCCESS:
        return {
          ...state,
          loading: false,
          NFLrank: action.payload,
        }
      case GET_RANKING_MLB:
        return {
          ...state,
          loading: true
        }
      case GET_RANKING_MLB_SUCCESS:
        return {
          ...state,
          loading: false,
          MLBrank: action.payload,
        }
      case GET_RANKING_NHL:
      return {
        ...state,
        loading: true
      }
      case GET_RANKING_NHL_SUCCESS:
        return {
          ...state,
          loading: false,
          NHLrank: action.payload,
        }
      case GET_RANKING_MLS:
        return {
          ...state,
          loading: true
        }
      case GET_RANKING_MLS_SUCCESS:
        return {
          ...state,
          loading: false,
          MLSrank: action.payload,
      }
      case GET_RANKING_ERROR:
        return {
          ...state,
          loading: false,
          requestError: true
        }
      default:
        return state;
    }
  };