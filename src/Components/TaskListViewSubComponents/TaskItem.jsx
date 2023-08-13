import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import TaskDetails from "./TaskDetails";
import { useState } from "react";

const TaskItem = ({title}) => {

    const [showComponent, setShowComponent] = useState(false)

    const handleComponentDisplay = () => {
        setShowComponent(!showComponent)
    }

    return (
        <>
            {showComponent && <TaskDetails title={title}/>}
                <Card onClick={handleComponentDisplay}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Description</Card.Text>
                        <Button variant="success" className="text-gray-600">Done</Button>
                    </Card.Body>
                    <Card.Footer>Footer</Card.Footer>
                </Card>
        </>
    )
}

export default TaskItem;