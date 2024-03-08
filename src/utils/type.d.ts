/*export interface RootState {
    weather: object
}*/

export interface RootState {
    city: string
}

export interface ReduxAction {
    type: string,
    payload: any
}

export interface ReduxWeather {
    type: string,
    payload: any
}

export interface ReduxCity {
    type: string,
    payload: string
}

