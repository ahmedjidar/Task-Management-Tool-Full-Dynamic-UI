import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskManagementInterface, Sidebar, Home, Notifications, TaskListView, Calender,
         Portfolio, Goals, Settings, Support, Reports, Routing} from "./export";

const AppLayout = () => {

    return (
        <Container fluid className="box-border">
            <Row>
                <Col xs={3}>
                    <Sidebar/>
                </Col>
                <Col xs={9} className="mt-4">
                    <Row>
                        <Col>
                            <TaskManagementInterface/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="h-screen py-4">
                            <Routing/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      );
}

export default AppLayout;