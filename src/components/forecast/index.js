import './index.css'
import { Fragment } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from 'react-accessible-accordion'

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
const Forecast = ({ data }) => {
  // getting the day in the week from the syetem and creating an array of the next 7 days of the week.
  const dayInWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  )

  console.log(forecastDays)
  return (
    <Fragment>
      <label htmlFor='' className='title'>
        Daily
      </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='dailyItem'>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt='weather'
                    className='iconSmall'
                  />
                  <label className='day'>{forecastDays[idx]}</label>
                  <label className='description'>
                    {item.weather[0].description}
                  </label>
                  <label htmlFor='' className='minMax'>
                    {item.main.temp_min}°C / {item.main.temp_max}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='dailyDetailsGrid'>
                <div className='dailyDetailsGridItem'>
                  <label htmlFor='' className=''>
                    Pressure
                  </label>
                  <label htmlFor=''>{item.main.pressure}Pa</label>
                </div>

                <div className='dailyDetailsGridItem'>
                  <label htmlFor='' className=''>
                    Humidity
                  </label>
                  <label htmlFor=''>{item.main.humidity}%</label>
                </div>

                <div className='dailyDetailsGridItem'>
                  <label htmlFor='' className=''>
                    Cloud
                  </label>
                  <label htmlFor=''>{item.clouds.all}%</label>
                </div>

                <div className='dailyDetailsGridItem'>
                  <label htmlFor='' className=''>
                    Wind Speed
                  </label>
                  <label htmlFor=''>{item.wind.speed} m/s</label>
                </div>

                <div className='dailyDetailsGridItem'>
                  <label htmlFor='' className=''>
                    Sea Level
                  </label>
                  <label htmlFor=''>{item.main.sea_level}m</label>
                </div>

                <div className='dailyDetailsGridItem'>
                  <label htmlFor='' className=''>
                    Feels like
                  </label>
                  <label htmlFor=''>
                    {Math.round(item.main.feels_like)} °C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Fragment>
  )
}
export default Forecast
