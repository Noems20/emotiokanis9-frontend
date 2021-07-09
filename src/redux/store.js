import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //Middleware atrapa la "action" antes de llegar al "root-reducer"
// logger es un middleware que muestra la "action" en consola

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
