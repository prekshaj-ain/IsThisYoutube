import React from 'react'
const HomeVideoSkeleton = ()=>{
    return (
        <div className='flex flex-col items-center justify-evenly min-[520px]:flex-row flex-wrap'>
            {
                Array(20).fill(
                    <div className='w-full basis-1/4 min-w-[12rem] lg:px-2 py-2 animate-pulse'>
                        <div className='w-full rounded-lg bg-gray-200 aspect-video dark:bg-gray-700'/>
                        <div className='h-6 w-full my-1 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                        <div className='h-3 w-20 my-1 bg-gray-200 rounded-lg dark:bg-gray-700'></div>
                    </div>
                )
            }

        </div>
    )
}
const HorizontalVideoSkeleton = ()=>{
    return (
        <div className='flex flex-col overflow-hidden sm:basis-4/5 gap-3 mt-4 mx-4 lg:mx-auto'>
            {
                Array(20).fill(
                    <div className='w-full flex gap-2 pr-4 justify-center animate-pulse'>
                        <div className='w-2/5 max-w-[17rem] aspect-video rounded-2xl bg-gray-200 dark:bg-gray-700'></div>
                        <div className='w-3/5 my-3'>
                            <div className='h-10 w-full bg-gray-200 rounded-2xl dark:bg-gray-700'/>
                            <div className='h-5 w-1/5 my-2 bg-gray-200 rounded-2xl dark:bg-gray-700'/>
                        </div>
                    </div>

                )
            }
        </div>
    )
}
const Skeleton = ({type}) => {
    if(type === 'Home'){
        return <HomeVideoSkeleton />
    }
    if(type === 'Horizontal'){
        return <HorizontalVideoSkeleton />
    }
  return (
    <div className='text-gray-500 font-bold my-4 mx-auto animate-bounce'>Loading...</div>
  )
}

export default Skeleton