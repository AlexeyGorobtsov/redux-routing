import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {sagas} from './sagas';
import {middleware as routesMiddleware, enhancer as routesEnhancer} from './routes';
import {reducers} from './redusers';
const sagaMiddleware = createSagaMiddleware();
const composeMiddlewares = applyMiddleware(routesMiddleware, sagaMiddleware);
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
export const store = createStore(
    reducers,
    composeEnhancers(routesEnhancer, composeMiddlewares)
);
sagaMiddleware.run(sagas);

