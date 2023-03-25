import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../Utils/appSlice';
const BottomNav = () => {
  const dispatch = useDispatch();
  const handleChangeMode = ()=>{
    dispatch(toggleMode());
  }
  return (
    <div className='flex fixed bottom-0 sm:hidden justify-around w-full bg-white py-2 items-center dark:bg-black dark:text-white'>
        <Link to='/'><HomeIcon className='!h-4 !w-4 cursor-pointer'/></Link>
        <DarkModeIcon onClick={handleChangeMode} className='!h-4 !w-4 cursor-pointer'/>
        <AccountCircleIcon className='!h-4 !w-4 cursor-pointer'/>
    </div>
  )
}

export default BottomNav