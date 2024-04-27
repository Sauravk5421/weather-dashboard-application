import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
function WeatherAPI(){
    const [city, setCity] = useState("New Delhi");
    const [errorMessage, seterrorMessage] = useState("");
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        feels_like: 0,
        pressure:0,
        humidity: 0,
        wind:0,
        icon: "",
    });

    const getWeatherDetails = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7ddf1ab3675e803448e1e8019e074cf`)
            .then((response) => {
                return response.json();
            }).then((data)=>{
                setData({
                    description: data.weather[0].description,
                    temp: data.main.temp,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    feels_like: data.main.feels_like,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    icon: data.weather[0].icon,
                    city: data.name,
                    country: data.sys.country,
                });
                seterrorMessage('');
                console.log(data)
            }).catch((error)=>{
                seterrorMessage('No data found. Please enter a valid city name.');
            })           
    }

    useEffect(()=>{
        getWeatherDetails();
    },[]);

    
    return(
       <>
            <div class={data.description} id="container">
                <div class="input-container">
                   <div class="input-btn">
                        <input placeholder="Enter city name..." type="text" onChange={(e) => {
                            setCity(e.target.value);
                        }} />
                        <button type='submit' onClick={getWeatherDetails}>Search</button>
                   </div>
                   {errorMessage ? <p class="error-message">{errorMessage}</p> : <p class="no-error"></p>}
                </div>
           
                <WeatherCard data ={data}/>
            </div>       
       </>
    );

}
export default WeatherAPI;