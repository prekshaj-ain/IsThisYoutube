import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import homeVideoSlice from "./homeVideoSlice";
import relatedVideosSlice from "./relatedVideosSlice";
import searchSlice from "./searchSlice";
import searchVideosSlice from "./searchVideosSlice";
import selectedVideoSlice from "./selectedVideoSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        homeVideo : homeVideoSlice,
        selectedVideo : selectedVideoSlice,
        relatedVideo: relatedVideosSlice,
        searchVideo: searchVideosSlice,
        chat: chatSlice,
    }
});

export default store;