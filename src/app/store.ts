import {legacy_createStore as createStore} from 'redux'
import { weatherReducer } from '../reducers/weatherReducer';

const initialState = {
    city: 'lviv'
}

export const store = createStore(weatherReducer, initialState);