import React, {useState, useEffect} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Select from 'react-select';
import { timeZones } from "../../Constants/toGetStartedData";

const ProfileSetup = ({ handleClientDataChange, handleNextStep, handlePreviousStep, sendDebugMsg }) => {
    const [validated, setValidated] = useState(false);
    const [selectedTimeZone ,setSelectedTimeZone] = useState(null)
    const [profileSetupData, setProfileSetupData] = useState({
        username:'',
        pfp: null,
        timezone: null,
    });
    const maxFileSize = 2 * 1024 * 1024;
    const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg']

    useEffect(() => {
        setProfileSetupData(prevProfileSetup => ({ 
            ...prevProfileSetup, 
            timezone: selectedTimeZone 
        }));
    }, [selectedTimeZone]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileSetupData(prevProfileSetup => ({ ...prevProfileSetup, [name]: value }));
      };

    const handleProfileSetupDataSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        sendDebugMsg("Submit Action Sent From Profile Setup Child");

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            handleClientDataChange('profileSetupData', profileSetupData);
            handleNextStep();
        }
        setValidated(true);
    }

    const validateProfilePicture = (event) => {
        const file = event.target.files[0];
        if (file) {
            // file type validation
            if (!allowedFileTypes.includes(file.type)) {
                alert("Invalid profile picture format! A file must be a png,jpg,jpeg or an svg.")
                event.target.value = '';
                return;
            }
            // file size validaton
            if (maxFileSize < file.size) {
                alert("File size exceeded the limit of 2MB!")
                event.target.value = '';
                return;
            }
            // file dimensions
            const img = new Image();
            img.onload = () => {
                if(img.width < 200 || img.height < 200){
                    alert("Image dimensions must be at least 200px x 200px!")
                    event.target.value = '';
                    return;
                }
            };
            img.src = URL.createObjectURL(file);
            handleChange(event);
        }
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
                <Form noValidate validated={validated} onSubmit={handleProfileSetupDataSubmit} className=' w-1/2'>
                    <Col className="mb-3 flex-col gap-20">
                        {/* username */}
                        <Form.Group as={Col} controlId="ProfileSetup1" className='mb-12'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Username
                            </Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend" className=" bg-slate-50 border rounded-r-none rounded-l-lg">@</InputGroup.Text>
                                <Form.Control
                                    required
                                    onChange={handleChange}
                                    type="text"
                                    name="username"
                                    pattern='[a-zA-Z0-9_]{3,}'
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    className='py-7 px-4 text-lg font-normal placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 bg-slate-50 focus:bg-white border border-slate-300'
                                />
                                <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>Username must contain a minimum of 3 letters, special characters & spacings aren't allowed</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        {/* pfp */}
                        <Form.Group as={Col} controlId="ProfileSetup2" className='mb-12'>
                            <Form.Label className='text-lg font-medium text-black'>
                                Profile Picture
                            </Form.Label>
                            <Form.Control
                                required
                                onChange={validateProfilePicture}
                                type="file"
                                name="pfp"
                                accept=".png, .jpg, .jpeg, .svg"
                                className="bg-inherit border-none focus:outline-none focus:ring-0
                                file:mr-4 file:px-4 file:cursor-pointer
                                file:rounded-full file:border-0
                                file:text-lg file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"
                            />
                            <Form.Control.Feedback type='valid'>Valid!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please import a file for you profile picture!</Form.Control.Feedback>
                            <Form.Text id="fileFormat" className="flex items-center gap-1 text-sm font-normal text-white mt-3 py-1 px-2 bg-violet-400 rounded border w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                Supported formats: png, jpg, jpeg, svg
                            </Form.Text>
                        </Form.Group>
                        {/* current time */}
                        <Form.Group as={Col} controlId="ProfileSetup3">
                            <Form.Label className='text-lg font-medium text-black'>
                                Time Zone
                            </Form.Label>
                            <Select 
                                options={timeZones} 
                                value={selectedTimeZone}
                                onChange={option => setSelectedTimeZone(option)}
                                styles={customSelectStyles}
                                placeholder="Select your timezone"
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

export default ProfileSetup;