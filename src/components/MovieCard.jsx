import React, { useState } from 'react'

const MovieCard = ({movie,setMovieId}) => {
    const [isLiked,setIsLiked] = useState(false);


  return (
    <label
    htmlFor="my-modal-4" 
    className="cursor-pointer" 
    key={movie.imdbID}
    onClick={()=>setMovieId(movie.imdbID)}
    >
     <div className="card w-72 bg-base-100 shadow-xl">
 <figure className='w-full h-96'><img className='w-full h-full object-cover object-top' src={movie.Poster==='N/A' ? 'https://www.reelviews.net/resources/img/default_poster.jpg':movie.Poster} alt="Shoes" /></figure>
 <div className=" px-4 py-4 h-36">
   <h2 className="card-title h-[60%] flex justify-start items-start">
     <span className='text-lg'>
     {movie.Title.slice(0,50)}
       </span></h2>
   <div className='flex gap-2 mt-4 items-center'>
     <span className='bg-[#1E6095] text-white px-4 py-1 rounded-full'>{movie.Year}</span>
     <span className='bg-[#051B2C] text-white px-4 py-1 rounded-full'>{movie.Type}</span>
   </div>
 </div>
</div>
   </label>
  )
}

export default MovieCard