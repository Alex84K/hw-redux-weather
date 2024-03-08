import { PUT_WEATHER } from "../actions/weatherAction";
import { ReduxAction, RootState } from "../utils/type";



const initialState = {
    weather: { }
}

export const weatherReducer = (state: RootState = initialState, action: ReduxAction) => {

    switch (action.type) {
        case PUT_WEATHER:
            return {...state, weather: action.payload}
        default:
            return state;
    }
}