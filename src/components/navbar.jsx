import React, { useRef } from 'react'
import {BsSearch} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({setIsLoading,setMovies,setSearchTerm}) => {

    const searchRef = useRef();
    const navigate = useNavigate();


    const searchMovies = (e)=>{
        e.preventDefault();
        const searchTerm = searchRef.current.value;
        const url = `http://www.omdbapi.com/?apikey=c8a84d16&s=${searchTerm}`
    
        if(searchTerm.length >2)
        {
          getMovies(url);
          setSearchTerm(searchTerm);
          navigate('/');
        //   setError('');
          searchRef.current.value = ''
        }
        else
        {
            //
        }
    }

    const getMovies = (url)=>{
        setIsLoading(true);
        fetch(url)
          .then(data=>data.json())
          .then(data=>{
            setMovies(data.Search);
            setIsLoading(false);
          });
        }


  return (
    <div className="navbar bg-[#1E6095] text-black justify-between w-screen fixed z-10">
    <div className="text-white ">
     <Link to='/'>
     <span className="btn btn-ghost px-1 nd:px-4 normal-case text-md md:text-xl">DebMovies</span>
     </Link>
    </div>
    <div className="flex-none">
    <div className="dropdown dropdown-end">
        <label tabIndex={0} className="">
          <div className="text-white btn rounded-l-full bg-[#051B2C] btn-sm text-[10px] md:text-md md:btn-md">
            <h3>Movies</h3>
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
      <form className="form-control flex flex-row items-center" onSubmit={e=>searchMovies(e)}>
        <input type="text" placeholder="Search" className="input h-8 md:h-12 input-bordered text-black w-32 md:w-[300px] rounded-none text-[13px] md:text-md lg:text-lg" ref={searchRef}/>
        <span className='btn rounded-r-full btn-sm md:btn-md bg-[#051B2C]'>
        <BsSearch/>
      </span>
      </form>
    </div>
    <h3 className='mr-4 text-white font-semibold hidden md:block'>Login</h3>
  </div>
  )
}

export default Navbar