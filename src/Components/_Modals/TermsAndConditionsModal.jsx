import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { termsAndConditions } from "../../Constants/toGetStartedData";

const TermsAndConditionsModal = (props) => {
    const [agreementContent, setAgreementContent] = useState(termsAndConditions)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            TaskifyZen - Terms & Conditions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 overflow-y-scroll max-h-[500px]">
        {agreementContent.map(term => {
            return (
                <div key={term.id}>
                    <p className="mt-4 mb-2 text-lg font-bold">{term.sectionName}</p>
                    <p>{term.description}</p>
                </div>
            );
        })}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="p-2 border bg-slate-50 rounded hover:bg-white">Close</button>
        </Modal.Footer>
      </Modal>
    )
}

export default TermsAndConditionsModal;