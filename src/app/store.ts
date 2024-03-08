import {legacy_createStore as createStore} from 'redux'
import { weatherReducer } from '../reducers/weatherReducer';

const initialState = {
    weather: {}
}

export const store = createStore(weatherReducer, initialState);