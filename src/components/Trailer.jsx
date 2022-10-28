import React from "react";
import { Button } from "react-bootstrap";
import Iframe from 'react-iframe'
import { Link, useParams} from "react-router-dom";
import'./trailer.css'




const Trailer=({cn})=>{
    const {id}=useParams()
    const movie=cn.find((el)=>el.id==id)
    return(
        <div className="trailer">
            
       <h1 className="trailer_title">{`Trailer of ${movie.name}`}</h1>
       <Iframe height="100%" width="100%" src={`https://www.youtube.com/embed/${movie.trailer}`} id="ytplayer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
       <br/>
       <Link to="/"> <Button>Home</Button></Link>
       </div>
    )
}
export default Trailer


