import './index.css'
import { Fragment } from 'react'
const CurrentWeather = () => {
  return (
    <Fragment>
      <div
        className='weather
    '
      >
        <div className='top'>
          <div>
            <p className='city'>chennai</p>
            <p className='weatherDescription'>hot af</p>
          </div>
          <img src='icons/01d.png' alt='weather' className='weatherIcon' />
        </div>

        <div className='bottom'>
          <p className='temperature'>18°C</p>
          <div className='details'>
            <div className='parameterRow'>
              <span className='parameterLabel'>Details</span>
            </div>

            <div className='parameterRow'>
              <span className='parameterLabel'>Feels like</span>
              <span className='parameterValue'>22°C</span>
            </div>

            <div className='parameterRow'>
              <span className='parameterLabel'>Wind</span>
              <span className='parameterValue'>2 m/s</span>
            </div>

            <div className='parameterRow'>
              <span className='parameterLabel'>Humidity</span>
              <span className='parameterValue'>15%</span>
            </div>

            <div className='parameterRow'>
              <span className='parameterLabel'>Pressure</span>
              <span className='parameterValue'>15 Pa</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default CurrentWeather
