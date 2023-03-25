import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_URL } from '../Utils/Constants'
import ReplyIcon from '@mui/icons-material/Reply';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import numeral from 'numeral';

const VideoMetaData = ({info}) => {
  const [channelData, setChannelData] = useState(null);
  const channelId = info?.snippet?.channelId;
  useEffect(()=>{
    const fetchChannel = async ()=>{
      const response =await fetch(YOUTUBE_CHANNEL_URL + channelId);
      const data = await response.json();
      setChannelData(data.items[0]);
    }
    fetchChannel();
  },[channelId])
  return (
    <div >
      <p className='font-bold py-3 px-1 md:text-lg'>{info?.snippet?.title}</p>
      <div className='flex flex-col gap-3 sm:flex-row justify-between'>
        <div className='flex items-center gap-2 px-1 '>
          <img className='rounded-full w-8 h-8' src={channelData?.snippet?.thumbnails?.medium.url} alt={channelData?.snippet?.title}/>
          <div>
            <p className='font-bold'>{channelData?.snippet?.title}</p>
            <p>{numeral(channelData?.statistics?.subscriberCount).format('0.a')} subscribers</p>
          </div>
            <div className='rounded-full text-white bg-black flex items-center justify-center gap-1 font-semibold w-fit px-2 h-8 text-[.8rem]'>Subscribe</div>
        </div>
        <div className='flex gap-2 '>
          <div className='rounded-full bg-gray-100 flex items-center justify-center gap-1 font-semibold w-fit px-2 h-8 text-[.8rem]'><ReplyIcon fontSize="small"/><span>Share</span></div>
          <div className='rounded-full bg-gray-100 flex items-center justify-center gap-1 font-semibold w-fit h-8 px-2 text-[.8rem]'><FileDownloadOutlinedIcon fontSize='small'/><span>Download</span></div>
        </div>
      </div>
    </div>
  )
}

export default VideoMetaData