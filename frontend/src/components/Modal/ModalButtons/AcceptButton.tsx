import React from 'react'
import { IModalButton } from '../../../types/IModalButton';
import { cleanInputsAdd, cleanInputsEdit } from '../cleanInputs';

const AcceptButton = (props: IModalButton) => {

    const acceptButton = () => {
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
        <button className="button" id="accept" onClick={acceptButton}>Aceptar</button>
    )
}

export default AcceptButton;
