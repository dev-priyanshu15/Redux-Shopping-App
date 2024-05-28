import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../counterSlice'
import cartSlice from "../cartSlice";
import 'bootstrap/dist/css/bootstrap.min.css';

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        cart: cartSlice

    }
})
//step 1 over
//step m3 ke baad import counter then step 4 me sc me ek or folder co,mponent
//countersuperrman ko counter kiya hai wapis

