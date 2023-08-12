import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown} from 'react-bootstrap';
import { useState } from "react";
import NotificationIcon from "./NotificationIcon";
import Mail from "./Mail";

const UserProfileDropdown = ({user, notification, mail}) => {

    const [showMenu, setShowMenu] = useState(false)

    const handleMouseEnter = () => {
        setShowMenu(true)
    }

    const handleMouseLeave = () => {
        setShowMenu(false)
    }

    return (
        <div className="w-full flex items-center justify-center gap-4">
            <NotificationIcon notification={notification}/>
            <Mail mail={mail}/>
            <div className="flex items-center justify-between rounded-2xl cursor-pointer hover:bg-gray-100 box-content p-2 pl-4">
                <div className="w-[1.75rem] h-[1.75rem]">
                    <img src={user} alt="user" className="rounded-full w-full h-full object-cover"/>
                </div>
                <p className="text-slate-800 text-[1rem] font-medium ml-2">Ahmed Amin</p>
                <NavDropdown
                    show={showMenu}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="p-0"
                    id="custom-dropdown"
                >
                    <style>
                        {`#custom-dropdown{
                            display: block !important;
                        }`}

                    </style>
                    <NavDropdown.Header>
                        <img src={user} alt="user" className="rounded"/>
                    </NavDropdown.Header>
                    <NavDropdown.Divider />
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
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    );
}

export default UserProfileDropdown;