import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import TaskItem from "./TaskItem";

const TaskDetails = ({title, priority, assignees, deadline, tags}) => {

    return (
        <ul>
            <li className="text-2xl text-gray-600 font-bold">{title}</li>
            {/* <li>Priority:   {priority}</li>
            <li>Assignees:  {assignees}</li>
            <li>Deadline:   {deadline}</li>
            <li>T@gs:   {tags}</li> */}
        </ul>
    )
}

export default TaskDetails;