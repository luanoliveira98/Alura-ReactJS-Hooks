function exactLength(data) {
    if(data.length !== 11) return {valid: false, helperText: "This field must have 11 digits!"};
    return {valid: true, helperText: ""};
}

function betweenLength(data) {
    if(data.length < 4 || data.length > 72) return {valid: false, helperText: "This field must have between 4 and 72 digits!"};
    return {valid: true, helperText: ""};
}

export { exactLength, betweenLength };