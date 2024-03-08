import { useSelector } from "react-redux";
import { RootState } from "../utils/type";
import { useEffect, useState } from "react";


const Weather = () => {
    const weather = useSelector<RootState, any>(state => state.weather)
    console.log(weather);
    let t = weather.main.temp;
    console.log(t);
    
    
    const [w, setW] = useState('')
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
        setW(t)
    }, [weather])

    return (
        <div className="infoWeath">
            <p>Temp: {w}</p>
        </div>
    )
}

export default Weather;