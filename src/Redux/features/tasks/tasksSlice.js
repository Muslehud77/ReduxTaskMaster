import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assign: "Mir Hussain",
      priority: "high",
    },
  ],
  userTasks : []
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const task = { status: "pending", ...payload };

      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, ...task });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({ id: lastElement.id + 1, ...task });
      }
    },
    removeTask: (state, { payload }) => {
      const filtered =  state.tasks.filter((task) => task.id !== payload);
      state.tasks = filtered
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((task) => payload.id === task.id);
      target.status = payload.status;
     
    },
    userTasks : (state,{payload})=>{
      
    }
  },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
