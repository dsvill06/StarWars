import React, {useState,useEffect} from 'react'

function Card(props) {
  return (
    <div> 
      <div className='card bg-dark text-light' style={{width:"20rem", height:"10rem"}}>
        <div class="card-body">
            <h5 class="card-title">Character</h5>
            <p class="card-text">Name: {props.name}</p>
            <a href="/about"><button type="button" class="btn btn-primary">Information</button></a>
        </div>
      </div>
    </div>
  )
}

export default Card
