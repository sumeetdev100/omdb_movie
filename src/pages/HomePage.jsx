import React from 'react'
import MovieDetails from '../components/movieDetails'
import MovieCard from '../components/MovieCard'
import { Link } from 'react-router-dom'

const HomePage = ({movies,searchTerm,isLoading,movieId,setMovieId}) => {
  return (
    <main className='bg-[#051B2C] w-screen flex flex-col items-center gap-2 pt-24 h-screen overflow-y-auto '>
  <h1 className='text-white text-2xl font-bold'>Free Movies and TV</h1>
<h1 className='flex gap-3 text-xl text-white text-left w-full px-10 mt-8'>
  <span>Search:</span>
  <span>{searchTerm}</span>
</h1>

{isLoading ? <div className='text-white'>Loading</div>:null}
  <div className=' w-full h-full flex flex-wrap gap-6 justify-center mt-8'>
    {(movies && !isLoading) ? movies?.map(movie=>
   <Link to={`/description/${movie.imdbID}`} key={movie.imdbID}>
    <MovieCard movie={movie} setMovieId={setMovieId} key={movie.imdbID}/>
   </Link>
    ):null}
{(movies===undefined && !isLoading)?<div className='h-screen'>
  <h1 className='text-white'>No Results Found
  </h1>
  </div>:null}
  </div>
</main>
  )
}

export default HomePage