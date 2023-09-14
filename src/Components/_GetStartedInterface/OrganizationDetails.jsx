import React, {useState, useEffect} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Select from 'react-select';
import { jobTitleOptions } from "../../Constants/toGetStartedData";

const OrganizationDetails = ({ handleClientDataChange, handleNextStep, handlePreviousStep, sendDebugMsg }) => {
    const [organizationDetailsData, setOrganizationDetailsData] = useState({
        organization:'',
        jobTitle: null,
    })
    const [validated, setValidated] = useState(false);
    const [selectedJobTitle, setSelectedJobTitle] = useState(null);

    useEffect(() => {
        setOrganizationDetailsData(prevOrganizationDetails => ({ 
            ...prevOrganizationDetails, 
            jobTitle: selectedJobTitle
        }));
    }, [selectedJobTitle]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOrganizationDetailsData(prevOrganizationDetails => ({ ...prevOrganizationDetails, [name]: value }));
      };

    const handleOrganizationDetailsSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        sendDebugMsg("Submit Action Sent From Organization Details Child");

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            handleClientDataChange('organizationDetailsData', organizationDetailsData);
            handleNextStep();
        }
        setValidated(true);
    }

      const customSelectStyles = {
        control: (provided, state) => ({
            ...provided,
            padding: '.75rem',
            fontSize: '1.125rem',
            lineHeight: '1.75rem', 
          }),
      };

    return(
        <div className='flex'>
            <div className='h-min-screen bg-slate-50 basis-5/12'>
                
            </div>
            <div className='min-h-screen flex justify-center items-center basis-7/12'>
                <Form noValidate validated={validated} onSubmit={handleOrganizationDetailsSubmit} className=' w-1/2'>
                    <Col className="mb-3 flex-col gap-20">
                        {/* organization name */}
                        <Form.Group as={Col} controlId="OrganizationDetails1" className='mb-12'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Organization <span className="text-gray-300 font-light">/</span> Business Name
                            </Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="org" className=" bg-slate-50 border rounded-r-none rounded-l-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    onChange={handleChange}
                                    type="text"
                                    name="organization"
                                    pattern='[a-zA-Z0-9_ ]{3,}'
                                    placeholder="org"
                                    aria-describedby="org"
                                    className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300'
                                />
                                <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>A Simple Organization name must contain a minimum of 3 letters, special characters aren't allowed.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} controlId="OrganizationDetails2" className='mb-12'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Job Title
                            </Form.Label>
                            <Select
                                options={jobTitleOptions}
                                value={selectedJobTitle}
                                onChange={jobTitle => setSelectedJobTitle(jobTitle)}
                                styles={customSelectStyles}
                                placeholder="Search & Select..."
                                required
                            />
                        </Form.Group>
                    </Col>
                    <div className='flex items-center justify-end gap-4 mt-16'>
                        <button onClick={handlePreviousStep} className='flex items-center justify-between gap-2 p-3 text-md font-medium text-black bg-gray-50 border hover:bg-white rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            Previous
                        </button>
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

export default OrganizationDetails;