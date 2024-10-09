import React, { useState, useEffect } from 'react';

// interfaz para definir las tasks y que no salte error 
interface Task {
    id?: number;
    title: string;
    description: string;
    status: string;
    assignedTo: string;
    endDate: string;
    priority: string;
}

export async function getTasks(): Promise<Task[] | void> {
    try {
        const response = await fetch("http://localhost:3000/api/tasks");
        if (!response.ok) {
            throw new Error('Error en la solicitud GET');
        }
        const data: Task[] = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}


export async function createTask(task: Task): Promise<Task | void> {
    try {
        const response = await fetch("http://localhost:3000/api/tasks", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        if (!response.ok) {
            throw new Error('Error al crear la tarea');
        }

        const data: Task = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}


export async function updateTask(task: Task): Promise<Task | void> {
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: task.title,
                description: task.description,
                status: task.status,
                assignedTo: task.assignedTo,
                endDate: task.endDate,
                priority: task.priority
            })
        });

        if (!response.ok) {
            throw new Error('Error al actualizar la tarea');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}

export async function deleteTask(taskId: number): Promise<void> {
    try {
        await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}