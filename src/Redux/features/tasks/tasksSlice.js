import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks : [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask : (actions,{payload})=>{
        actions.tasks.push(payload)
      }
    },
})

export const {addTask} = tasksSlice.actions

export default tasksSlice.reducer