import React from 'react'
import {IModalButton} from '../../../types/IModalButton';
import {cleanInputsAdd, cleanInputsEdit} from '../cleanInputs';
import {APIcreateTask, updateTask} from '../../../ApiInteractions.ts';
import {useDispatch} from 'react-redux';
import {editTask, addTask} from '../../../components/Store/taskSlice';
import {createTaskDto} from "./dto/createTask.dto.ts";
import {updateTaskDto} from "./dto/updateTask.dto.ts";


interface AcceptButtonProps extends IModalButton {
    taskData: createTaskDto | updateTaskDto;
}

const AcceptButton: React.FC<AcceptButtonProps> = ({modalId, taskData}) => {
    const dispatch = useDispatch();
    const acceptButton = () => {
        const modal = document.getElementById("taskModal" + modalId);
        if (modalId === "Add") {
            console.log("Adding task de la nueva forma")
            console.log({taskData})
            APIcreateTask(taskData)
                .then(response => {
                    dispatch(addTask(response));
                    cleanInputsAdd();
                })
        } else if (modalId === "Edit") {
            console.log("Updating task de la nueva forma")
            console.log({taskData})

            dispatch(editTask({newTask: taskData}));

            updateTask(taskData)
                .then(response => {
                    cleanInputsEdit();
                })
        }
        modal?.classList.remove("is-active");
    }

    return (
        <button className="button" id="accept" onClick={acceptButton}>Aceptar</button>
    )
}

export default AcceptButton;
