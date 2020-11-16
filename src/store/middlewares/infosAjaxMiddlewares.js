import axios from 'axios';
const API_KEY = 4013017;

import { GET_LEAGUE_INFOS, GET_ALL_TEAMS, GET_ALL_PLAYERS} from '../actionsTypes';
import { getLeagueInfosSuccess, getLeagueInfosError, getAllTeamsSuccess, getAllTeamsError, getAllPlayersSuccess, getAllPlayersError} from '../actions';

const infosAjaxMiddlewares = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LEAGUE_INFOS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${store.getState().infos.leagueId}`
            }).then(
                (res) => {
                    //console.log('data 1' ,res.data.leagues[0]);
                    store.dispatch(getLeagueInfosSuccess(res.data.leagues[0]))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLeagueInfosError)
                }
            )
            break;
        case GET_ALL_TEAMS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${store.getState().infos.leagueName}`
            }).then(
                (res) => {
                    //console.log('data 2', res.data.teams);
                    store.dispatch(getAllTeamsSuccess(res.data.teams))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getAllTeamsError);
                }
            )
            break;
        case GET_ALL_PLAYERS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchplayers.php?t=${store.getState().infos.teamName}`
            }).then(
                (res) => {
                    store.dispatch(getAllPlayersSuccess(res.data.player))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getAllPlayersError)
                }
            )
        default:
            return;
    }
}

export default infosAjaxMiddlewares;