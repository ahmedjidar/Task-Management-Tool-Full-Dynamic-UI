import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStartedInterface from "./GetStartedInterface";
import { Routes, Route } from "react-router-dom";
import { BasicInformation, MultiStepRegistration, OrganizationDetails, PreferencesAndNotifications, ProfileSetup, SecurityAndAgreements } from "./export";

const RegistrationRouting = () => {

    return (
        <Routes>
            {/* multi-step registration */}
            <Route index element={<MultiStepRegistration/>}/>
            {/* <Route path="/basic-information" element={<BasicInformation/>}/>
            <Route path="/profile-setup" element={<ProfileSetup/>}/>
            <Route path="/organization-details" element={<OrganizationDetails/>}/>
            <Route path="/preferences-and-notifications" element={<PreferencesAndNotifications/>}/>
            <Route path="/security-and-agreements" element={<SecurityAndAgreements/>}/> */}
            {/* home board after server validation */}
        </Routes>
    )
}

export default RegistrationRouting;