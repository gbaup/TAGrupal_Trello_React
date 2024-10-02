import "./AddButton.css";
import {useDispatch} from 'react-redux';
import {addTask} from "../Store/taskSlice.ts";


const AddButton = () => {
    const dispatch = useDispatch();

    const task = "Task 1";

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
        }
    };
    return (
        <button id="addTask"
                className="button is-small is-link"
                onClick={() => {
                    console.log("Add task");
                    handleAddTask();
                }}
        >+</button>
    );
}
export default AddButton;