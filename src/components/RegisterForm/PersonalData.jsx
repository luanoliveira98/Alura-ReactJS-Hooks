import React, { useState, useContext } from 'react';
import RegisterValidations from '../../contexts/RegisterValidations';

import {Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function PersonalData({ onSubmit }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCPF] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const [errors, setErrors] = useState({
        cpf:{valid:true, helperText:""},
        name:{valid:true, helperText:""},
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
        <form 
            onSubmit={event => {
                event.preventDefault();
                if(canSubmit()) onSubmit({name, lastName, cpf, promotions, newsletter})
            }}
        >
            <TextField 
                id="name" label="Name" variant="outlined" margin="normal" name="name"
                fullWidth required value={name} onChange={event => {
                    setName(event.target.value);
                }} onBlur={validateFields}
                error={!errors.name.valid} helperText={errors.name.helperText}
            />
            <TextField 
                id="lastName" label="Last Name"  variant="outlined" margin="normal" name="lastName" fullWidth required value={lastName} onChange={event => {
                    setLastName(event.target.value);
                }}
            />
            <TextField 
                id="cpf" label="CPF" variant="outlined" margin="normal" name="cpf"
                fullWidth required value={cpf} onChange={event => {
                    setCPF(event.target.value);
                }} onBlur={validateFields}
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