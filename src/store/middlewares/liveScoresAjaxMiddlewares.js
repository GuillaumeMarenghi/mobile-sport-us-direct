import axios from 'axios';
const API_KEY = 4013017;

import { GET_LIVE_SCORE_L1, GET_LIVE_SCORE_L2, GET_LIVE_SCORE_N1} from '../actions/actionsTypes';
import { getLiveScroresL1success, getLiveScroresL2success, getLiveScroresN1success, getLiveScroresError} from '../actions/actionLiveScores';

const liveScoresAjaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LIVE_SCORE_L1:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v2/json/${API_KEY}/livescore.php?s=Basketball`
            }).then(
                (res) => {
                    store.dispatch(getLiveScroresL1success(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLiveScroresError())
                }
            )
            break;
        case GET_LIVE_SCORE_L2:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v2/json/${API_KEY}/livescore.php?s=American_Football`
            }).then(
                (res) => {
                    store.dispatch(getLiveScroresL2success(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLiveScroresError())
                }
            )
            break;
        case GET_LIVE_SCORE_N1:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v2/json/${API_KEY}/livescore.php?s=Ice_Hockey`
            }).then(
                (res) => {
                    store.dispatch(getLiveScroresN1success(res.data.events))
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