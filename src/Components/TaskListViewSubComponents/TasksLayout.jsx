import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Row, Col} from 'react-bootstrap';
import TaskDetails from "./TaskDetails";
import TaskItem from "./TaskItem";
import { useState } from "react";

const TasksLayout = () => {

    return (
        <>
            <Row xs={1} md={3} className="gap-y-4">
                {Array.from({length: 20}).map((_, idx) => (
                    <Col key={idx}>
                        <TaskItem title={`Title num ${idx}`}/>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default TasksLayout;