import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";

import infosAjaxMiddlewares from './middlewares/infosAjaxMiddlewares';
import highlightsAjaxMiddlewares from './middlewares/highlightsAjaxMiddlewares';
import liveScoresAjaxMiddlewares from './middlewares/liveScoresAjaxMiddlewares';
import lastScoresAjaxMiddlewares from './middlewares/lastScoresAjaxMiddlewares';
import nextScoresAjaxMiddleware from "./middlewares/nextScoresAjaxMiddlewares";
import schedulesAjaxMiddlewares from "./middlewares/schedulesAjaxMiddlewares";

export default createStore(rootReducers,applyMiddleware(
    infosAjaxMiddlewares,
    highlightsAjaxMiddlewares,
    lastScoresAjaxMiddlewares,
    liveScoresAjaxMiddlewares,
    nextScoresAjaxMiddleware,
    schedulesAjaxMiddlewares
    )
);

