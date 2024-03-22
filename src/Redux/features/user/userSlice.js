import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name : 'Mir Hossain',
    email : 'mir@gmail.com',
    userTasks : []
}

const userSlice = createSlice({
    name : "user", initialState , reducers : {}
})


export default userSlice.reducer