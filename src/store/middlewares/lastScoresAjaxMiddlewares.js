import axios from 'axios';
const API_KEY = 4013017;

import { GET_LAST_SCORE_NBA, GET_LAST_SCORE_NFL, GET_LAST_SCORE_NHL, GET_LAST_SCORE_MLB, GET_LAST_SCORE_MLS, GET_LOGO} from '../actionsTypes';
import { getLastScroresNBAsuccess, getLastScroresMLBsuccess, getLastScroresNFLsuccess, getLastScroresNHLsuccess, getLastScroresMLSsuccess, getLastScroresError, getLogoSuccess} from '../actionLastScores';

const lastScoresAjaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LAST_SCORE_NBA:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4387`
            }).then(
                (res) => {
                    store.dispatch(getLastScroresNBAsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLastScroresError)
                }
            )
            break;
        case GET_LAST_SCORE_MLB:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4424`
            }).then(
                (res) => {
                    store.dispatch(getLastScroresMLBsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLastScroresError)
                }
            )
            break;
        case GET_LAST_SCORE_NFL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4391`
            }).then(
                (res) => {
                    store.dispatch(getLastScroresNFLsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLastScroresError)
                }
            )
            break;
        case GET_LAST_SCORE_NHL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4380`
            }).then(
                (res) => {
                    store.dispatch(getLastScroresNHLsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLastScroresError)
                }
            )
            break;
        case GET_LAST_SCORE_MLS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4346`
            }).then(
                (res) => {
                    store.dispatch(getLastScroresMLSsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLastScroresError)
                }
            )
            break;
            case GET_LOGO:
                axios({
                    method: 'get',
                    url: `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${store.getState().lastScores.visibleLeague}`
                }).then(
                    (res) => {
                        store.dispatch(getLogoSuccess(res.data.teams))
                    }
                ).catch(
                    (err) => {
                        console.log('error', err);
                        store.dispatch(getLastScroresError)
                    }
                )
            break
        default:
            return;
    }
}

export default lastScoresAjaxMiddleware;