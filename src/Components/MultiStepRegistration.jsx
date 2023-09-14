import React, { useEffect, useState } from "react";
import { BasicInformation, ProfileSetup, OrganizationDetails, PreferencesAndNotifications, SecurityAndAgreements } from "./export";

const MultiStepRegistration = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const TOTAL_STEPS = 5;
    const [clientSignUpData, setClientSignUpData] = useState({
        basicInformationData: {},
        profileSetupData: {},
        organizationDetailsData: {},
        preferencesAndNotificationsData: {},
        securityAndAgreementsData: {},
    });
    const API_ENDPOINT = `/api/users/create`

    const isDataFilled = (data) => {
        return Object.values(data).every(value => value !== '' && value !== null && value !== false && value !== undefined);
    }

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    } 
    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    }

        // try {
        //     return await axios.post(API_ENDPOINT, clientSignUpData)
        //         .then(result => {
        //             console.log("Client Data Sent: ", clientSignUpData);
        //             console.log("Client Response Data: ", result);
        //         });
        //     }
        // catch(error) {
        //     alert("An error occurred while submitting the form. Please try again.");
        //     console.log("Axios Error:", error.response.data);
        // }
    
    
    // for debugging purposes
    const [debugMsg, setDebugMsg] = useState('');
    const sendDebugMsg = (msg) => {
        setDebugMsg(msg);
    }
    console.log("Debug Msg Sent: ", debugMsg);
    console.log("Current Data: ", clientSignUpData);
    // end of debugging purposes

    const handleClientDataChange = (step, data) => {
        setClientSignUpData(prevState => ({...prevState, [step]: data}));
    };

    return (
        <>
            {currentStep === 1 && (
                <BasicInformation 
                    handleClientDataChange={handleClientDataChange} 
                    handleNextStep={handleNextStep}
                    sendDebugMsg={sendDebugMsg}
                />   
            )}

            {currentStep === 2 && isDataFilled(clientSignUpData.basicInformationData) && (
                <ProfileSetup 
                    handleClientDataChange={handleClientDataChange} 
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                    sendDebugMsg={sendDebugMsg}
                />
            )}

            {currentStep === 3 && isDataFilled(clientSignUpData.profileSetupData) && (
                <OrganizationDetails 
                    handleClientDataChange={handleClientDataChange} 
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                    sendDebugMsg={sendDebugMsg}
                />
            )}

            {currentStep === 4 && isDataFilled(clientSignUpData.organizationDetailsData) && (
                <PreferencesAndNotifications 
                    handleClientDataChange={handleClientDataChange} 
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                    sendDebugMsg={sendDebugMsg}
                />
            )}

            {currentStep === 5 && isDataFilled(clientSignUpData.preferencesAndNotificationsData) && (
                <SecurityAndAgreements 
                    handleClientDataChange={handleClientDataChange} 
                    handleNextStep={handleNextStep}
                    handlePreviousStep={handlePreviousStep}
                    sendDebugMsg={sendDebugMsg}
                />
            )}
        </>
    )
}

export default MultiStepRegistration;