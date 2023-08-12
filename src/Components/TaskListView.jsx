import React from "react";
import { TaskDetails, TaskFilter, TaskItem, TaskForm } from "./export";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';

const TaskListView = () => {

    return (
        <div>
            <p className="text-2xl text-gray-600 font-bold">Projects</p>
            <TaskDetails/>
            <TaskFilter/>
            <TaskItem title={"Task 1"} description={"This is a test Task Card."} status={"In Progress"}/>
            <TaskForm/>
        </div>
    )
}

export default TaskListView;