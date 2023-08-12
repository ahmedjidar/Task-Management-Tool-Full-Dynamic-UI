import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import { Home, Notifications, TaskListView, Calender, Portfolio, Goals, Settings, Support, Reports}
from "./export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routing = () => {

    return (
            <Routes>
                {/* Sidebar Routing */}
                <Route path="/" exact element={<Home/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/projects" element={<TaskListView/>}/>
                <Route path="/calender" element={<Calender/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/goals" element={<Goals/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/support" element={<Support/>}/>
                <Route path="/report" element={<Reports/>}/>
                {/* Navigation Bar Routing */}
            </Routes>
    );
}

export default Routing;