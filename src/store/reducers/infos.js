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
  GET_TEAM_CALENDAR_NEXT,
  GET_TEAM_CALENDAR_LAST,
  GET_TEAM_CALENDAR_ERROR
} from '../actionsTypes';

const defaultState = {
    leagues: [
      {id: 4387, name:"NBA", badge:"https://www.thesportsdb.com/images/media/league/badge/frdjqy1536585083.png"},
      {id: 4424, name:"MLB", badge:"https://www.thesportsdb.com/images/media/league/badge/c5r83j1521893739.png"},
      {id: 4391, name:"NFL", badge:"https://www.thesportsdb.com/images/media/league/badge/trppxv1421413032.png"},
      {id: 4380, name:"NHL", badge:"https://www.thesportsdb.com/images/media/league/badge/vxwtqq1421413200.png"},
      {id: 4346, name:"American%20Major%20League%20Soccer", badge:"https://www.thesportsdb.com/images/media/league/badge/dqo6r91549878326.png"}
      ],
      leagueInfos: null,
      loading:false
};

export const infos = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_LEAGUE_INFOS:
      return {
        ...state,
        loading: true,
        leagueId: action.payload,
        leagueInfos: null
      }
    case GET_LEAGUE_INFOS_SUCCESS:
      return {
        ...state,
        loading: false,
        leagueInfos: action.payload
      }
    case GET_LEAGUE_INFOS_ERROR:
      return {
        ...state,
        loading: false,
        requestError: true
      }
    case GET_ALL_TEAMS:
      return {
        ...state,
        loading: true,
        leagueName: action.payload,
        allTeams: null
      }
    case GET_ALL_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        allTeams: action.payload
      }
    case GET_ALL_TEAMS_ERROR:
      return {
        ...state,
        loading: false,
        requestError: true
      }
    case GET_ALL_PLAYERS:
      return {
        ...state,
        loading: true,
        teamName: action.payload,
        players: null
      }
    case GET_ALL_PLAYERS_SUCCESS:
      return {
        ...state,
        loading: false,
        players: action.payload
      }
    case GET_ALL_PLAYERS_ERROR:
      return {
        ...state,
        loading: false,
        requestError: true
      }
    case GET_PLAYER_DETAIL:
      return {
        ...state,
        playerId: action.payload,
        playerContract: null,
        playerTeams: null,
        playerHonours: null
      }
    case GET_PLAYER_DETAIL_CONTRACT:
      return {
        ...state,
        playerContract: action.payload
      }
    case GET_PLAYER_DETAIL_TEAMS:
      return {
        ...state,
        playerTeams: action.payload
      }
    case GET_PLAYER_DETAIL_HONOURS:
      return {
        ...state,
        playerHonours: action.payload
      }
    case GET_PLAYER_DETAIL_ERROR:
      return {
        ...state,
        requestError: true
      }
    case GET_TEAM_CALENDAR:
      return {
        ...state,
        teamId: action.payload,
        lastGame: null,
        nextGame: null
      }
    case GET_TEAM_CALENDAR_LAST:
      return {
        ...state,
        lastGame: action.payload
      }
    case GET_TEAM_CALENDAR_NEXT:
      return {
        ...state,
        nextGame: action.payload
      }
    case GET_TEAM_CALENDAR_ERROR:
      return {
        ...state,
        requestError: true
      }
    default:
      return state;
  }
};