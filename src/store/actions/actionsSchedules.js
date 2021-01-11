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
} from './actionsTypes';

export const getRankingNBA = () => ({
    type: GET_RANKING_NBA
});

export const getRankingMLS = () => ({
    type: GET_RANKING_MLS
});

export const getRankingNFL = () => ({
    type: GET_RANKING_NFL
});

export const getRankingMLB = () => ({
    type: GET_RANKING_MLB
});

export const getRankingNHL = () => ({
    type: GET_RANKING_NHL
});

export const getRankingNBASuccess = (payload) => ({
    type: GET_RANKING_NBA_SUCCESS,
    payload
});

export const getRankingMLSSuccess = (payload) => ({
    type: GET_RANKING_MLS_SUCCESS,
    payload
});

export const getRankingNFLSuccess = (payload) => ({
    type: GET_RANKING_NFL_SUCCESS,
    payload
});

export const getRankingMLBSuccess = (payload) => ({
    type: GET_RANKING_MLB_SUCCESS,
    payload
});

export const getRankingNHLSuccess = (payload) => ({
    type: GET_RANKING_NHL_SUCCESS,
    payload
});

export const getRankingError = () => ({
    type: GET_RANKING_ERROR
})