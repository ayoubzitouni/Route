import React from 'react'
import './moviecard.css'
import ReactStars from 'react-stars'
import {Routes,Route, Link} from 'react-router-dom'
import Trailer from './Trailer'
import { Button } from 'react-bootstrap'




const Moviecard = ({data}) => {
  
  return (
    <div className='movieCard'>
        <Link to={`/description/${data.id}`}>
        <img src={data.posterUrl} alt={`${data.name} poster`} className="posterImg" />
        <div className="cardContent">
        <p>{data.name}</p>
        <p>{data.description}</p>
        <div className="rate">
          Rate: <ReactStars
          value={data.rate}
          edit={false}
          count={5}
          size={24}
          color2={'#ffd700'} />
        </div>
        <Link to={`/${data.id}`}><Button>Trailer</Button>
        </Link>
        
        </div>
        </Link>
    </div>
  )
}

export default Moviecard

