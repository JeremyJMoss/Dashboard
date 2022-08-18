import DashboardContext from "./dashboard-context";
import { useState } from "react";

const defaultDashboardState = {
    isDarkMode: false,
    isAdmin: true,
    groupInfo: {name: "Family"},
    weatherObj: null 
}

const DashboardProvider = (props) => {
    const [dashboardState, setDashboardState] = useState(defaultDashboardState);

    const toggleDarkMode = function(){
        setDashboardState((prevState) => {
            return {
                ...prevState,
                isDarkMode: !prevState.isDarkMode
            }
        })
    }

    const setGroupInfo = function(groupInfo){
        setDashboardState((prevState) => {
            return {
                ...prevState,
                groupInfo
            }
        })
    }

    const setWeatherObj = (weatherData) => {
        setDashboardState((prevState) => {
            return {
                ...prevState,
                weatherObj: weatherData
            }
        })
    }

    const dashboardContext = {
        isDarkMode: dashboardState.isDarkMode,
        toggleDarkMode,
        isAdmin: dashboardState.isAdmin, 
        groupInfo: dashboardState.groupInfo,
        setGroupInfo,
        weatherObj: dashboardState.weatherObj,
        setWeatherObj
    }

    return (
        <DashboardContext.Provider value={dashboardContext}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider;