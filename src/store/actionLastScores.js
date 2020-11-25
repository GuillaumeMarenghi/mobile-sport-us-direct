import {
    GET_LAST_SCORE_NBA,
    GET_LAST_SCORE_MLB,
    GET_LAST_SCORE_NFL,
    GET_LAST_SCORE_NHL,
    GET_LAST_SCORE_MLS,
    GET_LAST_SCORE_NBA_SUCCESS,
    GET_LAST_SCORE_MLB_SUCCESS,
    GET_LAST_SCORE_NFL_SUCCESS,
    GET_LAST_SCORE_NHL_SUCCESS,
    GET_LAST_SCORE_MLS_SUCCESS,
    GET_LOGO,
    GET_LOGO_SUCCESS,
    GET_LAST_SCORE_ERROR
} from './actionsTypes';

export const getLastScroresNBA = (payload) => ({
    type: GET_LAST_SCORE_NBA,
    payload
});

export const getLastScroresNBAsuccess = (payload) => ({
    type: GET_LAST_SCORE_NBA_SUCCESS,
    payload
});

export const getLastScroresMLB = (payload) => ({
    type: GET_LAST_SCORE_MLB,
    payload
});

export const getLastScroresMLBsuccess = (payload) => ({
    type: GET_LAST_SCORE_MLB_SUCCESS,
    payload
});

export const getLastScroresNFL = (payload) => ({
    type: GET_LAST_SCORE_NFL,
    payload
});

export const getLastScroresNFLsuccess = (payload) => ({
    type: GET_LAST_SCORE_NFL_SUCCESS,
    payload
});

export const getLastScroresNHL = (payload) => ({
    type: GET_LAST_SCORE_NHL,
    payload
});

export const getLastScroresNHLsuccess = (payload) => ({
    type: GET_LAST_SCORE_NHL_SUCCESS,
    payload
});

export const getLastScroresMLS = (payload) => ({
    type: GET_LAST_SCORE_MLS,
    payload
});

export const getLastScroresMLSsuccess = (payload) => ({
    type: GET_LAST_SCORE_MLS_SUCCESS,
    payload
});

export const getLastScroresError = () => ({
    type: GET_LAST_SCORE_ERROR
});

export const getLogo = (payload) => ({
    type: GET_LOGO,
    payload
});

export const getLogoSuccess = (payload) => ({
    type: GET_LOGO_SUCCESS,
    payload
});

