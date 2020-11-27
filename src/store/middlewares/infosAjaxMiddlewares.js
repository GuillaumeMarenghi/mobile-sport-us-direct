import axios from 'axios';
const API_KEY = 4013017;

import { GET_LEAGUE_INFOS, GET_ALL_TEAMS, GET_ALL_PLAYERS, GET_PLAYER_DETAIL} from '../actionsTypes';
import { getLeagueInfosSuccess, getLeagueInfosError, getAllTeamsSuccess, getAllTeamsError, getAllPlayersSuccess, getAllPlayersError, getPlayerDetailContract, getPlayerDetailHonours, getPlayerDetailTeams, getPlayerDetailError} from '../actions';

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
                    store.dispatch(getLeagueInfosError())
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
                    store.dispatch(getAllTeamsError());
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
                    store.dispatch(getAllPlayersError())
                }
            )
            break;
        case GET_PLAYER_DETAIL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookupcontracts.php?id=${store.getState().infos.playerId}`
            }).then(
                (res) => {
                    store.dispatch(getPlayerDetailContract(res.data.contracts))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getPlayerDetailError())
                }
            );
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookupformerteams.php?id=${store.getState().infos.playerId}`
            }).then(
                (res) => {
                    store.dispatch(getPlayerDetailTeams(res.data.formerteams))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getPlayerDetailError())
                }
            );
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuphonors.php?id=${store.getState().infos.playerId}`
            }).then(
                (res) => {
                    store.dispatch(getPlayerDetailHonours(res.data.honors))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getPlayerDetailError())
                }
            );
        default:
            return;
    }
}

export default infosAjaxMiddlewares;