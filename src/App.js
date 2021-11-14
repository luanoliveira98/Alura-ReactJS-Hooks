import React, { Component } from 'react';
import './App.css';
import RegisterValidations from './contexts/RegisterValidations';
import {exactLength, betweenLength} from './models/register'

import RegisterForm from './components/RegisterForm/RegisterForm';
import 'fontsource-roboto';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Register form</Typography>
        <RegisterValidations.Provider 
          value={{cpf: exactLength, password: betweenLength, name: betweenLength}}>
          <RegisterForm onSubmit={onSubmit}/>
        </RegisterValidations.Provider>
      </Container>
    );
  }
}

function onSubmit(data) {
  console.log(data);
}

export default App;
