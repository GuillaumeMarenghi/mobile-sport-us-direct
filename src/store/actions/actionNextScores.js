import {
    GET_NEXT_SCORE_L1,
    GET_NEXT_SCORE_L2,
    GET_NEXT_SCORE_N1,
    GET_NEXT_SCORE_L1_SUCCESS,
    GET_NEXT_SCORE_L2_SUCCESS,
    GET_NEXT_SCORE_N1_SUCCESS,
    GET_NEXT_SCORE_ERROR,
} from './actionsTypes';

export const getNextScroresL1 = (payload) => ({
    type: GET_NEXT_SCORE_L1,
    payload
});

export const getNextScroresL1success = (payload) => ({
    type: GET_NEXT_SCORE_L1_SUCCESS,
    payload
});

export const getNextScroresL2 = (payload) => ({
    type: GET_NEXT_SCORE_L2,
    payload
});

export const getNextScroresL2success = (payload) => ({
    type: GET_NEXT_SCORE_L2_SUCCESS,
    payload
});

export const getNextScroresN1 = (payload) => ({
    type: GET_NEXT_SCORE_N1,
    payload
});

export const getNextScroresN1success = (payload) => ({
    type: GET_NEXT_SCORE_N1_SUCCESS,
    payload
});

export const getNextScroresError = () => ({
    type: GET_NEXT_SCORE_ERROR
});