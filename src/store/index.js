import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import infosAjaxMiddlewares from './middlewares/infosAjaxMiddlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
      infosAjaxMiddlewares,
    )
);

export default createStore(rootReducers, enhancers);