
import { YOUTUBE_API_URL, YOUTUBE_SUGGESTION_URL, YOUTUBE_TAG_URL, YOUTUBE_VIDEO_URL } from "./Constants";
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "./homeVideoSlice"
import { SELECTED_VIDEO_FAIL, SELECTED_VIDEO_START, SELECTED_VIDEO_SUCCESS } from "./selectedVideoSlice";

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
        const data = await fetch(YOUTUBE_TAG_URL + tag);
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
export const getVideoById = async (id,dispatch)=>{
    dispatch(SELECTED_VIDEO_START());
    try{
        
        const data = await fetch(YOUTUBE_VIDEO_URL + id);
        if(data.status === 200){
            const json = await data.json();
            dispatch(SELECTED_VIDEO_SUCCESS(json.items[0]));
        }
        else{
            dispatch(SELECTED_VIDEO_FAIL());
        }
    }catch(err){
        dispatch(SELECTED_VIDEO_FAIL())
    }
}
export const getRelatedVideos = async (id,dispatch)=>{
    dispatch(FETCH_START());
    try{
        const data = await fetch(YOUTUBE_SUGGESTION_URL + id);
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