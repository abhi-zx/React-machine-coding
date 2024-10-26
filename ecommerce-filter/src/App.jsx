import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './components/Applayout'
import Home from './pages/Home'
import Context from './context/Context'
const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
      
    ]
  }
])
function App() {
  return(
     <Context>
     <RouterProvider router={router}></RouterProvider>
    </Context>
    )
}

export default App
