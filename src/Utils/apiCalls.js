
import { YOUTUBE_API_URL, YOUTUBE_TAG_API } from "./Constants";
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "./homeVideoSlice"

export const getPopularVideos = async (dispatch)=>{
    dispatch(FETCH_START());
    try{
        const data = await fetch(YOUTUBE_API_URL);
        if(data.status === 200){
            const json = await data.json();
            dispatch(FETCH_SUCCESS(json.items));
        }
        else{
            dispatch(FETCH_FAIL());
        }
    }catch(err){
        dispatch(FETCH_FAIL());
    }
}
export const getVideosByTag = async (tag,dispatch)=>{
    dispatch(FETCH_START());
    try{
        const data = await fetch(YOUTUBE_TAG_API + tag);
        if(data.status === 200){
            const json = await data.json();
            dispatch(FETCH_SUCCESS(json.items));
        }
        else{
            dispatch(FETCH_FAIL());
        }
    }catch(err){
        dispatch(FETCH_FAIL())
    }
}