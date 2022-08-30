import './index.css'
import { Fragment } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from 'react-accessible-accordion'

const Forecast = ({ data }) => {
  return (
    <Fragment>
      <label htmlFor='' className='title'>
        Daily
      </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          ;<AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>hello</AccordionItemButton>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItemHeading>
          </AccordionItem>
        })}
      </Accordion>
    </Fragment>
  )
}
export default Forecast
