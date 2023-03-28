import React from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'
import Skeleton from './Skeleton';
const VideoContainer = () => {
  const {loading,videos} = useSelector(store => store.homeVideo);
  if(loading === true){
    return <Skeleton type='Home'/>
  }

  return (
    <div className='flex flex-col items-center justify-evenly min-[520px]:flex-row flex-wrap'>
      
      {videos?.map(video => {
        const id = video.id?.videoId || video.id;
       return <VideoCard key={id} info={video} id={id} />
      })}
    </div>
  )
}

export default VideoContainer