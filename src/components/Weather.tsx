import { useSelector } from "react-redux";
import { RootState } from "../utils/type";
import { useEffect, useState } from "react";
import { api_key, base_url } from "../utils/constans";


const Weather = () => {
    const city = useSelector<RootState, any>(state => state.city)
    const [data, setData] = useState({
        city: '1',
        country: '12',
        temp: 0,
        pressure: 0
    });


    useEffect(() => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => setData({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure
            }))

    }, [ data])

    return (
        <div className="infoWeath">
            <p>weather</p>
            <p>Temp: {data.temp}</p>
            <p>Pressure: {data.pressure}</p>
        </div>
    )
}

export default Weather;