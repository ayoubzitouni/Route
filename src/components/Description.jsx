import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Route, useParams } from 'react-router-dom'
import Trailer from './Trailer'
import './description.css'




const Description = ({desc}) => {
    const {id}=useParams()
    const movie=desc.find((el)=>el.id==id)
    return (
    <div className='description'>
        <h1 className='description_title'>{`Description of ${movie.name}`}</h1>
        <p>{movie.description}</p>
        <Trailer cn={desc}/>
    </div>
  )
}

export default Description