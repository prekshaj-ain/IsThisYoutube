import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getPopularVideos, getVideosByTag } from "../Utils/apiCalls";
import { toggleMode } from "../Utils/appSlice";
const Sidebar = () => {
  const {pathname} = useLocation();
  const isDarkMode = useSelector(store => store.app.isDarkMode)
  const [activeTag,setActiveTag] = useState("");
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(pathname === '/'){
      setActiveTag("Home")
    }
  },[pathname])
  useEffect(()=>{
    if(activeTag === ""){
      return;
    }
    if(activeTag === 'Home'){
      getPopularVideos(dispatch);
    }
    else{
      getVideosByTag(activeTag,dispatch);
    }
  },[activeTag,dispatch])
  const handleChangeMode = ()=>{
    dispatch(toggleMode());
  }

  if(!isMenuOpen) return null;
  return (
    <div className="  hidden sm:basis-1/5 sm:block h-screen sticky top-10">
      <ul className="px-3 py-3 border-b">
      <Link to="/">
        <li onClick={()=>setActiveTag("Home")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'Home' === activeTag && '!bg-gray-100 font-bold dark:!bg-gray-600'} dark:text-white dark:hover:bg-gray-600`}>
          <HomeIcon className="!w-4 !h-4"/>
          <span >Home</span>
        </li>
      </Link>
        <li className="px-2 py-2 flex gap-3 text-xs items-center hover:rounded-xl hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-gray-600">
          <SubscriptionsIcon className="!w-4 !h-4"/>
          <span>Subscription</span>
        </li>
      </ul>
      <ul className="px-3 py-3 border-b">
        <li className="dark:text-white">Explore</li>
        <li onClick={()=>setActiveTag("Trending")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'Trending' === activeTag && '!bg-gray-100 font-bold dark:!bg-gray-600'} dark:text-white dark:hover:bg-gray-600`}>
          <WhatshotIcon className="!w-4 !h-4"/>
          <span>Trending</span>
        </li>
        <li onClick={()=>setActiveTag("Music")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'Music' === activeTag && '!bg-gray-100 font-bold dark:!bg-gray-600'} dark:text-white dark:hover:bg-gray-600`}>
          <MusicNoteIcon className="!w-4 !h-4"/>
          <span>Music</span>
        </li>
        <li onClick={()=>setActiveTag("News")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'News' === activeTag && '!bg-gray-100 font-bold dark:!bg-gray-600'} dark:text-white dark:hover:bg-gray-600`}>
        <NewspaperIcon className="!w-4 !h-4"/>
        <span>News</span>
        </li>
        <li onClick={()=>setActiveTag("Learning")} className={`px-2 py-2 flex gap-3 text-xs items-center rounded-xl hover:bg-gray-100 cursor-pointer ${'Learning' === activeTag && '!bg-gray-100 font-bold dark:!bg-gray-600'} dark:text-white dark:hover:bg-gray-600`}>
        <LightbulbIcon className="!w-4 !h-4"/>
        <span>Learning</span>
        </li>
      </ul>
      <ul className="px-3 py-3">
        <li className="px-2 py-2 flex gap-3 text-xs items-center hover:rounded-xl hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-gray-600">
        <FeedbackIcon className="!w-4 !h-4"/>
        <span>Send Feedback</span>
        </li>
        {
          isDarkMode ?
          (<li onClick={handleChangeMode} className="px-2 py-2 flex gap-3 text-xs items-center hover:rounded-xl hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-gray-600">
        <LightModeIcon className="!w-4 !h-4"/>
        <span>Light Mode</span>
        </li>)
           :
        (<li onClick={handleChangeMode} className="px-2 py-2 flex gap-3 text-xs items-center hover:rounded-xl hover:bg-gray-100 cursor-pointer dark:text-white dark:hover:bg-gray-600">
        <DarkModeIcon className="!w-4 !h-4"/>
        <span>Dark Mode</span>
        </li>)
        }
      </ul>
    </div>
  );
};

export default Sidebar;
