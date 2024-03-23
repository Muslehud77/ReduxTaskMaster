import React from 'react';
import { useSelector } from 'react-redux';

const TaskDetailsModal = ({id}) => {

    const {tasks} = useSelector((state)=>state.tasksSlice)


    const task = tasks.find(t=> t.id === id)

    

    return (
      <div>
        <div className="bg-secondary/10 rounded-md p-5">
          <h1
            className={`text-lg font-semibold mb-3  ${
              task?.priority === "high" ? "text-red-500" : ""
            } ${task?.priority === "medium" ? "text-yellow-500" : ""} ${
              task?.priority === "low" ? "text-green-500" : ""
            }`}
          >
            {task?.title}
          </h1>
          <p className="mb-3">{task?.description}</p>
          <p className="text-sm">Assigned to - {task?.assign}</p>
          <div className="flex justify-between mt-3">
            <p>{task?.date}</p>
            <div className="flex gap-3">
            
            </div>
          </div>
        </div>
      </div>
    );
};

export default TaskDetailsModal;