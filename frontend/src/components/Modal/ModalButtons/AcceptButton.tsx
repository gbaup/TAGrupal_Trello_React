import React from 'react'
import { IModalButton } from '../../../types/IModalButton';
import { cleanInputsAdd, cleanInputsEdit } from '../cleanInputs';
import { APIcreateTask } from '../../../ApiInteractions';
import { useDispatch } from 'react-redux';
import { editTask } from '../../../components/Store/taskSlice';


const AcceptButton = (props: IModalButton) => {

    const acceptButton = () => {
        const modalID = "taskModal" + (props.modalId);
        const modal = document.getElementById(modalID);

        // Add functionality to accept button


        if (modalID === "taskModalAdd") {
            const title = (modal?.querySelector("#titleAdd") as HTMLInputElement).value;
            const description = (modal?.querySelector("#descriptionAdd") as HTMLInputElement).value;
            const assignee = (modal?.querySelector("#assignAdd") as HTMLInputElement).value;
            const priority = (modal?.querySelector("#priorityAdd") as HTMLSelectElement).value;
            const status = (modal?.querySelector("#stateAdd") as HTMLSelectElement).value;
            const endDate = (modal?.querySelector("#dateAdd") as HTMLInputElement).value;
            const id = 0;
            const task = { id, title, description, assignee, endDate, priority, status };
            APIcreateTask(task);
            cleanInputsAdd();
        } else {
            const title = (modal?.querySelector("#titleEdit") as HTMLInputElement).value;
            const description = (modal?.querySelector("#descriptionEdit") as HTMLInputElement).value;
            const assignee = (modal?.querySelector("#assignEdit") as HTMLInputElement).value;
            const priority = (modal?.querySelector("#priorityEdit") as HTMLSelectElement).value;
            const status = (modal?.querySelector("#stateEdit") as HTMLSelectElement).value;
            const endDate = (modal?.querySelector("#dateEdit") as HTMLInputElement).value;
            const id = parseInt(modalID.split("taskModal")[1]);
            const task = { id, title, description, assignee, endDate, priority, status };
            useDispatch(editTask({ oldTask: id, newTask: task }));
            cleanInputsEdit();
        }
        modal?.classList.remove("is-active");
    }

    return (
        <button className="button" id="accept" onClick={acceptButton}>Aceptar</button>
    )
}

export default AcceptButton;
