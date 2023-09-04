import React from "react";

const TaskDetails = ({ task }) => {
    return (
        <ul>
            <li className="text-2xl text-gray-600 font-bold">{task.title}</li>
            <li>Priority:   {task.priority}</li>
            <li>Assignees:  {task.assignees.join(", ")}</li>
            <li>Deadline:   {task.deadline}</li>
            <li>Tags:   {task.tags.join(", ")}</li>
            <li>Status: {task.status}</li>
        </ul>
    )
}

export default TaskDetails;
