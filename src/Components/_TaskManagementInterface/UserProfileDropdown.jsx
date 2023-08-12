import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown} from 'react-bootstrap';
import { useState } from "react";
import user from '/Users/asus/Task_Management_Tool/src/assets/icons/user.png'

const UserProfileDropdown = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleMouseEnter = () => {
        setShowMenu(true)
    }

    const handleMouseLeave = () => {
        setShowMenu(false)
    }

    return (
        <NavDropdown
            title=
            {
                <img 
                    src={user} 
                    alt="user" 
                    className="max-w-[35px] max-h-[35px] w-auto h-auto rounded-full"
                />
            }
            show={showMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="custom-dropdown"
        >

            <style>
                {`#custom-dropdown::after {
                    display: none !important;
                }`}
            </style>

            <NavDropdown.Header>
                <img src={user} alt="user" className="rounded"/>
            </NavDropdown.Header>

            <NavDropdown.Item href="/portfolio">
                My Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="/portfolio">
                Edit Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="/inbox">
                Inbox
            </NavDropdown.Item>
            <NavDropdown.Item href="/settings">
                Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="/support">
                Help
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
                Logout
            </NavDropdown.Item>
        </NavDropdown>
    );
}

export default UserProfileDropdown;