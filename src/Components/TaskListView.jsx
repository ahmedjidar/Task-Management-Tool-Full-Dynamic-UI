import React from "react";
import { TaskDetails, TaskFilter, TaskItem, TaskForm } from "./export";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';

const TaskListView = () => {

    return (
        <div>
            <h3>TaskListView</h3>
            <TaskDetails/>
            <TaskFilter/>
            <TaskItem/>
            <TaskForm/>
        </div>
    )
}

export default TaskListView;