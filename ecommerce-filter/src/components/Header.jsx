import React from 'react'

const Header = () => {
  return (
   <nav className='flex h-5 justify-between items-center'>
    <h2 className='text-2xl font-mono'>Ecommerce Store</h2>
    <input type="text" placeholder='Search a Product...'></input>
   </nav>
  )
}

export default Header
