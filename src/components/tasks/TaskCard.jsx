import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../Redux/features/tasks/tasksSlice';

const TaskCard = ({task}) => {

  const dispatch = useDispatch()

  const update = (t)=>{
    let status;
     if (t.status === "pending") {
      status = 'running'
     }else if (t.status === "running"){
      status = 'done'
     }else if(t.status === 'done'){
      status = 'archive'
     } 
     dispatch(updateStatus({ id: t.id, status }));
  }

  

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.priority === 'high' ? 'text-red-500' : ''
        } ${task?.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task?.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assign}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={()=>dispatch(removeTask(task?.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
           onClick={()=>update(task)}
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
