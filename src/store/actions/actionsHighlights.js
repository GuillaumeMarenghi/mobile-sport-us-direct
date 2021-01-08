import {
    GET_HIGHLIGHTS,
    GET_HIGHLIGHTS_NBA_SUCCESS,
    GET_HIGHLIGHTS_MLS_SUCCESS,
    GET_HIGHLIGHTS_NHL_SUCCESS,
    GET_HIGHLIGHTS_NFL_SUCCESS,
    GET_HIGHLIGHTS_MLB_SUCCESS,
    GET_HIGHLIGHTS_ERROR
} from './actionsTypes';

export const getHighlights = (payload) => ({
    type: GET_HIGHLIGHTS,
    payload
});

export const getHighlightsNBASucces = (payload) => ({
    type: GET_HIGHLIGHTS_NBA_SUCCESS,
    payload
});

export const getHighlightsMLSSucces = (payload) => ({
    type: GET_HIGHLIGHTS_MLS_SUCCESS,
    payload
});

export const getHighlightsNHLSucces = (payload) => ({
    type: GET_HIGHLIGHTS_NHL_SUCCESS,
    payload
});

export const getHighlightsNFLSucces = (payload) => ({
    type: GET_HIGHLIGHTS_NFL_SUCCESS,
    payload
});

export const getHighlightsMLBSucces = (payload) => ({
    type: GET_HIGHLIGHTS_MLB_SUCCESS,
    payload
});

export const getHighlightsError = (payload) => ({
    type: GET_HIGHLIGHTS_ERROR,
    payload
});