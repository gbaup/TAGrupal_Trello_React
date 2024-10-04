import React, { useState, useEffect } from 'react';

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
export async function createTask(task) {
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
                assignedTo: task.assignedTo,
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
export async function updateTask(task) {
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

// Eliminar una tarea
export async function deleteTask(taskId) {
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
