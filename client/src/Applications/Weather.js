
import { React, useEffect, useState, useContext, useCallback, Fragment } from "react";
import classes from "../Styles/Weather.module.css";
import DayWeatherCard from "./DayWeatherCard";
import Card from "../UI/Card";
import DashboardContext from "../Context/dashboard-context";
import {DAYSOFWEEK} from "../Data/data";

const Weather = () => {
    
    const ctx = useContext(DashboardContext);

    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = useCallback(() => {
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const {latitude, longitude} = pos.coords;
            
            const response = await fetch(`https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperatureMax,temperatureMin,weatherCode&timesteps=1d&startTime=nowPlus1d&endTime=nowPlus5d&units=metric&apikey=Qx93wnQF9vFSGBj2RcWnbkyRwF9FpXRV`)
            
            const data = await response.json();
            
            
            
            const fiveDayWeatherForecast = data.data.timelines[0].intervals.map((entry, i) => {
                const day = new Date(entry.startTime).getDay();
                return {...entry.values, day: DAYSOFWEEK[day], id: `w${i}`};
            });
            
            setWeatherData(fiveDayWeatherForecast);
            
            ctx.setWeatherObj(fiveDayWeatherForecast);
            
            setIsLoading(false);
        }, (err) => {
            setIsLoading(false);
            
            throw new Error(err.message);
        })
    }, [ctx])

    useEffect(() => {
        // stopping unnecessary api calls
        if (ctx.weatherObj === null){
           try{
                getWeatherData();
           }
           catch(err){
                console.log(err);
           }
        }
        else{
            setWeatherData(ctx.weatherObj);
        }
    }, [getWeatherData, ctx]);

    const resetWeatherData = () => {
        ctx.setWeatherObj(null);
        getWeatherData();
    }

    const pageContent = function(){
        if (isLoading){
            return <p>Loading...</p>
        }
        if (weatherData){
            return (
                <Fragment>    
                    <button onClick={resetWeatherData}>Refresh <i className="fa fa-refresh"></i></button>
                    <Card className={`${classes.wrapDiv} ${ctx.isDarkMode && classes.dark}`}>
                        <h3>5-Day Forecast</h3>
                        <div className={classes.forecast}>
                            {weatherData.map(weatherObj => {
                                return <DayWeatherCard isDark={ctx.isDarkMode} weather={weatherObj} key={weatherObj.id}/>
                            })}
                        </div>
                    </Card>
                </Fragment>
            )
        }
    }

    return (
        <div className={classes.surround}>
            <section id="weatherApp" className={classes.weatherApp}>
                {pageContent()}
            </section>
        </div>
    )
}

export default Weather;