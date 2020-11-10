import axios from 'axios';
import { GET_LEAGUE_INFOS } from '../actionsTypes';
import { getLeagueInfosSuccess, getLeagueInfosError} from '../actions';

const infosAjaxMiddlewares = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LEAGUE_INFOS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${store.getState().infos.leagueId}`
            }).then(
                (res) => {
                    console.log('data' ,res.data);
                    store.dispatch(getLeagueInfosSuccess(res.data))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLeagueInfosError)
                }
            )
    }
}

export default infosAjaxMiddlewares;