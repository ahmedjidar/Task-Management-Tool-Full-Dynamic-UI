import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const BasicInformation = ({ handleClientDataChange, handleNextStep, sendDebugMsg }) => {
    const [validated, setValidated] = useState(false);
    const [basicInformation, setBasicInformation] = useState({
        fullName:'',
        emailAddress:'',
        password:''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBasicInformation(prevBasicInformation => ({ ...prevBasicInformation, [name]: value }));
      };

    const handleBasicInformationSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        sendDebugMsg("Submit Action Sent From Basic Information Child");

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            handleClientDataChange('basicInformationData', basicInformation);
            handleNextStep();
        }
        setValidated(true);
    }

    return(
        <div className='flex'>
            <div className='h-min-screen bg-slate-50 basis-5/12'>
                
            </div>
            <div className='min-h-screen flex justify-center items-center basis-7/12'>
                <Form noValidate validated={validated} onSubmit={handleBasicInformationSubmit} className=' w-1/2' method='post'>
                    <Col className="mb-3">
                        {/* full name */}
                        <Form.Group as={Col} controlId="BasicInformation1" className='mb-8'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Full Name
                            </Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text  className=" bg-slate-50 border rounded-r-none rounded-l-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    onChange={handleChange}
                                    value={basicInformation.fullName}
                                    type="text"
                                    name='fullName'
                                    pattern='[a-zA-Z ]{3,}'
                                    placeholder="Enter your complete name"
                                    className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300'
                                />
                                <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>Full name must contain a minimum of 3 letters, special characters & numbers aren't allowed</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        {/* email */}
                        <Form.Group as={Col} controlId="BasicInformation2" className='mb-8'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Email
                            </Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text className=" bg-slate-50 border rounded-r-none rounded-l-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    onChange={handleChange}
                                    value={basicInformation.emailAddress}
                                    type="text"
                                    name='emailAddress'
                                    pattern="[A-Za-z0-9_]+@[A-Za-z_]+\.[a-z]{2,4}"
                                    placeholder="you@example.com"
                                    className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300'
                                />
                                <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>The email format you provided is not supported!</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        {/* password */}
                        <Form.Group as={Col} controlId="BasicInformation3">
                            <Form.Label className='text-lg font-medium text-black'>
                                Password
                            </Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text className=" bg-slate-50 border rounded-r-none rounded-l-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    onChange={handleChange}
                                    value={basicInformation.password}
                                    type="password"
                                    name='password'
                                    pattern='.{8,}'
                                    placeholder="Think of a passphrase"
                                    className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300'
                                />
                                <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>Password must contain a minimum of 8 characters</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <div className='flex items-center justify-end gap-4 mt-16'>
                        <button className='flex items-center justify-between gap-2 p-3 text-md font-medium text-white bg-black border hover:bg-gray-800 rounded-md mr-4' type="submit">
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

