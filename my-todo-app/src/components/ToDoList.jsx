import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ tasks, toggleTask, deleteTask, editTask }) => (
    <ul className="mt-4">
        {tasks.map((task) => (
            <ToDoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
        ))}
    </ul>
);