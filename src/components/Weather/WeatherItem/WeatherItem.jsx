import React from "react";
import { month, day } from '../config'
import '../Weather.css'

const Weather = ({date, maxCelsius, minCelsius, atmosphericPressure, humidity, windSpeed, windDirection, description}) => {
    const getDate = new Date(date).getDate()
    const getMonth = new Date(date).getMonth()
    const getYear = new Date(date).getFullYear()
    const getDay = new Date(date).getDay()
    const monthNum = month[getMonth]
    const dayNum = day[getDay]

    return <div>
        <header>
            <span className='date'>{dayNum} {getDate} {monthNum} {getYear} року</span>
        </header>
        <div className="weather__info">
            <p className="celsius">{maxCelsius}°C/{minCelsius}°C</p>
            <p className="text">Atmospheric pressure: {atmosphericPressure}</p>
            <p className="text">Humidity: {humidity}</p>
            <p className="text">Wind Speed: {windSpeed}</p>
            <p className="text">Wind Direction: {windDirection}</p>
            <p className="text">Description: <img src={description} alt=""/> </p>

        </div>
        <hr/>
    </div>
}

class WeatherItems extends React.Component{
    render() {
        return <div className="Weather">
            <div className='content'>
                {this.props.weather.map((weatherItem) => <Weather key={weatherItem.date} {...weatherItem}/>)}
            </div>
            <div className='weather__location'>
                <h1>Weather</h1>
                <p>Ukraine, Kyiv</p>
            </div>
        </div>;
    }

}
export default WeatherItems;
