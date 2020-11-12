import axios from 'axios';
import { GET_LEAGUE_INFOS, GET_ALL_TEAMS } from '../actionsTypes';
import { getLeagueInfosSuccess, getLeagueInfosError, getAllTeamsSuccess, getAllTeamsError} from '../actions';

const infosAjaxMiddlewares = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LEAGUE_INFOS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${store.getState().infos.leagueId}`
            }).then(
                (res) => {
                    console.log('data 1' ,res.data.leagues[0]);
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
                    console.log('data 2', res.data.teams);
                    store.dispatch(getAllTeamsSuccess(res.data.teams))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getAllTeamsError);
                }
            )
            break;
        default:
            return;
    }
}

export default infosAjaxMiddlewares;