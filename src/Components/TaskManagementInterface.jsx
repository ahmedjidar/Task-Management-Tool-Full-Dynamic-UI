import React from "react";
import { SearchBar, NotificationIcon, UserProfileDropdown } from './_TaskManagementInterface/exports'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import taskifyZen from '../assets/brand/taskifyzen.png' 
import notification from '../assets/icons/notification.png'
import user from '../assets/icons/me2.jpg'
import mail from '../assets/icons/mail.png'
import { useNavigate } from "react-router-dom";

const TaskManagementInterface = () => {

    const navigateTo = useNavigate()

    const navigateRoot = () => {
        navigateTo("/")
    }

    return (
        <Nav
            activeKey="/"
            className="w-full flex items-center text-lg"
        >

            <SearchBar/>    

            <div className="w-4/12">
                <Nav.Item>
                    <UserProfileDropdown user={user} notification={notification} mail={mail}/>
                </Nav.Item>
            </div>
        </Nav>
    );
}

export default TaskManagementInterface;