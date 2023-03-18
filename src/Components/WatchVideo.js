import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../Utils/appSlice';
import { YOUTUBE_VIDEO_URL } from '../Utils/Constants';
import useFetch from '../Utils/Hooks/useFetch'
import CommentsContainer from './CommentsContainer';
import Suggestions from './Suggestions';

const WatchVideo = () =>{
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
    const dispatch = useDispatch();
    dispatch(closeMenu());
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
    const video = useFetch(YOUTUBE_VIDEO_URL(id));
    // console.log(video);
    return (
    <div className='flex flex-col lg:flex-row w-full'>
      <div className=' basis-2/3 justify-center lg:px-5 py-4'>
        <iframe className='w-full max-w-xl lg:max-w-full aspect-video'  src={`//www.youtube.com/embed/${id}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowFullScreen="allowFullScreen"></iframe>
        <CommentsContainer />
      </div>
      <Suggestions id={id}/>
    </div>
  )
}

export default WatchVideo