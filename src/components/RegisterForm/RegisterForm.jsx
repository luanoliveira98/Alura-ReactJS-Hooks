import React, { Fragment, useState } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';

function RegisterForm({onSubmit, validCPF}) {
    const [currentStep, setCurrentStep] = useState(0);

    const forms = [
        <UserData onSubmit={nextStep}/>,
        <PersonalData onSubmit={nextStep} validCPF={validCPF}/>,
        <DeliveryData onSubmit={onSubmit}/>
    ]

    function nextStep() {
        setCurrentStep(currentStep+1);
    }

    return(
        <Fragment>
            {forms[currentStep]}
        </Fragment>
    );
}

export default RegisterForm;