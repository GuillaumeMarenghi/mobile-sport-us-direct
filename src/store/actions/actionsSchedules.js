import {
    GET_RANKING_L1,
    GET_RANKING_L2,
    GET_RANKING_N1,
    GET_RANKING_L1_SUCCESS,
    GET_RANKING_L2_SUCCESS,
    GET_RANKING_N1_SUCCESS,
    GET_RANKING_ERROR,
} from './actionsTypes';

export const getRankingL1 = () => ({
    type: GET_RANKING_L1
});

export const getRankingL2 = () => ({
    type: GET_RANKING_L2
});

export const getRankingN1 = () => ({
    type: GET_RANKING_N1
});

export const getRankingL1Success = (payload) => ({
    type: GET_RANKING_L1_SUCCESS,
    payload
});

export const getRankingL2Success = (payload) => ({
    type: GET_RANKING_L2_SUCCESS,
    payload
});

export const getRankingN1Success = (payload) => ({
    type: GET_RANKING_N1_SUCCESS,
    payload
});

export const getRankingError = () => ({
    type: GET_RANKING_ERROR
})