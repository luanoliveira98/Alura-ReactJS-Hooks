import React, { useState, useContext } from 'react';
import RegisterValidations from '../../contexts/RegisterValidations';
import useErrors from '../../hooks/useErrors';

import { Button, TextField } from '@material-ui/core';

function UserData({ onSubmit }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validations = useContext(RegisterValidations);
    const [errors, validateFields, canSubmit] = useErrors(validations);

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