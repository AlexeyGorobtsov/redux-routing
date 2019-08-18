import {delay} from 'redux-saga/effects';

export function* loadHome() {
    yield delay(1000);
    yield console.log('Just finished')
}