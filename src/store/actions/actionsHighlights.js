import {
    GET_HIGHLIGHTS,
    GET_HIGHLIGHTS_L1_SUCCESS,
    GET_HIGHLIGHTS_L2_SUCCESS,
    GET_HIGHLIGHTS_N1_SUCCESS,
    GET_HIGHLIGHTS_ERROR
} from './actionsTypes';

export const getHighlights = (payload) => ({
    type: GET_HIGHLIGHTS,
    payload
});

export const getHighlightsL1Succes = (payload) => ({
    type: GET_HIGHLIGHTS_L1_SUCCESS,
    payload
});

export const getHighlightsL2Succes = (payload) => ({
    type: GET_HIGHLIGHTS_L2_SUCCESS,
    payload
});

export const getHighlightsN1Succes = (payload) => ({
    type: GET_HIGHLIGHTS_N1_SUCCESS,
    payload
});

export const getHighlightsError = (payload) => ({
    type: GET_HIGHLIGHTS_ERROR,
    payload
});