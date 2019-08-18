import { connectRoutes } from 'redux-first-router';
const createHistory = require("history").createBrowserHistory;

import {ROUTE_HOME, ROUTE_ABOUT} from './types';

const routesMap = {
    [ROUTE_HOME]: '/',
    [ROUTE_ABOUT]: '/about'
};
const history = createHistory();
const {
    reducer,
    middleware,
    enhancer,
} = connectRoutes(routesMap);

export {
    reducer,
    middleware,
    enhancer
}