import React, { useState, useEffect } from 'react';
import Axios from 'axios';


// Enter your API key here for weather to work
// I'm not submitting mine to an open repo
const APIXU_API_KEY = "";

const Weather = ({city}) => {
    let promise;

    const [weather, setWeather] = useState({});

    useEffect(() => {
        promise = Axios.get(`https://api.apixu.com/v1/current.json?key=${APIXU_API_KEY}&q=${city}`);
        promise.then((response) => setWeather(response.data.current), () => console.log("failed to load weather"))
    } , weather);

    if (APIXU_API_KEY == "") {
        return (
            <div>
                Apixu API key missing, add it on line 7 of src/components/Weather.js
            </div>
        )
    }

    if (weather.temp_c == undefined) {
        return (
        <div>
            Weather is loading...
        </div>
        );
    }

    return (
        <div>
            <p><b>Temperature: </b> {weather.temp_c}°C</p>
            <img src={weather.condition.icon} alt={weather.condition.text} />
            <p><b>wind: </b>{weather.wind_kph} kph, direction {weather.wind_dir}</p>
        </div>
    )
}

export default Weather