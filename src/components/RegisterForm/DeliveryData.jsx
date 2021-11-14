import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DeliveryData({onSubmit}){
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    return(
        <form
            onSubmit={event => {
                event.preventDefault();
                onSubmit({cep, address, number, state, city});
            }}
        >
            <TextField 
                id="cep" label="CEP" type="number"
                variant="outlined" margin="normal"
                value={cep} onChange={event => {
                    setCep(event.target.value);
                }}
            />
            <TextField 
                id="address" label="Address" type="text"
                variant="outlined" margin="normal" fullWidth
                value={address} onChange={event => {
                    setAddress(event.target.value);
                }}
            />
            <TextField 
                id="number" label="Number" type="number"
                variant="outlined" margin="normal"
                value={number} onChange={event => {
                    setNumber(event.target.value);
                }}
            />
            <TextField 
                id="state" label="State" type="text"
                variant="outlined" margin="normal"
                value={state} onChange={event => {
                    setState(event.target.value);
                }}
            />
            <TextField 
                id="city" label="City" type="text"
                variant="outlined" margin="normal"
                value={city} onChange={event => {
                    setCity(event.target.value);
                }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
    );
}

export default DeliveryData;