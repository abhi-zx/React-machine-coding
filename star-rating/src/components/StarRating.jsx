import React, { useState } from 'react'
import './StarRating.css'
const StarRating = ({size,rating,onChange}) => {
const [hoveredRating,setHoveredRating] =useState(0)
const handleStarHover =(Index)=>{
    setHoveredRating(Index)
}
    
  return (
    <div className='starRating'>
      {Array(size).fill("").map((_,index)  =>{
        const Index = index+1;
        let startClass='star'
        if(hoveredRating >= Index){
            startClass+=' hover'
        }
        else if(rating>=Index){
            startClass+= " active"
        }
        return(
            <span className={startClass} 
            onMouseEnter={()=>handleStarHover(Index)}
            onMouseLeave={()=>handleStarHover(0)}
            onClick={()=>onChange(Index)}
            key={index}
            > 
             &#9733;   
            </span>
        )
      })}
    </div>
  )
}

export default StarRating
