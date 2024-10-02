import React from 'react'
import { IModal } from '../../types/IModal';
import "./Modal.css"

import AcceptButton from './ModalButtons/AcceptButton';
import CancelButton from './ModalButtons/CancelButton';
import DeleteButton from './ModalButtons/DeleteButton';

export const Modal = (props: IModal) => {


    if (props.isEdit) {
        return (
            <>
                <div id="taskModalEdit" className="modal">
                    <div className="modal-background"></div>

                    <div className="modal-content">
                        <h2>Editar tarea</h2>

                        <label>Título:</label>
                        <input type="text" id="titleEdit" placeholder="Título" />
                        <br />

                        <label>Descripción:</label>
                        <textarea id="descriptionEdit" placeholder="Descripción"></textarea>
                        <br />

                        <label>Asignado:</label>
                        <input type="text" id="assignEdit" placeholder="Asignado" />
                        <br />

                        <label>Prioridad:</label>
                        <select id="priorityEdit">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />

                        <label>Estado:</label>
                        <select id="stateEdit">
                            <option value="backlog">Backlog</option>
                            <option value="to-do">To do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                            <option value="blocked">Blocked</option>
                        </select>
                        <br />

                        <label>Fecha:</label>
                        <input type="date" id="dateEdit" />
                        <br />

                        <div className="buttons">
                            <AcceptButton modalId="Edit"></AcceptButton>
                            <CancelButton modalId="Edit"></CancelButton>
                            <DeleteButton modalId="Edit"></DeleteButton>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div id="taskModalAdd" className="modal">
                    <div className="modal-background"></div>

                    <div className="modal-content">
                        <h2>Agregar tarea</h2>

                        <label>Título:</label>
                        <input type="text" id="titleAdd" placeholder="Título" />
                        <br />

                        <label>Descripción:</label>
                        <textarea id="descriptionAdd" placeholder="Descripción"></textarea>
                        <br />

                        <label>Asignado:</label>
                        <input type="text" id="assignAdd" placeholder="Asignado" />
                        <br />

                        <label>Prioridad:</label>
                        <select id="priorityAdd">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />

                        <label>Estado:</label>
                        <select id="stateAdd">
                            <option value="backlog">Backlog</option>
                            <option value="to-do">To do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                            <option value="blocked">Blocked</option>
                        </select>
                        <br />

                        <label>Fecha:</label>
                        <input type="date" id="dateAdd" />
                        <br />

                        <div className="buttons">
                            <AcceptButton modalId="Add"></AcceptButton>
                            <CancelButton modalId="Add"></CancelButton>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Modal;