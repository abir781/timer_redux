import { configureStore } from "@reduxjs/toolkit";
import timereducer from "./Feature";


const store= configureStore({
    reducer:{
        
        timerx:timereducer
    },
});


export default store;