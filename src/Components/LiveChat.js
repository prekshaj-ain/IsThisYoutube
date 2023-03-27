import { AccountCircleRounded } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../Utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector(store => store.chat.messages)
    useEffect(()=>{
        const i = setInterval(()=>{
            // api polling
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    text: generateRandomMessage(10),
                })
            )
        }, 500);
        return ()=> clearInterval(i);
    },[])
  return (
    <div className='w-full h-[500px] border border-black bg-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <p className="font-bold">Live Chat</p>
        {messages.map((message,index) => (
            <div className='flex gap-2 text-xs my-1 mx-4' key={index}>
                <AccountCircleRounded fontSize="small"/>
                <h4 className='font-bold'>{message.name}</h4>
                <p>{message.text}</p>
            </div>
        ))}
    </div>
  )
}

export default LiveChat