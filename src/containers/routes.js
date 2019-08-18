import {connect} from 'react-redux';
import {routeType} from '../selectors';

import {Container} from "../components/container";

const mapStateToProps = state => {
    console.log(state);
    return {
        route: routeType(state)
    }
};
export const Routes = connect(mapStateToProps)(Container);