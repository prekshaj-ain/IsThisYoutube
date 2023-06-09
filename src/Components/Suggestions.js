import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedVideos } from '../Utils/apiCalls';
import useWindowDimensions from '../Utils/Hooks/useWindowDimensions';
import HorizontalVideo from './HorizontalVideo';
import LiveChat from './LiveChat';
import VideoCard from './VideoCard';

const Suggestions = ({id}) => {
  const dispatch = useDispatch();
  const {videos} = useSelector(store => store.relatedVideo);
  useEffect(()=>{
    getRelatedVideos(id,dispatch);
  },[id,dispatch])
  const {width} = useWindowDimensions();
  return (
    <div className='flex flex-col py-4 basis-1/3 gap-3'>
    {width >= 520 && <LiveChat/>}
      {videos.map(video => (
        width >= 520 ? 
        <HorizontalVideo key={video?.id?.videoId} info={video} size='small'/>
        : <VideoCard key={video?.id?.videoId} info={video} id={video?.id?.videoId}/>
      ))}
    </div>
    
  )
}

export default Suggestions