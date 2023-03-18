import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({info,id}) => {
    const {title,channelTitle,thumbnails,publishedAt} = info.snippet;
  return (
    <Link to={`watch?v=${id}`} className='w-full basis-1/4 min-w-[12rem] lg:px-2 py-2 cursor-pointer'>
        <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg w-full'/>
        <div className='px-2 py-2 '>
            <div className='font-bold text-[.65rem] md:h-12'>{title.length > 70 ? title.substring(0,70)+'...':title}</div>
            <div className='flex text-[.6rem] gap-1 min-[520px]:flex-col'>
                <p className='text-gray-500 whitespace-nowrap'>{channelTitle} </p>
                <p className='text-gray-500'>{info?.statistics?.viewCount} . {publishedAt}</p>
            </div>
        </div>
    </Link>
  )
}

export default VideoCard