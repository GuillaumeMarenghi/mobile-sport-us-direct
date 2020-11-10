import {
  GET_LEAGUE_INFOS,
  GET_LEAGUE_INFOS_SUCCESS,
  GET_LEAGUE_INFOS_ERROR
} from '../actionsTypes';

const defaultState = {
    leagues: [
      {id: 4387, name:"NBA", badge:"https://www.thesportsdb.com/images/media/league/badge/frdjqy1536585083.png"},
      {id: 4424,name:"MLB", badge:"https://www.thesportsdb.com/images/media/league/badge/c5r83j1521893739.png"},
      {id: 4391,name:"NFL", badge:"https://www.thesportsdb.com/images/media/league/badge/trppxv1421413032.png"},
      {id: 4380,name:"NHL", badge:"https://www.thesportsdb.com/images/media/league/badge/vxwtqq1421413200.png"},
      {id: 4346,name:"MLS", badge:"https://www.thesportsdb.com/images/media/league/badge/dqo6r91549878326.png"}
      ],
};

export const infos = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LEAGUE_INFOS:
      return {
        ...state,
        loading: true,
        leagueId: action.payload
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
    default:
      return state;
  }
};