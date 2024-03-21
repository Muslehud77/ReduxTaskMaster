import { useForm } from "react-hook-form";
import Modal from "../Ui/Modal";


const AddTaskModal = ({isOpen,setIsOpen}) => {

    const {
      register,
      handleSubmit,
     
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
      <Modal isOpen={true} setIsOpen={setIsOpen} title="Add Task">
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
                <option value="ami">ami</option>
                <option value="tmi">tmi</option>
                <option value="amiami">tmitmi</option>
                <option value="tmiamiamitmi">tmiamiamitmi</option>
                <option value="amiona">tmiona</option>
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
          <button type="submit">Submit</button>
        </form>
      </Modal>
    );
};

export default AddTaskModal;