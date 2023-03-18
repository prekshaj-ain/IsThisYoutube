import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import homeVideoSlice from "./homeVideoSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        homeVideo : homeVideoSlice,
    }
});

export default store;