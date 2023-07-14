import React from 'react'
import Navibar from './navibar/Navibar'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
         {/* navigation bar*/}
         <Navibar/>
         {/* place holder*/}
         <div className='container'>
         <Outlet/>
         </div>
        
    </div>
  )
}

export default RootLayout