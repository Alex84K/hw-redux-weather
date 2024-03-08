export const PUT_WEATHER = 'PUT_WEATHER'
export const PUT_CITY = 'PUT_CITY'




export const putWeather = (weather: any) => ({
    type: PUT_WEATHER,
    payload: weather
})

export const putCity = (city: string) => ({
    type: PUT_CITY,
    payload: city
})