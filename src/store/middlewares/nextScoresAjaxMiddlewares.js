import axios from 'axios';
const API_KEY = 4013017;

import { GET_NEXT_SCORE_NBA, GET_NEXT_SCORE_NFL, GET_NEXT_SCORE_NHL, GET_NEXT_SCORE_MLB, GET_NEXT_SCORE_MLS, GET_LOGO} from '../actionsTypes';
import { getLogoSuccess} from '../actionLastScores';
import { getNextScroresNBAsuccess, getNextScroresMLBsuccess, getNextScroresNFLsuccess, getNextScroresNHLsuccess, getNextScroresMLSsuccess} from '../actionNextScores'

const nextScoresAjaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_NEXT_SCORE_NBA:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387`
            }).then(
                (res) => {
                    store.dispatch(getNextScroresNBAsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getNextScroresError())
                }
            )
            break;
        case GET_NEXT_SCORE_MLB:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4424`
            }).then(
                (res) => {
                    store.dispatch(getNextScroresMLBsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getNextScroresError())
                }
            )
            break;
        case GET_NEXT_SCORE_NFL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4391`
            }).then(
                (res) => {
                    store.dispatch(getNextScroresNFLsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getNextScroresError())
                }
            )
            break;
        case GET_NEXT_SCORE_NHL:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4380`
            }).then(
                (res) => {
                    store.dispatch(getNextScroresNHLsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getNextScroresError())
                }
            )
            break;
        case GET_NEXT_SCORE_MLS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4346`
            }).then(
                (res) => {
                    store.dispatch(getNextScroresMLSsuccess(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getNextScroresError())
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
                        store.dispatch(getNextScroresError())
                    }
                )
            break
        default:
            return;
    }
}

export default nextScoresAjaxMiddleware;