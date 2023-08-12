import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Mail = ({mail}) => {

    return (
        <div className="w-[1.25rem] h-[1.25rem] rounded-full cursor-pointer hover:bg-gray-100 box-content p-2">
            <img src={mail} alt="mail-icon" className="border-inherit w-full h-full"/>
        </div>
    );
}

export default Mail;