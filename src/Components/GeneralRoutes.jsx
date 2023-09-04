import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { AppLayout, GetStartedInterface, BasicInformation, ProfileSetup, OrganizationDetails,
        PreferencesAndNotifications, SecurityAndAgreements, RegistrationRouting} from "./export";
import { Home, Notifications, TaskListView, Calender, Portfolio, Goals, Settings, Support,
        Reports } from "./export";

const GeneralRoutes = () => {

    return (
        <Routes>
            {/* getting started & registration */}
            <Route path="registration/*" element={<RegistrationRouting/>}/>

            {/* main routes */}
            <Route path="username/*" element={<AppLayout/>}/>

            {/* default route */}
            <Route path="/" element={<GetStartedInterface/>}/>
        </Routes>
    )
}

export default GeneralRoutes;