import React, { useState, useContext } from 'react';
import RegisterValidations from '../../contexts/RegisterValidations';

import { Button, TextField } from '@material-ui/core';

function UserData({ onSubmit }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        password:{valid:true, helperText:""},
    });

    const validations = useContext(RegisterValidations);
    function validateFields(event) {
        const {name, value} = event.target;
        const newState = {...errors};
        newState[name] = validations[name](value);
        setErrors(newState);
    }

    function canSubmit() {
        for(let field in errors) {
            if(!errors[field].valid) return false;
        }
        return true;
    }
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(canSubmit()) onSubmit({email, password});
        }}>
            <TextField 
                id="email" label="Email" type="email" name="email"
                variant="outlined" margin="normal" fullWidth required
                value={email} onChange={event => {
                    setEmail(event.target.value);
                }}
            />
            <TextField 
                id="password" label="Password" type="password" name="password"
                variant="outlined" margin="normal" fullWidth required
                value={password} onChange={event => {
                    setPassword(event.target.value);
                }} onBlur={validateFields}
                error={!errors.password.valid} helperText={errors.password.helperText}
            />
            <Button type="submit" variant="contained" color="primary">Next</Button>
        </form>
    );
}

export default UserData;