import React from 'react'
import { Carousel } from 'react-bootstrap'
import img from '../images/img1.png'
export default function MyCarousel() {
  return (
    <div>
        <Carousel >
            <Carousel.Item interval={1500}>
                <img src = {img} className='w-100'/>
                <Carousel.Caption>
                    <h3>First Slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src = {img} className='w-100'/>
                <Carousel.Caption>
                    <h3>Second Slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src = {img} className='w-100'/>
                <Carousel.Caption>
                    <h3>Third Slide label</h3>
                    <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
