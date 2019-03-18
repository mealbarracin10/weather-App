import React from 'react'
import WeatherIcons from 'react-weathericons'

const getWeatherIcon = weatherState => {

    switch (weatherState) {
        case "cloud":
        return(<WeatherIcons name="cloud" size="2x"/>)   
        default:
        return(<WeatherIcons name="sleet" size="2x"/>)
    }  

    return 

}
const WeatherTemperature = ({temperature, weatherState}) => (
		<div>
            {getWeatherIcon(weatherState)}
            <span>{`${temperature} ºC`}</span>
        </div>
    )

export default WeatherTemperature