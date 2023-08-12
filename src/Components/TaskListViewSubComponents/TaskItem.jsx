import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';

const TaskItem = ({title, description, status}) => {

    return (
        // card
        <Card>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Status: {status}</Card.Text>
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default TaskItem;