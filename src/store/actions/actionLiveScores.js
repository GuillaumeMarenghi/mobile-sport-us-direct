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
} from './actionsTypes';

export const getLiveScroresNBA = () => ({
    type: GET_LIVE_SCORE_NBA,
});

export const getLiveScroresNBAsuccess = (payload) => ({
    type: GET_LIVE_SCORE_NBA_SUCCESS,
    payload
});

export const getLiveScroresMLB = () => ({
    type: GET_LIVE_SCORE_MLB,
});

export const getLiveScroresMLBsuccess = (payload) => ({
    type: GET_LIVE_SCORE_MLB_SUCCESS,
    payload
});

export const getLiveScroresNFL = () => ({
    type: GET_LIVE_SCORE_NFL, 
});

export const getLiveScroresNFLsuccess = (payload) => ({
    type: GET_LIVE_SCORE_NFL_SUCCESS,
    payload
});

export const getLiveScroresNHL = () => ({
    type: GET_LIVE_SCORE_NHL,    
});

export const getLiveScroresNHLsuccess = (payload) => ({
    type: GET_LIVE_SCORE_NHL_SUCCESS,
    payload
});

export const getLiveScroresMLS = () => ({
    type: GET_LIVE_SCORE_MLS, 
});

export const getLiveScroresMLSsuccess = (payload) => ({
    type: GET_LIVE_SCORE_MLS_SUCCESS,
    payload
});

export const getLiveScroresError = () => ({
    type: GET_LIVE_SCORE_ERROR
});