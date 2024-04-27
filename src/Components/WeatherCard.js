import React from 'react'
import '../Styles/styles.css'

function WeatherCard({data}){
    const {description, temp,  temp_max, temp_min, feels_like, humidity, pressure, wind, icon, city, country} = data;
    let des_img = ` https://openweathermap.org/img/wn/${icon}@2x.png`
    return(
        <>
            <div class='card-container'>
                <div class = 'main-data'>
                    <div class='description-data'>
                        <div class='img-main'>
                            <img  class='img'src={des_img} alt='image' />
                        </div>
                        <div>
                            {description}
                        </div>
                    </div>

                    <div class='country-data'>
                        {city} ({country})
                    </div>

                    <div class='temp-data'>
                        {(temp-273.15).toFixed()}°C
                    </div>

                </div>
                <div class="other-data">
                    <div class="details-row1">
                        <div class="detail">
                           <p>Min</p>
                           <span>{(temp_min-273.15).toFixed()} °C</span>
                        </div>
                        <div class="detail">
                            <p>Max</p>
                           <span>{(temp_max-273.15).toFixed()} °C</span>
                        </div>
                        <div class="detail">
                            <p>Feels Like</p>
                             <span>{(feels_like-273.15).toFixed()} °C</span>
                        </div>
                    </div>
                    <div class="details-row2">
                        <div class="detail">
                            <p>Humidity</p>
                            <span>{humidity}%</span>
                        </div>
                        <div class="detail">
                            <p>Pressure</p>
                            <span>{pressure}hPa</span>
                        </div>
                        <div class="detail">
                            <p>Wind</p>
                            <span>{wind}m/s</span>
                        </div>
                       
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default WeatherCard;