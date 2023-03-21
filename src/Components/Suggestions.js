import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedVideos } from '../Utils/apiCalls';

const Suggestions = ({id}) => {
  const dispatch = useDispatch();
  const {videos,loading} = useSelector(store => store.homeVideo);
  useEffect(()=>{
    getRelatedVideos(id,dispatch);
  },[dispatch,id])
  return (
    <div>Suggestions</div>
  )
}

export default Suggestions