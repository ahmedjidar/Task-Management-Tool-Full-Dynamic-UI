import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskManagementInterface, Sidebar, Home, Notifications, TaskListView, Calender,
         Portfolio, Goals, Settings, Support, Reports, Routing} from "./export";

const AppLayout = () => {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <TaskManagementInterface/>
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <Sidebar/>
                </Col>
                <Col xs={9}>
                    <Routing/>
                </Col>
            </Row>
        </Container>
      );
}

export default AppLayout;