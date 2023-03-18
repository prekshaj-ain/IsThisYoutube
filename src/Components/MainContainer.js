import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos } from '../Utils/apiCalls'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getPopularVideos(dispatch);
  },[dispatch])
  return (
    <div className='overflow-hidden w-full'>
        <ButtonList />
        <VideoContainer/>
    </div>
  )
}

export default MainContainer