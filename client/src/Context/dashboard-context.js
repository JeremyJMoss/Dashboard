import { createContext } from "react";

const DashboardContext = createContext({
    isDarkMode: true,
    toggleDarkMode : () => {},
    isAdmin: false,
    groupInfo: {},
    setGroupInfo: (groupInfo) => {},
    weatherObj: {},
    setWeatherObj: (weatherData) => {}
})

export default DashboardContext;