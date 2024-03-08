export const PUT_WEATHER = 'PUT_WEATHER'




export const putWeather = (weather: any) => ({
    type: PUT_WEATHER,
    payload: weather
})