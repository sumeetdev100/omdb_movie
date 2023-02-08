import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const Layout = ({setMovies,setIsLoading,setSearchTerm}) => {

  return (
    <div className='overflow-x-hidden'>
<Navbar setMovies={setMovies} setIsLoading={setIsLoading} setSearchTerm={setSearchTerm}/>
<div className='bg-[#051B2C] h-screen'>
<Outlet/>
</div>
</div>
  )
}

export default Layout