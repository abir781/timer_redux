import { createSlice } from "@reduxjs/toolkit";

const timerslice = createSlice({
    name: 'timer',
    initialState:{
        time: "000000" 
    },
    reducers:{
        settime:(state,action)=>{
            state.time=action.payload      
         }
    }
})

export const {settime}=timerslice.actions
export default timerslice.reducer