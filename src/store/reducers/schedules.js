import {
    GET_RANKING_L1,
    GET_RANKING_L2,
    GET_RANKING_N1,
    GET_RANKING_L1_SUCCESS,
    GET_RANKING_L2_SUCCESS,
    GET_RANKING_N1_SUCCESS,
    GET_RANKING_ERROR,
} from '../actions/actionsTypes';

const defaultState = {
  loading: true
};

export const schedules = (state = defaultState, action = {}) => {
    switch (action.type) {
      case GET_RANKING_L1:
        return {
          ...state,
          loading: true,
        }
      case GET_RANKING_L1_SUCCESS:
        return {
          ...state,
          loading: false,
          Lrank: action.payload,
          requestError: false
        }
      case GET_RANKING_N1:
        return {
          ...state,
          loading: true,
        }
      case GET_RANKING_N1_SUCCESS:
        return {
          ...state,
          loading: false,
          Lrank: action.payload,
          requestError: false
        }
      case GET_RANKING_L2:
        return {
          ...state,
          loading: true,
        }
      case GET_RANKING_L2_SUCCESS:
        return {
          ...state,
          loading: false,
          Lrank: action.payload,
          requestError: false
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