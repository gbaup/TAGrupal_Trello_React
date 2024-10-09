import React, {useEffect, useState} from 'react'
import {IModal} from '../../types/IModal';
import "./Modal.css"

import AcceptButton from './ModalButtons/AcceptButton';
import CancelButton from './ModalButtons/CancelButton';
import DeleteButton from './ModalButtons/DeleteButton';
import {useSelector} from "react-redux";
import {RootState} from "../Store/store.ts";
import {TaskType} from "../../types/taskType.ts";

export const Modal = ({isEdit}: { isEdit: boolean }) => {
    const selectedTask: TaskType = useSelector((state: RootState) => state.tasks.selectedTask);

    const [taskData, setTaskData] = useState({
        id: 0,
        title: '',
        description: '',
        assignee: '',
        priority: '1',
        status: 'backlog',
        endDate: ''
    });

    useEffect(() => {
        if (isEdit && selectedTask) {
            setTaskData({
                id: selectedTask.id,
                title: selectedTask.title || '',
                description: selectedTask.description || '',
                assignee: selectedTask.assignee || '',
                priority: selectedTask.priority || '1',
                status: selectedTask.status || 'backlog',
                endDate: selectedTask.endDate || ''
            });
        }
    }, [isEdit, selectedTask]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setTaskData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    if (isEdit) {

        return (
            <>
                <div id="taskModalEdit" className="modal">
                    <div className="modal-background"></div>

                    <div className="modal-content">
                        <h2>Editar tarea</h2>

                        <input type="hidden" id="idEdit"/>

                        <label>Título:</label>
                        <input type="text"
                               id="titleEdit"
                               name="title"
                               placeholder="Título"
                               onChange={handleChange}
                               value={taskData.title}
                        />
                        <br/>

                        <label>Descripción:</label>
                        <textarea
                            id="descriptionEdit"
                            name="description"
                            placeholder="Descripción"
                            onChange={handleChange}
                            value={taskData.description}
                        ></textarea>
                        <br/>

                        <label>Asignado:</label>
                        <input type="text"
                               id="assignEdit"
                               name="assignee"
                               placeholder="Asignado"
                               onChange={handleChange}
                               value={taskData.assignee}
                        />
                        <br/>

                        <label>Prioridad:</label>
                        <select id="priorityEdit"
                                name="priority"
                                onChange={handleChange}
                                value={taskData.priority}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br/>

                        <label>Estado:</label>
                        <select id="stateEdit"
                                name="status"
                                onChange={handleChange}
                                value={taskData.status}
                        >
                            <option value="backlog">Backlog</option>
                            <option value="to-do">To do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                            <option value="blocked">Blocked</option>
                        </select>
                        <br/>

                        <label>Fecha:</label>
                        <input type="date"
                               name="endDate"
                               id="dateEdit"
                               onChange={handleChange}
                               value={taskData.endDate}
                        />
                        <br/>

                        <div className="buttons">
                            <AcceptButton modalId="Edit"
                                          taskData={taskData}
                            ></AcceptButton>
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
                        <input type="text"
                               name="title"
                               id="titleAdd"
                               placeholder="Título"
                               onChange={handleChange}
                               value={taskData.title}
                        />
                        <br/>

                        <label>Descripción:</label>
                        <textarea id="descriptionAdd"
                                  name="description"
                                  placeholder="Descripción"
                                  onChange={handleChange}
                                  value={taskData.description}
                        ></textarea>
                        <br/>

                        <label>Asignado:</label>
                        <input type="text"
                               id="assignAdd"
                               name="assignee"
                               placeholder="Asignado"
                               onChange={handleChange}
                               value={taskData.assignee}
                        />
                        <br/>

                        <label>Prioridad:</label>
                        <select id="priorityAdd"
                                name="priority"
                                onChange={handleChange}
                                value={taskData.priority}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br/>

                        <label>Estado:</label>
                        <select id="stateAdd"
                                name="status"
                                onChange={handleChange}
                                value={taskData.status}
                        >
                            <option value="backlog">Backlog</option>
                            <option value="to-do">To do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                            <option value="blocked">Blocked</option>
                        </select>
                        <br/>

                        <label>Fecha:</label>
                        <input type="date"
                               id="dateAdd"
                               name="endDate"
                               onChange={handleChange}
                               value={taskData.endDate}
                        />
                        <br/>

                        <div className="buttons">
                            <AcceptButton modalId="Add"
                                          taskData={taskData}
                            ></AcceptButton>
                            <CancelButton modalId="Add"></CancelButton>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Modal;