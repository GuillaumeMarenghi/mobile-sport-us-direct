import axios from 'axios';
const API_KEY = 4013017;

import { GET_HIGHLIGHTS } from '../actions/actionsTypes';
import { getHighlightsL1Succes, getHighlightsL2Succes, getHighlightsN1Succes, getHighlightsError} from '../actions/actionsHighlights';

const highlightsAjaxMiddlewares = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_HIGHLIGHTS:
            axios({
                method: 'get',
                url: `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventshighlights.php?l=${store.getState().highlights.league}`
            }).then(
                (res) => {
                    switch (store.getState().highlights.league) {
                        case "french%20ligue%201":
                            store.dispatch(getHighlightsL1Succes(res.data.tvhighlights))
                            break;
                        case "french%20ligue%202":
                            store.dispatch(getHighlightsL2Succes(res.data.tvhighlights))
                            break;
                        case "French%20Championnat%20National":
                            store.dispatch(getHighlightsN1Succes(res.data.tvhighlights))
                            break;
                        default:
                            return
                    }
                }
            ).catch(
                (err) => {
                    console.log('error', err);
                    store.dispatch(getHighlightsError())
                }
            )
            break;

        default:
            return;
    }
}

export default highlightsAjaxMiddlewares;