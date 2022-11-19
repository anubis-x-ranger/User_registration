import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import ShowUsers from './ShowUsers'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ShowUsers></ShowUsers>}/>
            <Route path='/Register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes