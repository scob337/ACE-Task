import { createSlice } from "@reduxjs/toolkit";
    const initialState = {
        Hide : true ,
        Product:{}
    }
const Popup = createSlice({
    name: "Popup",
    initialState,
    reducers: {
        Push(state, action){
            state.Product=action.payload
        },
        ToggleHide(state,action){
            state.Hide=action.payload
        }
    }
})

export const {Push , ToggleHide} = Popup.actions;
export default Popup.reducer;