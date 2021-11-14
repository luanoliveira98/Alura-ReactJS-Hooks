import React, { Fragment, useEffect, useState } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';
import { Stepper, Typography, Step, StepLabel } from '@material-ui/core';

function RegisterForm({onSubmit, validCPF}) {
    const [currentStep, setCurrentStep] = useState(0);
    const [dataCollected, setData] = useState({});
    useEffect(() => {
        if(currentStep === forms.length-1) onSubmit(dataCollected);
    });

    const forms = [
        <UserData onSubmit={collectData}/>,
        <PersonalData onSubmit={collectData} validCPF={validCPF}/>,
        <DeliveryData onSubmit={collectData}/>,
        <Typography variant="h5" align="center">Thank you for registering!</Typography>
    ];

    function collectData(data) {
        setData({...dataCollected, ...data});
        nextStep();
    }

    function nextStep() {
        setCurrentStep(currentStep+1);
    }

    return(
        <Fragment>
            <Stepper activeStep={currentStep}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal</StepLabel></Step>
                <Step><StepLabel>Delivery</StepLabel></Step>
                <Step><StepLabel>Finish</StepLabel></Step>
            </Stepper>
            {forms[currentStep]}
        </Fragment>
    );
}

export default RegisterForm;