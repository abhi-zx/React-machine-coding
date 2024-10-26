import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const style ={
        navbar:{
            height:"50px",
            display:"flex",
            justifyContent:"space-between",
            padding:"10px",
            margin:"20px"
        }
    }
  return (
    <div className='navbar' style={style.navbar}>
     <Link to='/'>Home</Link> 
     <Link to='/about'>About</Link> 
     <Link to='/blog'>Blog</Link> 
    </div>
  )
}

export default NavBar
