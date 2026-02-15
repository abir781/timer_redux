import { configureStore } from "@reduxjs/toolkit";
import timereducer from "./Feature";


const store= configureStore({
    reducer:{
        todox:todoreducer
    },
});


export default store;