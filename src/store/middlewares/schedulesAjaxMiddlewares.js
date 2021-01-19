import axios from 'axios';
const API_KEY = 4013017;

import { GET_RANKING_L1, GET_RANKING_L2, GET_RANKING_N1} from '../actions/actionsTypes';
import { getRankingL1Success, getRankingL2Success, getRankingN1Success, getRankingError} from '../actions/actionsSchedules';

const schedulesAjaxMiddlewares = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_RANKING_L1:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4334&s=2020-2021`,
            }).then(
                (res) => {
                    store.dispatch(getRankingL1Success(res.data.table))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getRankingError())
                }
            )
            break;
        case GET_RANKING_L2:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4401&s=2020-2021`
            }).then(
                (res) => {
                    store.dispatch(getRankingL2Success(res.data.table))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getRankingError())
                }
            )
            break;
        case GET_RANKING_N1:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4637&s=2020-2021`
            }).then(
                (res) => {
                    store.dispatch(getRankingN1Success(res.data.table))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getRankingError())
                }
            )
            break;
        default:
            return;
    }
}

export default schedulesAjaxMiddlewares;