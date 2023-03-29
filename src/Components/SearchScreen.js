import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { getVideosByQuery } from '../Utils/apiCalls';
import { openMenu } from '../Utils/appSlice';
import useWindowDimensions from '../Utils/Hooks/useWindowDimensions';
import HorizontalVideo from './HorizontalVideo';
import Skeleton from './Skeleton';
import VideoCard from './VideoCard';

const SearchScreen = () => {
  const { loading, videos } = useSelector((store) => store.searchVideo);
  const dispatch = useDispatch()
  dispatch(openMenu())
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  useEffect(() => {
    getVideosByQuery(query, dispatch);
  }, [dispatch, query]);
  const {width} = useWindowDimensions();
  if(width >= 520){
    if(loading === true){
      return <Skeleton type="Horizontal"/>  
    }
    return (
      <div className='flex flex-col overflow-hidden sm:basis-4/5 gap-3 mt-4 mx-4 lg:mx-auto'>
      {videos.map((video)=>(
        <HorizontalVideo key={video.id?.videoId} info={video}/>
      ))}
      </div>
    )
  }
  else{
    if(loading === true){
      return <Skeleton/>  
    }
    return (
      <div>
        {videos?.map((video) => {
       return <VideoCard key={video.id?.videoId} info={video} id={video.id?.videoId} />
      })}
      </div>
    )
  }
}

export default SearchScreen