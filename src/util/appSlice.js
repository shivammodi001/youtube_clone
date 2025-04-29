import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) =>{
            state.isMenuOpen = false;
        }
    }
});

export const { toggleMenu,closeMenu } = appSlice.actions; //from here we export toggle-menu(action)
export default appSlice.reducer; // exporting reducer of slice
