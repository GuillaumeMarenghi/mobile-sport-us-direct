import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";

import infosAjaxMiddlewares from './middlewares/infosAjaxMiddlewares';
import highlightsAjaxMiddlewares from './middlewares/highlightsAjaxMiddlewares';

export default createStore(rootReducers,applyMiddleware(infosAjaxMiddlewares,highlightsAjaxMiddlewares));

