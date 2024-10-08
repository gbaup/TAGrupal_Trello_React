import React, { useState, useEffect } from 'react';
import { TaskType } from './types/taskType';

// Obtener todas las tareas
export async function getTasks() {
    try {
        const response = await fetch("http://localhost:3000/api/tasks");
        if (!response.ok) {
            throw new Error('Error en la solicitud GET');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}

// Crear una nueva tarea
export async function createTask(task: TaskType) {
    try {
        const response = await fetch("http://localhost:3000/api/tasks", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: task.title,
                description: task.description,
                status: task.status,
                assignedTo: task.assignee,
                endDate: task.endDate,
                priority: task.priority
            })
        });

        if (!response.ok) {
            throw new Error('Error al crear la tarea');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}

// Actualizar una tarea existente
export async function updateTask(task: TaskType) {
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
                assignedTo: task.assignee,
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

// Eliminar una tarea
export async function deleteTask(task: TaskType) {
    try {
        await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}
