import { createSlice } from "@reduxjs/toolkit";

const selectedVideoSlice = createSlice({
    name: "selectedVideo",
    initialState: {
        loading: false,
        error: false,
        video: {},
    },
    reducers : {
        SELECTED_VIDEO_START : (state)=>{
            state.loading = true;

        },
        SELECTED_VIDEO_SUCCESS : (state,action)=>{
            state.loading = false;
            state.video = action.payload;
        },
        SELECTED_VIDEO_FAIL : (state)=>{
            state.error = true;
            state.loading = false;
        } 
    }
})
export default selectedVideoSlice.reducer;
export const {SELECTED_VIDEO_SUCCESS,SELECTED_VIDEO_START,SELECTED_VIDEO_FAIL} = selectedVideoSlice.actions; 