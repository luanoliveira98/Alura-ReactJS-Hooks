import React, { useState } from 'react';
import {Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function PersonalData({onSubmit, validCPF}) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCPF] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const [errors, setErrors] = useState({
        cpf:{valid:true, helperText:""}
    });
    return(
        <form 
            onSubmit={event => {
                event.preventDefault();
                onSubmit()
            }}
        >
            <TextField 
                id="name" label="Name" variant="outlined" margin="normal" fullWidth 
                required value={name} onChange={event => {
                    setName(event.target.value);
                }}
            />
            <TextField 
                id="last_name" label="Last Name"  variant="outlined" margin="normal" fullWidth required value={lastName} onChange={event => {
                    setLastName(event.target.value);
                }}
            />
            <TextField 
                id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth 
                required value={cpf} onChange={event => {
                    setCPF(event.target.value);
                }} onBlur={() => {
                    setErrors({cpf: validCPF(cpf)});
                }}
                error={!errors.cpf.valid} helperText={errors.cpf.helperText}
            />

            <FormControlLabel 
                label="Promotions" 
                control={
                    <Switch 
                        name="promotions" color="primary" checked={promotions}
                        onChange={event => {
                            setPromotions(event.target.checked);
                        }}
                    />
                }
            />
            <FormControlLabel 
                label="Newsletter" 
                control={
                    <Switch 
                        name="newsletter" checked={newsletter} color="primary"
                        onChange={event => {
                            setNewsletter(event.target.checked);
                        }}
                    />
                }
            />

            <Button variant="contained" color="primary" type="submit">Next</Button>
        </form>
    );
}

export default PersonalData;