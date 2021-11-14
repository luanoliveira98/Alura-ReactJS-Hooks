import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function UserData({onSubmit}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit({email, password});
        }}>
            <TextField 
                id="email" label="Email" type="email"
                variant="outlined" margin="normal" fullWidth required
                value={email} onChange={event => {
                    setEmail(event.target.value);
                }}
            />
            <TextField 
                id="password" label="Password" type="password"
                variant="outlined" margin="normal" fullWidth required
                value={password} onChange={event => {
                    setPassword(event.target.value);
                }}
            />
            <Button type="submit" variant="contained" color="primary">Next</Button>
        </form>
    );
}

export default UserData;