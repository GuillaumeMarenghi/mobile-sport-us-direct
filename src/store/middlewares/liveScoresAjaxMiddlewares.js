import axios from 'axios';
const API_KEY = 4013017;

import { GET_LIVE_SCORE_NBA, GET_LIVE_SCORE_NFL, GET_LIVE_SCORE_NHL, GET_LIVE_SCORE_MLB, GET_LIVE_SCORE_MLS } from '../actionsTypes';
import { getLiveScroresNBAsuccess, getLiveScroresMLBsuccess, getLiveScroresNFLsuccess, getLiveScroresNHLsuccess, getLiveScroresMLSsuccess, getLiveScroresError} from '../actionLiveScores';

const liveScoresAjaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LIVE_SCORE_NBA:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v2/json/${API_KEY}/livescore.php?s=Basketball`
            }).then(
                (res) => {
                    store.dispatch(getLiveScroresNBAsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLiveScroresError())
                }
            )
            break;
        case GET_LIVE_SCORE_MLB:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v2/json/${API_KEY}/livescore.php?s=Baseball`
            }).then(
                (res) => {
                    store.dispatch(getLiveScroresMLBsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLiveScroresError())
                }
            )
            break;
        case GET_LIVE_SCORE_NFL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v2/json/${API_KEY}/livescore.php?s=American_Football`
            }).then(
                (res) => {
                    store.dispatch(getLiveScroresNFLsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLiveScroresError())
                }
            )
            break;
        case GET_LIVE_SCORE_NHL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v2/json/${API_KEY}/livescore.php?s=Ice_Hockey`
            }).then(
                (res) => {
                    store.dispatch(getLiveScroresNHLsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLiveScroresError())
                }
            )
            break;
        case GET_LIVE_SCORE_MLS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v2/json/${API_KEY}/livescore.php?s=Soccer`
            }).then(
                (res) => {
                    store.dispatch(getLiveScroresMLSsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLiveScroresError())
                }
            )
            break;
        default:
            return;
    }
}

export default liveScoresAjaxMiddleware;