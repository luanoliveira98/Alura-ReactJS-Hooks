import { Button, TextField } from '@material-ui/core';
import React from 'react';

function UserData({onSubmit}){
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
        }}>
            <TextField 
                id="email" label="Email" type="email"
                variant="outlined" margin="normal" fullWidth required
            />
            <TextField 
                id="password" label="Password" type="password"
                variant="outlined" margin="normal" fullWidth required
            />
            <Button type="submit" variant="contained" color="primary">Next</Button>
        </form>
    );
}

export default UserData;