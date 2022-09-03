import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { InputStandard } from '../../Atoms';
import { FloatCard } from '../../Molecules';
import { userSignUp } from '../../States/cognitoSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    eMail: '',
    phoneNumber: '',
    password: ''
  });

  const onInputChange = (event) => {
    const idValue = event.target.id;
    const eventValue = event.target.value.trim();
    setInputValue({
      ...inputValue,
      [idValue]: (idValue === "password") ? eventValue : eventValue.toLowerCase(),
    }) 
  }

  const onSignUpClicked = () => {
    if(inputValue?.eMail && inputValue?.password){
      const inputConver = {
          eMail: inputValue?.eMail.toLowerCase(), 
          phoneNumber: inputValue?.phoneNumber ? `+1${inputValue.phoneNumber}` : '+10000000000',
          password: inputValue?.password};
      dispatch(userSignUp({...inputConver},navigate))
      // setTimeout(()=> navigate('/'),1500)
    }
  };

  return (
    <FloatCard title="Sign Up">
      <InputStandard 
        required
        id="eMail" 
        label="E-Mail" 
        variant="standard" 
        onChange={onInputChange}/>
      <InputStandard 
        id="phoneNumber" 
        label="Phone Number" 
        variant="standard" 
        onChange={onInputChange}/>
      <InputStandard
        required 
        id="password" 
        label="Password" 
        type="password" 
        variant="standard" 
        onChange={onInputChange}/>
      <Button 
        variant="contained" 
        color="success"
        onClick={onSignUpClicked}>
          SIGN UP
      </Button>
    </FloatCard>
  );
}


export default SignUp;