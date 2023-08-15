import React from "react";
import { TaskDetails, TaskFilter, TaskItem, TaskForm, TasksLayout } from "./export";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import { useState } from "react";

const TaskListView = () => {

    const [selectedTask, setSelectedTask] = useState(null)
    
    const handleComponentDisplay = (task) => {
        setSelectedTask(task);
    }

    return (
        <div>
            <section className="w-full h-96 mb-4">
                {selectedTask && <TaskDetails task={selectedTask}/>}
            </section>
            <TasksLayout showDetails={handleComponentDisplay}/>
            <TaskFilter/>
            <TaskForm/>
        </div>
    )
}

export default TaskListView;