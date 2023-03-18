import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPopularVideos, getVideosByTag } from "../Utils/apiCalls";
const Sidebar = () => {
  const [activeTag,setActiveTag] = useState('Home')
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(activeTag === 'Home'){
      getPopularVideos(dispatch);
    }
    else{
      getVideosByTag(activeTag,dispatch);
    }
  },[activeTag])

  if(!isMenuOpen) return null;
  return (
    <div className="  hidden sm:basis-1/5 sm:block h-screen sticky top-10">
      <ul className="px-3 py-3 border-b">
      <Link to="/">
        <li onClick={()=>setActiveTag("Home")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'Home' === activeTag && '!bg-gray-100 font-bold'}`}>
          <HomeIcon className="!w-4 !h-4"/>
          <span >Home</span>
        </li>
      </Link>
        <li className="px-2 py-2 flex gap-3 text-xs items-center hover:rounded-xl hover:bg-gray-100 cursor-pointer">
          <SubscriptionsIcon className="!w-4 !h-4"/>
          <span>Subscription</span>
        </li>
      </ul>
      <ul className="px-3 py-3 border-b">
        <li>Explore</li>
        <li onClick={()=>setActiveTag("Trending")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'Trending' === activeTag && '!bg-gray-100 font-bold'}`}>
          <WhatshotIcon className="!w-4 !h-4"/>
          <span>Trending</span>
        </li>
        <li onClick={()=>setActiveTag("Music")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'Music' === activeTag && '!bg-gray-100 font-bold'}`}>
          <MusicNoteIcon className="!w-4 !h-4"/>
          <span>Music</span>
        </li>
        <li onClick={()=>setActiveTag("News")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'News' === activeTag && '!bg-gray-100 font-bold'}`}>
        <NewspaperIcon className="!w-4 !h-4"/>
        <span>News</span>
        </li>
        <li onClick={()=>setActiveTag("Learning")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'Learning' === activeTag && '!bg-gray-100 font-bold'}`}>
        <LightbulbIcon className="!w-4 !h-4"/>
        <span>Learning</span>
        </li>
      </ul>
      <ul className="px-3 py-3">
        <li className="px-2 py-2 flex gap-3 text-xs items-center hover:rounded-xl hover:bg-gray-100 cursor-pointer">
        <FeedbackIcon className="!w-4 !h-4"/>
        <span>Send Feedback</span>
        </li>
        <li className="px-2 py-2 flex gap-3 text-xs items-center hover:rounded-xl hover:bg-gray-100 cursor-pointer">
        <DarkModeIcon className="!w-4 !h-4"/>
        <span>Dark Mode</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
