// import React, { useState } from 'react';
// const BasicInformation = (props) => {
//     const { onDataChange, parentData } = props;
//     const [basicInformation, setBasicInformation] = useState({
//         fullName:'',
//         emailAddress:'',
//         password:''
//     });
//     const handleChange = async (event) => {
//         const { name, value } = event.target;
//         setBasicInformation(prevBasicInformation => ({ ...prevBasicInformation, [name]: value }));
//         onDataChange('basicInformationData', basicInformation);
//         console.log("Multi Step Data: ", parentData);
//       };
// }
// export default BasicInformation;

// import React, { useState } from "react";
// import { BasicInformation } from './_GetStartedInterface/exports';
// const MultiStepRegistration = () => {
//     const [clientSignUpData, setClientSignUpData] = useState({
//         basicInformationData: {},
//     });

//     const handleClientDataChange = (step, data) => {
//         setClientSignUpData(prevState => ({...prevState, [step]: data}));
//     };

//     return (
//         <div>
//             <BasicInformation onDataChange={handleClientDataChange} parentData={clientSignUpData}/>
//         </div>
//     )
// }
// export default MultiStepRegistration;


//**************** */ handle Submit origin
// const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     // debug
//     sendDebugMsg(msg);
//     // end debug

//     if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//     }

//     try {
//         if (form.checkValidity() === true) {
//             handleClientDataChange('basicInformationData', basicInformation);
//             return await axios.post(API, basicInformation)
//                 .then(result => {
//                     console.log("Basic Information Sent: ", basicInformation);
//                     console.log("Response Data: ", result);
//                     result.status === 201 ? handleNextStep() : null;
//                 });
//         }
//     } catch(error) {
//         alert("An error occurred while submitting the form. Please try again.");
//         console.log("Axios Error:", error.response.data);
//     }

//     setValidated(true);
// };