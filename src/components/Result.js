import React from 'react';
import './Result.css';

const Result = (props) => {

    const { date, city, sunrise, sunset, temp, pressure, wind,  error } = props.weather

    let content = null;

    if(!error && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <React.Fragment>
                <h3>Aktualna pogoda dla miasta: {city}</h3>
                <h5>Pogoda na {date}</h5>
                <h5>Słońce wzeszło o {sunriseTime}</h5>
                <h5>Zachód Słońca nastąpi o {sunsetTime}</h5>
                <h4>Temperatura na zewnątrz {temp} &#176;C</h4>
                <h5>Prędkość wiatru  {wind} m/s</h5>
                <h5>Ciśnienie atmosferyczne wynosi {pressure} hPa</h5>
            </React.Fragment>
        )
    }

    return (
        <div className = "result">
            {error ? `${city} nie istnieje w bazie.` : content}
        </div>
    );
}

export default Result;