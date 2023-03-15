import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import {rootReducer}

const middleWare = [logger];
const composeEnhancers =  compose(applyMiddleware)
export const store = createStore(rootReducer, undefined, middleWare);
