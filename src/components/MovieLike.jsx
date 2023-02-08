import React from 'react'
import {AiFillLike,AiFillDislike,AiOutlineDislike,AiOutlineLike} from 'react-icons/ai';

const MovieLike = ({isLiked,setIsLiked,isDisliked,setIsDisliked,movieID}) => {
  return (
    <div className='flex gap-4 ml-6'>
                <span>{isLiked ? <AiFillLike className='w-6 h-6' onClick={()=>setIsLiked(false)}/>:<AiOutlineLike className='w-6 h-6' onClick={()=>{
                    setIsLiked(true)
                    if(isDisliked)
                    setIsDisliked(false)}}/>}</span>
                <span>{isDisliked ?<AiFillDislike className='w-6 h-6' onClick={()=>setIsDisliked(false)}/> :<AiOutlineDislike className='w-6 h-6' onClick={()=>{
                    setIsDisliked(true)
                    if(isLiked)
                    setIsLiked(false)}}/>}</span>
            </div>
  )
}

export default MovieLike