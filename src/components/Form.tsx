import { useDispatch } from "react-redux"
import { putCity, putWeather } from '../actions/weatherAction'
import { api_key, base_url } from "../utils/constans"
import { useState } from "react"


const Form = () => {
    const dispatch = useDispatch()
    const [weatherInfo, setWeatherInfo] = useState({});
    const [city, setCity] = useState('Dresden');

    const getWeather = () => {
        console.log(city);
        
        dispatch(putCity(city))
    }

    return (
        <>
        <input
                onChange={e => setCity(e.target.value) } className='form-control-lg text-center'
                type="striing"
                value={city}
            />
        <button onClick={() => getWeather()}>Get weather</button>
        </>
        
    )
}

export default Form;