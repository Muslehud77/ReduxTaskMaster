import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Ui/Modal';
import { useEffect, useState } from 'react';
import TaskDetailsModal from './TaskDetailsModal';
import { updateStatus, configUserTasks } from '../../Redux/features/tasks/tasksSlice';



const MyTasks = () => {
 const dispatch = useDispatch()
  const [isOpen,setIsOpen] = useState(false)
  
  const [taskModal,setTaskModal] = useState(null)
  const { userTasks ,tasks } = useSelector((state) => state.tasksSlice);
  const {name} = useSelector(state=>state.userSlice)


  // const userTasks = tasks.filter(task=> task.assign === name)

 
  const setTaskToShow = (id)=>{
    setTaskModal(id)
    setIsOpen(true)
  }

  useEffect(() => {
    dispatch(configUserTasks(name));
  }, [name, tasks,dispatch]);



  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userTasks?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setTaskToShow(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>

              <button
                onClick={() =>
                  dispatch(updateStatus({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <TaskDetailsModal id={taskModal} />
      </Modal>
    </div>
  );
};

export default MyTasks;
