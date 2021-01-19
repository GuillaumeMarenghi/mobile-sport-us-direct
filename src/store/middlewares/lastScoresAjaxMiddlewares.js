import axios from 'axios';
const API_KEY = 4013017;

import { GET_LAST_SCORE_L1, GET_LAST_SCORE_L2, GET_LAST_SCORE_N1, GET_LOGO} from '../actions/actionsTypes';
import { getLastScroresL1success, getLastScroresL2success, getLastScroresN1success, getLastScroresError, getLogoSuccess} from '../actions/actionLastScores';

const lastScoresAjaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LAST_SCORE_L1:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4334`
            }).then(
                (res) => {
                    store.dispatch(getLastScroresL1success(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLastScroresError())
                }
            )
            break;
        case GET_LAST_SCORE_L2:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4401`
            }).then(
                (res) => {
                    store.dispatch(getLastScroresL2success(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLastScroresError())
                }
            )
            break;
        case GET_LAST_SCORE_N1:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4637`
            }).then(
                (res) => {
                    store.dispatch(getLastScroresN1success(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getLastScroresError())
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
                        store.dispatch(getLastScroresError())
                    }
                )
            break
        default:
            return;
    }
}

export default lastScoresAjaxMiddleware;