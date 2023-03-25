import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        isDarkMode: false
    },
    reducers: {
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false;
        },
        openMenu: (state)=>{
            state.isMenuOpen = true;
        },
        toggleMode: (state)=>{
            state.isDarkMode = !state.isDarkMode;
        }
    }
})
export default appSlice.reducer;
export const { toggleMenu,closeMenu,openMenu,toggleMode } = appSlice.actions;