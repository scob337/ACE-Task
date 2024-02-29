import { configureStore } from '@reduxjs/toolkit'
import CartShop from './CartShop-Slice'
import PopupSlice from './Popup-Slice'



export  const store = configureStore({ reducer:{
    Cart:CartShop,
    Popup:PopupSlice

} })