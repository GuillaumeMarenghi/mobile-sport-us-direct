import {
    GET_LEAGUE_INFOS,
    GET_LEAGUE_INFOS_SUCCESS,
    GET_LEAGUE_INFOS_ERROR
} from './actionsTypes';

export const getLeagueInfos = (payload) => ({
    type: GET_LEAGUE_INFOS,
    payload
});

export const getLeagueInfosSuccess = (payload) => ({
    type: GET_LEAGUE_INFOS_SUCCESS,
    payload
});

export const getLeagueInfosError = () => ({
    type: GET_LEAGUE_INFOS_ERROR,
});