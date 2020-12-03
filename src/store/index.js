import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";

import infosAjaxMiddlewares from './middlewares/infosAjaxMiddlewares';
import highlightsAjaxMiddlewares from './middlewares/highlightsAjaxMiddlewares';
import liveScoresAjaxMiddlewares from './middlewares/liveScoresAjaxMiddlewares';
import lastScoresAjaxMiddlewares from './middlewares/lastScoresAjaxMiddlewares';
import nextScoresAjaxMiddlewares from './middlewares/nextScoresAjaxMiddlewares';
import nextScoresAjaxMiddleware from "./middlewares/nextScoresAjaxMiddlewares";

export default createStore(rootReducers,applyMiddleware(
    infosAjaxMiddlewares,
    highlightsAjaxMiddlewares,
    lastScoresAjaxMiddlewares,
    liveScoresAjaxMiddlewares,
    nextScoresAjaxMiddleware
    )
);

