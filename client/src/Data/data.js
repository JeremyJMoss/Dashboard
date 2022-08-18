const WEATHERCODES = {
    0: {type: "Unknown", icon: null},
    1000: {type: "Sunny", icon: "sunny"},
    1100: {type: "Mostly Clear", icon: "sunny"},
    1101: {type: "Partly Cloudy", icon: "partly_cloudy_day"},
    1102: {type: "Mostly Cloudy", icon: "cloud"},
    1001: {type: "Cloudy", icon: "cloud"},
    2000: {type: "Fog", icon: "filter_drama"},
    2100: {type: "Light Fog", icon: "filter_drama"},
    4000: {type: "Light Drizzle", icon: "rainy"},
    4001: {type: "Rain", icon: "rainy"},
    4200: {type: "Light Rain", icon: "rainy"},
    4201: {type: "Heavy Rain", icon: "rainy"},
    5000: {type: "Snow", icon: "cloudy_snowing"},
    5001: {type: "Flurries", icon: "cloudy_snowing"},
    5100: {type: "Light Snow", icon: "cloudy_snowing"},
    5101: {type: "Heavy Snow", icon: "cloudy_snowing"},
    6000: {type: "Freezing Drizzle", icon: "rainy"},
    6001: {type: "Freezing Rain", icon: "rainy"},
    6200: {type: "Light Freezing Rain", icon: "rainy"},
    6201: {type: "Heavy Freezing Rain", icon: "rainy"},
    7000: {type: "Ice Pellets", icon: "snowing"},
    7101: {type: "Heavy Ice Pellets", icon: "snowing"},
    7102: {type: "Light Ice Pellets", icon: "snowing"},
    8000: {type: "Thunderstorm", icon: "thunderstorm"}
  }

  const DAYSOFWEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export {WEATHERCODES, DAYSOFWEEK};