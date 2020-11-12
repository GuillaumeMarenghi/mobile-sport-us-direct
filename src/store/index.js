import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";

import infosAjaxMiddlewares from './middlewares/infosAjaxMiddlewares';

export default createStore(rootReducers,applyMiddleware(infosAjaxMiddlewares));

