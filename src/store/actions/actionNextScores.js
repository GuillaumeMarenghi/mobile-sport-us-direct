import {
    GET_NEXT_SCORE_NBA,
    GET_NEXT_SCORE_MLB,
    GET_NEXT_SCORE_NFL,
    GET_NEXT_SCORE_NHL,
    GET_NEXT_SCORE_MLS,
    GET_NEXT_SCORE_NBA_SUCCESS,
    GET_NEXT_SCORE_MLB_SUCCESS,
    GET_NEXT_SCORE_NFL_SUCCESS,
    GET_NEXT_SCORE_NHL_SUCCESS,
    GET_NEXT_SCORE_MLS_SUCCESS,
    GET_NEXT_SCORE_ERROR,
} from './actionsTypes';

export const getNextScroresNBA = (payload) => ({
    type: GET_NEXT_SCORE_NBA,
    payload
});

export const getNextScroresNBAsuccess = (payload) => ({
    type: GET_NEXT_SCORE_NBA_SUCCESS,
    payload
});

export const getNextScroresMLB = (payload) => ({
    type: GET_NEXT_SCORE_MLB,
    payload
});

export const getNextScroresMLBsuccess = (payload) => ({
    type: GET_NEXT_SCORE_MLB_SUCCESS,
    payload
});

export const getNextScroresNFL = (payload) => ({
    type: GET_NEXT_SCORE_NFL,
    payload
});

export const getNextScroresNFLsuccess = (payload) => ({
    type: GET_NEXT_SCORE_NFL_SUCCESS,
    payload
});

export const getNextScroresNHL = (payload) => ({
    type: GET_NEXT_SCORE_NHL,
    payload
});

export const getNextScroresNHLsuccess = (payload) => ({
    type: GET_NEXT_SCORE_NHL_SUCCESS,
    payload
});

export const getNextScroresMLS = (payload) => ({
    type: GET_NEXT_SCORE_MLS,
    payload
});

export const getNextScroresMLSsuccess = (payload) => ({
    type: GET_NEXT_SCORE_MLS_SUCCESS,
    payload
});

export const getNextScroresError = () => ({
    type: GET_NEXT_SCORE_ERROR
});