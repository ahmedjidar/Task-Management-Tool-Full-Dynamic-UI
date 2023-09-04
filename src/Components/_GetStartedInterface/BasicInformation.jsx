import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const BasicInformation = () => {

    const [validated, setValidated] = useState(false);

    const navigateTo = useNavigate();

    const navigateToNextStep = () => {
        navigateTo("/registration/profile-setup");
    }

    const navigateToPreviousStep = () => {
        navigateTo("/");
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (form.checkValidity() === true) {
            navigateToNextStep();
        }
        setValidated(true);
      };

    return(
        <div className='flex'>
            <div className='h-min-screen bg-slate-50 basis-5/12'>

            </div>
            <div className='min-h-screen flex justify-center items-center basis-7/12'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className=' w-1/2'>
                    <Col className="mb-3">
                        {/* full name */}
                        <Form.Group as={Col} controlId="BasicInformation1" className='mb-8'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Full Name
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                pattern='[a-zA-Z ]{3,}'
                                placeholder="Enter your complete name"
                                className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300 rounded-lg'
                            />
                            <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Full name must contain a minimum of 3 letters, special characters & numbers aren't allowed</Form.Control.Feedback>
                        </Form.Group>
                        {/* email */}
                        <Form.Group as={Col} controlId="BasicInformation2" className='mb-8'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Email
                            </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                pattern="[A-Za-z0-9_]+@[A-Za-z_]+\.[a-z]{2,4}"
                                placeholder="you@example.com"
                                className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300 rounded-lg'
                            />
                            <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Your email format is not supported!</Form.Control.Feedback>
                        </Form.Group>
                        {/* password */}
                        <Form.Group as={Col} controlId="BasicInformation3">
                            <Form.Label className='text-lg font-medium text-black'>
                                Password
                            </Form.Label>
                            <Form.Control
                                required
                                type="password"
                                pattern='.{8,}'
                                placeholder="Think of a passphrase"
                                className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300 rounded-lg'
                            />
                            <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Password must contain a minimum of 8 characters</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <div className='flex items-center justify-end gap-4 mt-16'>
                        <button onClick={navigateToPreviousStep} className='flex items-center justify-between gap-2 p-3 text-md font-medium text-black bg-gray-50 border hover:bg-white rounded-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            Previous
                        </button>
                        <button className='flex items-center justify-between gap-2 p-3 text-md font-medium text-white bg-black border hover:bg-gray-800 rounded-xl mr-4' type="submit">
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default BasicInformation;


// private String fullName;
// private String emailAddress;
// private String password;
// // Profile Setup
// private String profilePicture;
// private String username;
// private String timeZone;
// // Organization Details
// private String organizationName;
// private String jobTitle;
// // Preferences and Notifications
// private String preferedLanguage;
// private String notificationPreference;
// private String mobilelNumber;
// // Security and Agreements
// private List<String> securityQuestions; 
// private String termsAndConditions;