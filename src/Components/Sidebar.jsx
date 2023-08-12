import React from "react";
import {Home, Notifications, Calender, Portfolio, Goals, Settings, Support, Reports} from './export';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {

    const navigateTo = useNavigate()

    const handleHomeClick = () => {
        navigateTo('/')
    }

    const handleNotificationsClick = () => {
        navigateTo('/notifications')
    }

    const handleProjectsClick = () => {
        navigateTo('/projects')
    }

    const handleCalenderClick = () => {
        navigateTo('/calender')
    }

    const handlePortfolioClick = () => {
        navigateTo('/portfolio')
    }

    const handleGoalsClick = () => {
        navigateTo('/goals')
    }

    const handleSettingsClick = () => {
        navigateTo('/settings')
    }

    const handleSupportClick = () => {
        navigateTo('/support')
    }

    const handleReportsClick = () => {
        navigateTo('/report')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <button onClick={handleHomeClick}>Home</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={handleNotificationsClick}>Notifications</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={handleProjectsClick}>Projects</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={handleCalenderClick}>Calender</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={handlePortfolioClick}>Portfolio</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={handleGoalsClick}>Goals</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={handleSettingsClick}>Settings</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={handleSupportClick}>Support</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={handleReportsClick}>Reports</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Sidebar;