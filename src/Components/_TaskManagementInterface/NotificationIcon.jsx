import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const NotificationIcon = ({notification}) => {

    const navigateTo = useNavigate()

    const clickNotificationIcon = () => {
        navigateTo('/notifications')
    }

    return (
        <div onClick={clickNotificationIcon} className="w-[1.25rem] h-[1.25rem] rounded-full cursor-pointer hover:bg-gray-100 box-content p-2">
            <img src={notification} alt="notification-icon" className="w-full h-full"/>
        </div>
    );
}

export default NotificationIcon;