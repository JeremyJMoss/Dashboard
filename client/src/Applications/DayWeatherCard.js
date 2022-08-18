import React from "react";
import Card from "../UI/Card";
import classes from "../Styles/DayWeatherCard.module.css";
import { WEATHERCODES } from "../Data/data";

const DayWeatherCard = ({weather, isDark}) => {
    const weatherInfo = WEATHERCODES[weather.weatherCode];
    
    return (
        <Card className={`${classes.weatherCard} ${isDark && classes.dark}`}>
            <h4>{weather.day}</h4>
            <i className="material-icons">{weatherInfo.icon}</i>
            <h5>{weatherInfo.type}</h5>
            <p>{`Max Temp: ${Math.round(weather.temperatureMax)}°C`}</p>
            <p>{`Min Temp: ${Math.round(weather.temperatureMin)}°C`}</p>
        </Card>
    )
}

export default DayWeatherCard;