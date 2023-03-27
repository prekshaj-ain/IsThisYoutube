import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage : (state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.unshift(action.payload);
        }
    }
})
export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;