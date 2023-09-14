import React, {useState, useEffect} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Select from 'react-select';
import { notificationFrequencies, languages } from "../../Constants/toGetStartedData";

const PreferencesAndNotifications = ({ handleClientDataChange, handleNextStep, handlePreviousStep, sendDebugMsg }) => {
    const [preferencesAndNotificationsData, setPreferencesAndNotificationsData] = useState({
        phoneNumber:'',
        preferredLanguage: null,
        notificationFrequency: null,
    })
    const [validated, setValidated] = useState(false);
    const [selectedNotificationFrequency, setSelectedNotificationFrequency] = useState(null);
    const [selectedLanguagePreference, setSelectedLanguagePreference] = useState(null);

    useEffect(() => {
        setPreferencesAndNotificationsData(prevPreferencesAndNotificationsData => ({ 
            ...prevPreferencesAndNotificationsData, 
            preferredLanguage: selectedLanguagePreference,
            notificationFrequency: selectedNotificationFrequency,
        }));
    }, [selectedLanguagePreference, selectedNotificationFrequency]);

    const handleNotificationFrequencyChange = (selectedOption) => {
        setSelectedNotificationFrequency(selectedOption);
    }
    const handleLanguagePreferenceChange = (selectedOption) => {
        setSelectedLanguagePreference(selectedOption);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPreferencesAndNotificationsData(prevPreferencesAndNotificationsData => ({ ...prevPreferencesAndNotificationsData, [name]: value }));
      };

    const handlePreferencesAndNotificationsSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        sendDebugMsg("Submit Action Sent From Preferences And Notification Child");

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            handleClientDataChange('preferencesAndNotificationsData', preferencesAndNotificationsData);
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
                <Form noValidate validated={validated} onSubmit={handlePreferencesAndNotificationsSubmit} className=' w-1/2'>
                    <Col className="mb-3 flex-col gap-20">
                        {/* organization name */}
                        <Form.Group as={Col} controlId="NotificationAndPreference1" className='mb-12'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Mobile Phone Number
                            </Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="mnum" className=" bg-slate-50 border rounded-r-none rounded-l-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </InputGroup.Text>
                                <Form.Control
                                    required
                                    onChange={handleChange}
                                    name="phoneNumber"
                                    type="text"
                                    pattern='^(\+|00)[1-9][0-9 \-\(\)\.]{7,32}$'
                                    placeholder="XXX-XXX-XXXX"
                                    aria-describedby="mnum"
                                    className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300'
                                />
                                <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>The provided phone number is not valid!</Form.Control.Feedback>
                            </InputGroup>
                            <Form.Text id="fileFormat" className="flex items-center gap-1 text-sm font-normal text-white mt-3 py-1 px-2 bg-violet-400 rounded border w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                +/00 XXX-XXX-XXXX
                            </Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} controlId="NotificationAndPreference2" className='mb-12'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Preferred Language
                            </Form.Label>
                            <Select
                                options={languages}
                                value={selectedLanguagePreference}
                                onChange={handleLanguagePreferenceChange}
                                styles={customSelectStyles}
                                placeholder="Select your language"
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="NotificationAndPreference3" className='mb-12'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Notification Frequency
                            </Form.Label>
                            <Select
                                options={notificationFrequencies}
                                value={selectedNotificationFrequency}
                                onChange={handleNotificationFrequencyChange}
                                styles={customSelectStyles}
                                placeholder="Select a frequency"
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

export default PreferencesAndNotifications;
