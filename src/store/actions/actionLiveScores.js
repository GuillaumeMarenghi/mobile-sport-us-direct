import {
    GET_LIVE_SCORE_L1,
    GET_LIVE_SCORE_L2,
    GET_LIVE_SCORE_N1,
    GET_LIVE_SCORE_L1_SUCCESS,
    GET_LIVE_SCORE_L2_SUCCESS,
    GET_LIVE_SCORE_N1_SUCCESS,
    GET_LIVE_SCORE_ERROR
} from './actionsTypes';

export const getLiveScroresL1 = () => ({
    type: GET_LIVE_SCORE_L1,
});

export const getLiveScroresL1success = (payload) => ({
    type: GET_LIVE_SCORE_L1_SUCCESS,
    payload
});

export const getLiveScroresL2 = () => ({
    type: GET_LIVE_SCORE_L2,
});

export const getLiveScroresL2success = (payload) => ({
    type: GET_LIVE_SCORE_L2_SUCCESS,
    payload
});

export const getLiveScroresN1 = () => ({
    type: GET_LIVE_SCORE_N1, 
});

export const getLiveScroresN1success = (payload) => ({
    type: GET_LIVE_SCORE_N1_SUCCESS,
    payload
});

export const getLiveScroresError = () => ({
    type: GET_LIVE_SCORE_ERROR
});