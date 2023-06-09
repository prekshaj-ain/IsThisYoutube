import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos } from '../Utils/apiCalls'
import { openMenu } from '../Utils/appSlice'
import BottomNav from './BottomNav'
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
        <BottomNav />
    </div>
  )
}

export default MainContainer