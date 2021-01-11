import axios from 'axios';
const API_KEY = 4013017;

import { GET_RANKING_NBA, GET_RANKING_NFL, GET_RANKING_NHL, GET_RANKING_MLB, GET_RANKING_MLS} from '../actions/actionsTypes';
import { getRankingNBASuccess, getRankingMLBSuccess, getRankingNFLSuccess, getRankingNHLSuccess, getRankingMLSSuccess, getRankingError} from '../actions/actionsSchedules';

const schedulesAjaxMiddlewares = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_RANKING_NBA:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4387&s=2020-2021`
            }).then(
                (res) => {
                    store.dispatch(getRankingNBASuccess(res.data.table))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getRankingError())
                }
            )
            break;
        case GET_RANKING_MLB:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4424&s=2020`
            }).then(
                (res) => {
                    store.dispatch(getRankingMLBSuccess(res.data.table))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getRankingError())
                }
            )
            break;
        case GET_RANKING_NFL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4391&s=2020`
            }).then(
                (res) => {
                    store.dispatch(getRankingNFLSuccess(res.data.table))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getRankingError())
                }
            )
            break;
        case GET_RANKING_NHL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4380&s=2020-2021`
            }).then(
                (res) => {
                    store.dispatch(getRankingNHLSuccess(res.data.table))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getRankingError())
                }
            )
            break;
        case GET_RANKING_MLS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4387&s=2020-2021`
            }).then(
                (res) => {
                    store.dispatch(getRankingMLSSuccess(res.data.table))
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