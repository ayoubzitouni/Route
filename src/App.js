import MovieList from'./components/Movielist'
import Nbar from'./components/Nvbar'
import Hscreen from './components/Homescreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import Data from './components/data';
import { Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';
import Description from './components/Description';




function App() {
  const [nfilm,setNfilm]=useState(Data)
  const [srate,setSrate]=useState(0)
  const addFilm=(newfilm)=>{
    setNfilm([...nfilm,newfilm])
    
    console.log(nfilm)
    console.log(Data)
  }
  const searchR=(e)=>{
    
    setSrate(e)
    console.log(srate)
  }

  return (
    <div className="App">
          <Nbar addfilm={addFilm} searchRate={searchR}/>
          <Hscreen className="homescreen" movies={nfilm}/>
           
          <Routes>
            <Route path='/' element={<MovieList className="movielist"  movies={nfilm} rate={srate}/>  }/> 
            <Route path="/:id" element={<Trailer cn={nfilm}/>}/>
            <Route path="/description/:id" element={<Description desc={nfilm}/>}/>
        </Routes>   
</div>
  );
}

export default App;
