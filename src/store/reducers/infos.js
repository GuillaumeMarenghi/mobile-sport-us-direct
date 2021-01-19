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
} from '../actions/actionsTypes';

const defaultState = {
    leagues: [
      {id: 4334, name:"Ligue 1 Uber Eats", queryName: "French%20Ligue%201",  badge:"https://www.thesportsdb.com/images/media/league/badge/2yo0vn1592927519.png"},
      {id: 4401, name:"Ligue 2 BKT", queryName: "French%20Ligue%202" , badge:"https://www.thesportsdb.com/images/media/league/badge/32bol01592927502.png"},
      {id: 4637, name:"National 1", queryName: "French%20Championnat%20National" , badge:"https://www.thesportsdb.com/images/media/league/badge/odpejs1578785977.png"},
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