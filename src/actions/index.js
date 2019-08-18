import {createAction} from 'redux-actions';
import * as types from '../types';

export const routeHome = createAction(types.ROUTE_HOME);
export const routeAbout = createAction(types.ROUTE_ABOUT);
