import React from "react";
import { SearchBar, NotificationIcon, UserProfileDropdown } from './_TaskManagementInterface/exports'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import taskifyZen from '../assets/brand/taskifyzen.png' 
import { useNavigate } from "react-router-dom";

const TaskManagementInterface = () => {

    const navigateTo = useNavigate()

    const navigateRoot = () => {
        navigateTo("/")
    }

    return (
        <Nav
            activeKey="/"
            className="w-full py-3 flex items-center justify-around bg-slate-800 text-white text-lg"
        >
            <Nav.Item onClick={navigateRoot}>
                <img src={taskifyZen} alt="taskifyZen" className="max-w-[130px] max-h-[65px] w-auto h-auto cursor-pointer"/>
            </Nav.Item>
            <Nav.Item>
                <SearchBar/>
            </Nav.Item>
            <div className="py-3 flex items-center">
                <Nav.Item className=" mr-4 ">
                    <NotificationIcon/>
                </Nav.Item>
                <Nav.Item>
                    <UserProfileDropdown/>
                </Nav.Item>
            </div>
        </Nav>
    );
}

export default TaskManagementInterface;