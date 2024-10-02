import React from 'react'
import { IModalButton } from '../../../types/IModalButton';
import { cleanInputsAdd, cleanInputsEdit } from '../cleanInputs';

const DeleteButton = (props: IModalButton) => {

    const deleteButton = () => {
        const modalID = "taskModal" + (props.modalId);
        const modal = document.getElementById(modalID);

        // Add functionality to accept button


        if (modalID === "taskModalAdd") {
            cleanInputsAdd();

        } else {
            cleanInputsEdit();
        }
        modal?.classList.remove("is-active");
    }

    return (
        <button className="button" id="delete" onClick={deleteButton}>Deletar</button>
    )
}


export default DeleteButton;
