import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {Helmet} from "react-helmet";
const Detail = () => {
    const[data,setData]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3007/cards/${id}`).then(res=>{
            setData(res.data)
        })
    },[])
  return (
    <div style={{paddingTop:'30px',marginLeft:'33%',marginBottom:'50px'}}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Detail-Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

 <div style={{width:'500px',textAlign:'center'}} class="carddd">

   
    <div class="view overlay">
      <img style={{width:'500px'}} class="card-img-top" src={data.image}
        alt="Card image cap"/>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
  
    
    <div class="card-body">
  
        
      <h4 class="card-title">{data.name}</h4>
      
      <p class="card-text">{data.desc}</p>
      
      <p class="card-text">${data.price}.00</p>
      
  
    </div>
  
  </div>


    </div>

   
  )
}

export default Detail