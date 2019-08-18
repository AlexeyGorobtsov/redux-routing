import React from 'react';
import {NOT_FOUND} from 'redux-first-router';

import {ROUTE_HOME, ROUTE_ABOUT} from '../types';
import {About} from "./about";
import {Home} from "./home";

const routesMap = {
    [ROUTE_HOME]: Home,
    [ROUTE_ABOUT]: About,
    [NOT_FOUND]: Home
};
export const Container = ({route}) => {
    console.log(route)
    const Route = routesMap[route] ? routesMap[route] : routesMap[NOT_FOUND];
    return <Route/>
};