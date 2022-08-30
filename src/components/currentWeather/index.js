import './index.css'
import { Fragment } from 'react'
const CurrentWeather = ({ data }) => {
  return (
    <Fragment>
      <div
        className='weather
    '
      >
        <div className='top'>
          <div>
            <p className='city'>{data.city}</p>
            <p className='weatherDescription'>{data.weather[0].description}</p>
          </div>
          <img
            src={`icons/${data.weather[0].icon}.png`}
            alt='weather'
            className='weatherIcon'
          />
        </div>

        <div className='bottom'>
          <p className='temperature'>{Math.round(data.main.temp)}°C</p>
          <div className='details'>
            <div className='parameterRow'>
              <span className='parameterLabel'>Details</span>
            </div>

            <div className='parameterRow'>
              <span className='parameterLabel'>Feels like</span>
              <span className='parameterValue'>
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>

            <div className='parameterRow'>
              <span className='parameterLabel'>Wind</span>
              <span className='parameterValue'> {data.wind.speed} m/s</span>
            </div>

            <div className='parameterRow'>
              <span className='parameterLabel'>Humidity</span>
              <span className='parameterValue'>{data.main.humidity}%</span>
            </div>

            <div className='parameterRow'>
              <span className='parameterLabel'>Pressure</span>
              <span className='parameterValue'>{data.main.pressure} Pa</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default CurrentWeather
