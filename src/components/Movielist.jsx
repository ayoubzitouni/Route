import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Moviecard from './Moviecard'
import'./movielist.css'
import Trailer from './Trailer'



const Movielist = ({movies,rate}) => {
  const [input,setInput] = useState('')
  const [grlow,setGrlow]= useState(0)
  const Input = (e) => {
    setInput(e.target.value)
    }
    
  return (
    <div className='movielist'>
        <div className="search">
          <input type="text" className="searchInput" onChange={(e)=>Input(e)}/>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={()=>setGrlow(1)}>Greater to Lower</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>setGrlow(2)}>Lower to Greater</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>setGrlow(3)}>A=>Z</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {movies.sort((a,b)=> grlow==1? b.rate-a.rate:grlow==2?a.rate-b.rate:grlow==3? a.name-b.name:null).filter((x)=>  x.rate>=rate && x.name.toLowerCase().includes(input.toLowerCase().trim())).map((el)=> <Moviecard  data={el}/>)}
        
    </div>
  )
}

export default Movielist