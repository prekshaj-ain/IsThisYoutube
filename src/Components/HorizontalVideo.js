import React from 'react'
import { Link } from 'react-router-dom';

const HorizontalVideo = ({info,size}) => {
  const title = info?.snippet?.title;
  return (
    <Link to={`/watch?v=${info?.id?.videoId}`}className=' w-full flex gap-2 pr-4 justify-center'>
      <img src={info?.snippet?.thumbnails?.medium?.url} alt="" className='w-2/5 max-w-[17rem] aspect-video whitespace-nowrap rounded-2xl' />
      <div className='w-3/5'>
        {size === 'small' ? <p className='font-bold lg:block hidden text-xs'>{title.length > 70 ? title.substring(0,60)+'...':title}</p>
        :<p className='font-normal block text-xs md:text-sm'>{title}</p>}
        <p className='text-[.6rem] text-gray-500 pb-3'>A month ago</p>
        <p className='text-xs text-gray-500'>{info?.snippet?.channelTitle} </p>
      </div>
    </Link>
  )
}

export default HorizontalVideo