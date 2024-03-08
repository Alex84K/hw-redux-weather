import { PUT_CITY, PUT_WEATHER } from "../actions/weatherAction";
import { ReduxAction, ReduxCity, RootState } from "../utils/type";



const initialState = {
    city: 'Berlin'
}

export const weatherReducer = (state: RootState = initialState, action: ReduxCity) => {

    switch (action.type) {
        case PUT_CITY:
            return {...state, city: action.payload}
        default:
            return state;
    }
}