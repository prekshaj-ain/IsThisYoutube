import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { getPopularVideos, getVideosByTag } from '../Utils/apiCalls';
import { useDispatch } from 'react-redux';
const List = ["All","Music","Live","Comedy","Gaming","Javasript","Comedy Live","Gaming Live","Javasript Projects","Motivation","Data Structure","Stock market","Line art","Debates","Recently uploaded","New to you"]
const ButtonList = () => {
  const tabList = useRef(0);
  const [activeRight,setActiveright] = useState(tabList && tabList.current.offsetWidth <= tabList.current.scrollWidth ? true:false)
  const [activeLeft,setActiveleft] = useState(false);
  const [activeTag,setActiveTag] = useState('All');
  const dispatch = useDispatch();
  const leftArrowClickHandler = ()=>{
    tabList.current.scrollLeft -= tabList.current.offsetWidth/2;
    checkButtons(tabList.current.offsetWidth,tabList.current.scrollWidth);
  }
  const rightArrorClickHandler = ()=>{
    tabList.current.scrollLeft += tabList.current.offsetWidth/2;
    checkButtons(tabList.current.offsetWidth,tabList.current.scrollWidth);
  }
  useEffect(()=>{ 
    checkButtons(tabList.current.offsetWidth,tabList.current.scrollWidth)
  },[])
  const checkButtons = (offSetWidthValue,scrollWidthValue)=>{
    if(tabList.current.scrollLeft <= 0){
      setActiveleft(false);
    }else setActiveleft(true);
    if(tabList.current.scrollLeft + offSetWidthValue >= scrollWidthValue){
      setActiveright(false)
    }else{
      setActiveright(true)
    }
  }
  const tagChangeHandler = (tag)=>{
    setActiveTag(tag);
  }
  useEffect(()=>{
    if(activeTag === 'All'){
      getPopularVideos(dispatch);
    }
    else{
      getVideosByTag(activeTag, dispatch);
    }
  },[dispatch,activeTag])
  return (
    <div className=' bg-white flex items-center'>
    {activeLeft && <div className='hidden top-0 h-full lg:flex bg-gradient-to-r from-white'>
      <KeyboardArrowLeftIcon className="!h-7 !w-7 p-1 rounded-full hover:bg-gray-300" onClick={leftArrowClickHandler}/>
    </div>}
    <div className='flex gap-3 p-4 overflow-x-scroll scrollbar-hide scroll-smooth' ref={tabList}>
      {
        List.map((button,index) => (
          <div onClick={()=>tagChangeHandler(button)} key={index} className={`border rounded-md w-fit px-3 py-1 bg-gray-200 text-xs hover:bg-gray-300 cursor-pointer whitespace-nowrap ${button === activeTag && '!bg-black text-white !hover:bg-black'} `}>
      {button}
    </div>
        ))
      }
    </div>
    {activeRight && <div className='hidden top-0 h-full right-0 lg:flex bg-gradient-to-l from-white'>
    <KeyboardArrowRightIcon className="!h-7 !w-7 p-1 rounded-full hover:bg-gray-300 " onClick={rightArrorClickHandler}/>
    </div>}
    </div>
  )
}

export default ButtonList