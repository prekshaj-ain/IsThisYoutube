import React from 'react'

const HorizontalVideo = ({info}) => {
  const title = info?.snippet?.title;
  return (
    <div className=' w-full flex gap-2 pr-4'>
      <img src={info?.snippet?.thumbnails?.medium?.url} alt="" className='w-2/5 aspect-video whitespace-nowrap rounded-2xl' />
      <div>
        <p className='font-bold lg:block hidden text-xs pb-2'>{title.length > 70 ? title.substring(0,60)+'...':title}</p>
        <p className='font-bold block lg:hidden pb-2'>{title}</p>
        <p className='text-xs text-gray-500'>{info?.snippet?.channelTitle} </p>
        <p className='text-xs text-gray-500'>A month ago</p>
      </div>
    </div>
  )
}

export default HorizontalVideo