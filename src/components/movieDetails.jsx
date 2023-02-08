import React, { useEffect, useState } from 'react'
import {SiRottentomatoes,SiImdb} from 'react-icons/si';
import { useParams } from 'react-router-dom';
import MovieLike from './MovieLike';


const MovieDetails = ({movieId}) => {
    const {id} = useParams();

    const [movieDetails,setMovieDetails] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    useEffect(()=>{
        if(id)
        fetch(`http://www.omdbapi.com/?apikey=c8a84d16&i=${id}`).
        then(data=>data.json()).then(data=>{
            setMovieDetails(data)});
    },[])

    console.log(movieDetails);

  return (
    <>
  <div className='flex gap-4 pt-24 pb-16 px-6 text-white'>
    <figure className='bg-red-300 w-[500px] h-[600px]'>
        <img src={movieDetails?.Poster} className='w-full h-full object-cover'/>
    </figure>
    <div className='w-full pl-16 pr-36 glass rounded-lg pt-12'>
        <h1 className='text-3xl font-bold w-full'>{movieDetails?.Title}</h1>
        <h2 className='mt-2 flex justify-start gap-4 font-medium'>
            <span>{movieDetails?.Runtime}</span>
            <span>{movieDetails?.Released}</span>
            <span className='px-4 text-white rounded-full'>{movieDetails?.Rated}</span>
            <span className='px-4 bg-white text-sky-700 rounded-full'>{movieDetails?.Type}</span>
           <MovieLike isLiked={isLiked} isDisliked={isDisliked} setIsLiked={setIsLiked} setIsDisliked={setIsDisliked} movieID={id}/>
        </h2>
        <h2 className='flex gap-3 mt-2'>
            {movieDetails?.Genre.split(',').map(genre=>
                <span className='px-3 py-1 rounded-full text-sm bg-sky-800 text-white' key={genre}>{genre}</span>)}
        </h2>
        <p className='my-8'>{movieDetails?.Plot}</p>
        <div className='mt-4 font-medium'>
            <div className='flex mt-2 w-full justify-around'>
                <div className=''>
                    <div className='flex gap-2 items-center justify-center'>
                        <span><SiImdb className='h-8 w-8 text-white'/></span>
                        <span className='pl-2'>{movieDetails?.Ratings[0]?.Value}</span>
                    </div>
                    <h1 className='pt-2'>{movieDetails?.Ratings[0]?.Source}</h1>
                </div>
                <div className=''>
                    <div className='flex gap-2 items-center justify-center'>
                        <span><SiRottentomatoes className='h-8 w-8 text-red-600'/></span>
                        <span className='pl-2 text-white'>{movieDetails?.Ratings[1]?.Value}</span>
                    </div>
                    <h1 className='pt-2'>{movieDetails?.Ratings[1]?.Source}</h1>
                </div>
                <div className=''>
                    <div className='flex gap-2 items-center justify-center'>
                        <span className='w-8 h-8'>
                            <img className='h-full w-full' src='https://www.metacritic.com/images/icons/metacritic-icon.svg'/>
                        </span>
                        <span className='pl-2'>{movieDetails?.Ratings[2]?.Value}</span>
                    </div>
                    <h1 className='text-center pt-2'>{movieDetails?.Ratings[2]?.Source}</h1>
                </div>
            </div>
        </div>
        <div className='mt-6 flex gap-8'>
            <h1 className='w-16 font-semibold'>Director:</h1>
            <p>{movieDetails?.Director}</p>
        </div>
        <div className='mt-2 flex gap-8'>
            <h1 className='w-16 font-semibold'>Writer:</h1>
            <p>{movieDetails?.Writer}</p>
        </div>
        <div className='mt-2 flex gap-8'>
            <h1 className='w-16 font-semibold'>Actors:</h1>
            <p>{movieDetails?.Actors}</p>
        </div>
        <div className='mt-2 flex gap-8'>
            <h1 className='w-16 font-semibold'>Awards:</h1>
            <p>{movieDetails?.Awards}</p>
        </div>
        <div className='mt-2 flex gap-8'>
            <h1 className='w-16 font-semibold'>BoxOffice:</h1>
            <p>{movieDetails?.BoxOffice}</p>
        </div>
        <div className='mt-2 flex gap-8'>
            <h1 className='w-16 font-semibold'>Country:</h1>
            <p>{movieDetails?.Country}</p>
        </div>
    </div>
  </div>
    </>
    )
}

export default MovieDetails