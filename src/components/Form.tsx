import { useDispatch } from "react-redux"
import { putWeather } from '../actions/weatherAction'
import { api_key, base_url } from "../utils/constans"
import { useState } from "react"


const Form = () => {
    const dispatch = useDispatch()
    const [weatherInfo, setWeatherInfo] = useState({});

    const getWeather = async (city = 'Berlin') => {

        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
                .then(response => response.json())
                /*.then(data => {
                    data.name,
                        data.sys.country,
                        data.main.temp,
                        data.main.pressure,
                        data.sys.sunset
                })*/
                .then(data => dispatch(putWeather(data)))
                .catch(() => dispatch(putWeather('Winter')))
        } catch (e) {
            (e = "Enter correct city name");
        }
    }

    return (
        <button onClick={() => getWeather()}>Get weather</button>
    )
}

export default Form;