import React from "react";
import { Card, Button } from 'react-bootstrap';

const TaskItem = ({ task, onClick }) => {
    return (
        <Card onClick={onClick} className="cursor-pointer hover:shadow-md">
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Button variant="success" className="text-gray-600">Show</Button>
            </Card.Body>
            <Card.Footer>{task.deadline}</Card.Footer>
        </Card>
    )
}

export default TaskItem;
