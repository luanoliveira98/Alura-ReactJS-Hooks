import React, { Component } from 'react';
import './App.css';

import RegisterForm from './components/RegisterForm/RegisterForm';
import 'fontsource-roboto';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Register form</Typography>
        <RegisterForm onSubmit={onSubmit} validCPF={validCPF}/>
      </Container>
    );
  }
}

function onSubmit(data) {
  console.log(data);
}

function validCPF(cpf) {
  if(cpf.length !== 11) return {valid: false, helperText: "CPF must have 11 digits!"};
  return {valid: true, helperText: ""};
}

export default App;
