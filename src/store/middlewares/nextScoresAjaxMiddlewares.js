import axios from 'axios';
const API_KEY = 4013017;

import { GET_NEXT_SCORE_L1, GET_NEXT_SCORE_L2, GET_NEXT_SCORE_N1, GET_LOGO} from '../actions/actionsTypes';
import { getLogoSuccess} from '../actions/actionLastScores';
import { getNextScroresL1success, getNextScroresL2success, getNextScroresN1success} from '../actions/actionNextScores'

const nextScoresAjaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_NEXT_SCORE_L1:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4334`
            }).then(
                (res) => {
                    store.dispatch(getNextScroresL1success(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getNextScroresError())
                }
            )
            break;
        case GET_NEXT_SCORE_L2:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4401`
            }).then(
                (res) => {
                    store.dispatch(getNextScroresL2success(res.data.events))
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getNextScroresError())
                }
            )
            break;
        case GET_NEXT_SCORE_N1:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4637`
            }).then(
                (res) => {
                    store.dispatch(getNextScroresN1success(res.data.events))
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