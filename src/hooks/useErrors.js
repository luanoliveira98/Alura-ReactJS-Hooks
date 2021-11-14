import React, { useState } from 'react';

function useErrors(validations) {
    const [errors, setErrors] = useState(createInitialState(validations));

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

    return [errors, validateFields, canSubmit];
}

function createInitialState(validations) {
    const initialState = {};
    for(let field in validations) {
        initialState[field] = { valid: true, helperText: "" }
    }

    return initialState;
}

export default useErrors;