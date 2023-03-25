import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className='flex fixed bottom-0 sm:hidden justify-around w-full bg-white py-2 items-center '>
        <Link to='/'><HomeIcon className='!h-4 !w-4 cursor-pointer'/></Link>
        <DarkModeIcon className='!h-4 !w-4 cursor-pointer'/>
        <AccountCircleIcon className='!h-4 !w-4 cursor-pointer'/>
    </div>
  )
}

export default BottomNav