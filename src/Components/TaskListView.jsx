import React from "react";
import { TaskDetails, TaskFilter, TaskItem, TaskForm, TasksLayout } from "./export";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';

const TaskListView = () => {

    return (
        <div>
            <div className="w-full h-96 bg-gray-200 mb-4"><TaskDetails/></div>
            <TasksLayout/>
            <TaskFilter/>
            <TaskForm/>
        </div>
    )
}

export default TaskListView;