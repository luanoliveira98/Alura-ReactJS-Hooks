import React, { Fragment } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';

function RegisterForm({onSubmit, validCPF}) {
    return(
        <Fragment>
            <PersonalData onSubmit={onSubmit} validCPF={validCPF}/>
            <UserData/>
            <DeliveryData/>
        </Fragment>
    );
}

export default RegisterForm;