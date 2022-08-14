import React from 'react'
import MyAlert from '../components/Alert'
import MyAccordion from '../components/Accordion'
import MyBadge from '../components/Badge'
import MyButton from '../components/MyButton'
import MyCards from '../components/MyCards'
import MyCarousel from '../components/MyCarousel'
export default function Components() {
  return (
    <div className='container' style={{paddingBottom:'10px',paddingTop:'10px'}}>
        <MyAlert/>
        <MyAccordion/> 
        <MyBadge/>
        <MyButton/>
        <MyCards/>
        <MyCarousel/>
    </div>
  )
}
