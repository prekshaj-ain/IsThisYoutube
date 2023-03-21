import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import homeVideoSlice from "./homeVideoSlice";
import searchSlice from "./searchSlice";
import selectedVideoSlice from "./selectedVideoSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        homeVideo : homeVideoSlice,
        selectedVideo : selectedVideoSlice,
    }
});

export default store;