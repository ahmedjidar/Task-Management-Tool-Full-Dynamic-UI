import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TermsAndConditionsModal from "../_Modals/TermsAndConditionsModal";

const SecurityAndAgreements = ({ handleClientDataChange, handleNextStep, handlePreviousStep, sendDebugMsg }) => {
    const [securityAndAgreementsData, setSecurityAndAgreementsData] = useState({
        securityAnswer:'',
        checkAgreement: false,
    })
    const [validated, setValidated] = useState(false);
    const [termsModalShow, setTermsModalShow] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setSecurityAndAgreementsData(prevSecurityAndAgreementsData => ({ ...prevSecurityAndAgreementsData, [name]: inputValue }));
    };

    const handleSecurityAndAgreementsSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        sendDebugMsg("Submit Action Sent From Security And Agreements Child");

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            handleClientDataChange('securityAndAgreementsData', securityAndAgreementsData);
            handleNextStep();
        }
        setValidated(true);
    }

    return(
        <div className='flex'>
            <div className='h-min-screen bg-slate-50 basis-5/12'>
                
            </div>
            <div className='min-h-screen flex justify-center items-center basis-7/12'>
                <Form noValidate validated={validated} onSubmit={handleSecurityAndAgreementsSubmit} className=' w-1/2'>
                    <Col className="mb-3 flex-col gap-20">
                        {/* organization name */}
                        <Form.Group as={Col} controlId="SecurityAndAgreements1" className='mb-12'>
                            <Form.Label className='text-md font-medium text-black'>
                                - What is the name of your favorite childhood teacher or mentor?
                            </Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="securQ" className=" bg-slate-50 border rounded-r-none rounded-l-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    onChange={handleChange}
                                    name="securityAnswer"
                                    type="text"
                                    pattern='[a-zA-Z ]{3,}'
                                    placeholder="Your answer"
                                    aria-describedby="securQ"
                                    className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300'
                                />
                                <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>Invalid mobile phone number!</Form.Control.Feedback>
                            </InputGroup>
                            <Form.Text id="securityQuestion" className="flex items-center gap-1 text-sm font-medium text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                Security Question
                            </Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} controlId="SecurityAndAgreements2">
                            <span 
                                className="flex items-center justify-center bg-violet-500 text-white hover:bg-violet-600 text-sm font-medium p-3 mb-4 rounded cursor-pointer"
                                onClick={() => setTermsModalShow(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                View Terms and Conditions
                            </span>

                            <Form.Check
                                required
                                onChange={handleChange}
                                type="checkbox"
                                name="checkAgreement"
                                label="Please read and agree to the Terms and Conditions in order to continue"
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
                            Done
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </Form>
            </div>
            <TermsAndConditionsModal
                show={termsModalShow}
                onHide={() => setTermsModalShow(false)}
            />
        </div>
    )
}

export default SecurityAndAgreements;
