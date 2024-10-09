import { useEffect } from "react";
import "./AddButton.css";

const AddButton = () => {

    const showModal = () => {
        const modal = document.getElementById("taskModalAdd");
        modal?.classList.add("is-active");
    }

    return (
        <div className="container-button-add-task">
            <button id="addTask" className="button is-small is-link" onClick={showModal}>+</button>
        </div>
    );
}
export default AddButton;