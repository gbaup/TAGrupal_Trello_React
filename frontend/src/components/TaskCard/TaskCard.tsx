import { CardType } from "../../types/cardType.ts";
import { TaskContent } from "../TaskContent/TaskContent.tsx";
import './TaskCard.css';
import React from 'react'

export const TaskCard = ({ title, id }: CardType) => {
    return (
        <div className="card" id={id}>
            <div className="card-title">
                <h2>{title}</h2>
            </div>
            <TaskContent title={title} id={id} />
        </div>
    );
}

