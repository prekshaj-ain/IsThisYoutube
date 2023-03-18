import React from 'react'
import { YOUTUBE_SUGGESTION_URL } from '../Utils/Constants'
import useFetch from '../Utils/Hooks/useFetch'

const Suggestions = ({id}) => {
    const videos = useFetch(YOUTUBE_SUGGESTION_URL(id));
    console.log(videos);
  return (
    <div>Suggestions</div>
  )
}

export default Suggestions