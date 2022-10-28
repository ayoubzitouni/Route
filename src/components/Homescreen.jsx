import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Homescreen.css'




const Homescreen = ({movies}) => {

  return (
    <div className='home'>
      <Carousel>
        {movies.map((el)=>
      <Carousel.Item className='item'>
        <img
          className="d-block h-100 "
          src={el.posterUrl}
          alt="1"
        />
        <Carousel.Caption>
          <h3>{el.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>)
      }
    </Carousel>
    
    
    </div>
  )
}

export default Homescreen