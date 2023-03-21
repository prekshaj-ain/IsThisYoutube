import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../Utils/apiCalls'
import { openMenu } from '../Utils/appSlice'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getPopularVideos(dispatch);
  },[dispatch])
  dispatch(openMenu());

  return (
    <div className='overflow-hidden w-full'>
        <ButtonList />
        <VideoContainer/>
    </div>
  )
}

export default MainContainer