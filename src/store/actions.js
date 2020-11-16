import {
    GET_LEAGUE_INFOS,
    GET_LEAGUE_INFOS_SUCCESS,
    GET_LEAGUE_INFOS_ERROR,
    GET_ALL_TEAMS,
    GET_ALL_TEAMS_SUCCESS,
    GET_ALL_TEAMS_ERROR,
    GET_ALL_PLAYERS,
    GET_ALL_PLAYERS_SUCCESS,
    GET_ALL_PLAYERS_ERROR
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

export const getAllTeams = (payload) => ({
    type: GET_ALL_TEAMS,
    payload
});

export const getAllTeamsSuccess = (payload) => ({
    type: GET_ALL_TEAMS_SUCCESS,
    payload
});

export const getAllTeamsError = () => ({
    type: GET_ALL_TEAMS_ERROR
});

export const getAllPlayers = (payload) => ({
    type: GET_ALL_PLAYERS,
    payload
});

export const getAllPlayersSuccess = (payload) => ({
    type: GET_ALL_PLAYERS_SUCCESS,
    payload
});

export const getAllPlayersError = () => ({
    type: GET_ALL_PLAYERS_ERROR
})