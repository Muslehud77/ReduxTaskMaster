import { useForm } from "react-hook-form";
import Modal from "../Ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/features/tasks/tasksSlice";


const AddTaskModal = ({isOpen,setIsOpen}) => {
    
    const {
      register,
      handleSubmit,
        reset,
      formState: { errors },
    } = useForm();

    const dispatch = useDispatch()
  

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }
      const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel()
      };
    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Title</label>
              <input
                className="rounded-lg w-full"
                type="text"
                id="title"
                {...register("title")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="description">Description</label>
              <textarea
                className="rounded-lg w-full"
                type="text"
                id="description"
                {...register("description")}
              />
            </div>
            <div className="flex flex-col gap-1">
              Deadline{" "}
              <input
                className="rounded-lg w-full"
                type="date"
                id="deadline"
                {...register("deadline")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="assign">Assign to</label>
              <select
                id="assign"
                className="rounded-lg w-full"
                {...register("assign")}
              >
                <option value="Mir Hussain">Mir Hussain</option>
                <option value="Sawal">Sawal</option>
                <option value="Nahid">Nahid</option>
                <option value="Guha">Guha</option>
                
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="description">Priority</label>
              <select className="rounded-lg w-full" {...register("priority")}>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>
          </div>

          <div className="flex  gap-1 mt-5 justify-end">
            <button onClick={onCancel} type="button" className="btn btn-danger">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    );
};

export default AddTaskModal;