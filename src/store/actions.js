import {
    GET_LEAGUE_INFOS,
    GET_LEAGUE_INFOS_SUCCESS,
    GET_LEAGUE_INFOS_ERROR,
    GET_ALL_TEAMS,
    GET_ALL_TEAMS_SUCCESS,
    GET_ALL_TEAMS_ERROR,
    GET_ALL_PLAYERS,
    GET_ALL_PLAYERS_SUCCESS,
    GET_ALL_PLAYERS_ERROR,
    GET_PLAYER_DETAIL,
    GET_PLAYER_DETAIL_CONTRACT,
    GET_PLAYER_DETAIL_TEAMS,
    GET_PLAYER_DETAIL_HONOURS,
    GET_PLAYER_DETAIL_ERROR,
    GET_TEAM_CALENDAR,
    GET_TEAM_CALENDAR_LAST,
    GET_TEAM_CALENDAR_NEXT,
    GET_TEAM_CALENDAR_ERROR
} from './actionsTypes';

export const getTeamCalendar = (payload) => ({
    type: GET_TEAM_CALENDAR,
    payload
});

export const getTeamCalendarNext = (payload) => ({
    type: GET_TEAM_CALENDAR_NEXT,
    payload
});

export const getTeamCalendarLast = (payload) => ({
    type: GET_TEAM_CALENDAR_LAST,
    payload
});

export const getTeamCalendarError = (paload) => ({
    type: GET_TEAM_CALENDAR_ERROR,
});

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
    type: GET_ALL_TEAMS_ERROR,
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
    type: GET_ALL_PLAYERS_ERROR,
});

export const getPlayerDetail = (payload) => ({
    type: GET_PLAYER_DETAIL,
    payload
});

export const getPlayerDetailContract = (payload) => ({
    type: GET_PLAYER_DETAIL_CONTRACT,
    payload
});

export const getPlayerDetailTeams = (payload) => ({
    type: GET_PLAYER_DETAIL_TEAMS,
    payload
});

export const getPlayerDetailHonours = (payload) => ({
    type: GET_PLAYER_DETAIL_HONOURS,
    payload
});

export const getPlayerDetailError = () => ({
    type: GET_PLAYER_DETAIL_ERROR,
    
});