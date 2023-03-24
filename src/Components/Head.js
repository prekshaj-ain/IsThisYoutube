import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_URL } from "../Utils/Constants";
import { cacheResults } from "../Utils/searchSlice";
import { Link } from "react-router-dom";
import DetectClickOutside from "./DetectClickOutside";

const Head = () => {
  const dispatch = useDispatch();
  const sideBarOpenHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [openList,setOpenList] = useState(false);
  const [Suggestions,setSuggestions] = useState(null);
  const searchCache = useSelector(store => store.search);
  useEffect(() => {
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestion();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestion = async () => {
    console.log('API CALL - '+searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({[searchQuery]: json[1]}))
  };
  const handleListClick = (query)=>{
    setOpenList(false);
    setSearchQuery(query)
  }
  return (
    <div className="flex px-4 py-2 w-full min-w-[100px] items-center justify-between sticky top-0 bg-white">
      <div className="hidden sm:flex sm:items-center sm:gap-4">
        <MenuIcon onClick={sideBarOpenHandler} className="cursor-pointer" />
        <img
          className="w-19 h-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="Youtube"
        />
      </div>
      <img
        className="sm:hidden w-14 h-3"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        alt="Youtube"
      />
      <div className="inline-block w-2/4 min-w-[10rem] sm:relative">
      <DetectClickOutside onClickOutside={()=>setOpenList(false)}>
        <div className="flex flex-col">
          <div className="w-full flex">
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border rounded-l-full h-8 outline-0 px-4 focus:shadow-inner focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={()=>setOpenList(true)}
            />
            <Link to={`/results?search_query=${searchQuery}`} onClick={()=>setOpenList(false)} className="flex items-center justify-center w-14 bg-gray-50 text-gray-400 border border-l-0 rounded-r-full h-8">
              <SearchIcon fontSize="small" />
            </Link>
          </div>
          {openList && <div className="absolute top-[50px] sm:top-[40px] right-0 sm:right-auto w-screen bg-white sm:w-[calc(100%-3.1rem)] shadow-xl rounded-lg">
            <ul>
            { Suggestions.map((suggestion,index) => (
              <Link to={`/results?search_query=${suggestion}`} onClick={()=>handleListClick(suggestion)} key={index} className="text-gray-500 flex gap-2 items-center cursor-default px-4 py-1 hover:bg-gray-100"><SearchIcon fontSize="small" />{suggestion}</Link>
            )) }
              
            </ul>
          </div>}
        </div>
      </DetectClickOutside>
      </div>
      <div className=" hidden sm:flex sm:w-24 w-12  justify-end ">
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Head;
