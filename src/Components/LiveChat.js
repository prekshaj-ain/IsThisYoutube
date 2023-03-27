import { AccountCircleRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../Utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [input,setInput] = useState("");
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
    const handleSendChat = ()=>{
        if(input.trim() === ""){
            return
        }
        dispatch(addMessage({
            name: "Preksha jain",
            text: input
        }))
        setInput("");
    }
  return (
    <div className='mr-3 flex flex-col gap-3'>
    <div className='font-bold mx-auto dark:text-white'>Live Chat</div>
    <div className='w-full w-min-[100px] h-[500px] border border-black bg-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse dark:bg-gray-700 dark:text-white'>
        {messages.map((message,index) => (
            <div className='flex gap-2 text-xs my-1 mx-4' key={index}>
                <AccountCircleRounded fontSize="small"/>
                <h4 className='font-bold'>{message.name}</h4>
                <p>{message.text}</p>
            </div>
        ))}
    </div>
    <div className='flex gap-2 h-6 items-center '>
        <input type="text" className='w-full border border-black rounded-md px-3 outline-none text-xs h-6 dark:bg-gray-600 dark:text-white' onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button className='px-2 py-1 font-bold text-xs border border-green bg-green-300 hover:bg-green-400 rounded-md' onClick={handleSendChat}>Send</button>
    </div>
    </div>
  )
}

export default LiveChat