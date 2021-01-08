import axios from 'axios';
const API_KEY = 4013017;

import { GET_HIGHLIGHTS } from '../actions/actionsTypes';
import { getHighlightsNBASucces, getHighlightsMLBSucces, getHighlightsNFLSucces, getHighlightsNHLSucces, getHighlightsMLSSucces, getHighlightsError} from '../actions/actionsHighlights';

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
                        case "NBA":
                            store.dispatch(getHighlightsNBASucces(res.data.tvhighlights))
                            break;
                        case "MLB":
                            store.dispatch(getHighlightsMLBSucces(res.data.tvhighlights))
                            break;
                        case "NFL":
                            store.dispatch(getHighlightsNFLSucces(res.data.tvhighlights))
                            break;
                        case "NHL":
                            store.dispatch(getHighlightsNHLSucces(res.data.tvhighlights))
                            break;
                        case "American Major League Soccer":
                            store.dispatch(getHighlightsMLSSucces(res.data.tvhighlights))
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