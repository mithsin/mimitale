import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import { InputStandard } from '../../Atoms';
import { FloatCard } from '../../Molecules';
import { resendSMSVerifyCode } from 'States/cognitoSlice';
import { isObjFalsy } from '../../utils/functions';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(()=>{
    setIsDisabled(isObjFalsy(inputValue))
  },[inputValue])

  const onInputChange = (event) => {
    const idValue = event.target.id;
    const eventValue = event.target.value.trim();
    setInputValue({
      ...inputValue,
      [idValue]: eventValue,
    }) 
  }

  const onVerifyClicked = () => {
    if(inputValue?.email){
      dispatch(resendSMSVerifyCode(inputValue?.email))
    }
  };

  return (
    <FloatCard title="Sign Up">
      <InputStandard 
        required
        id="email" 
        label="e-mail" 
        variant="standard" 
        onChange={onInputChange}/>
      <Button 
        variant="contained" 
        color="success"
        disabled={isDisabled}
        onClick={onVerifyClicked}>
          SUBMIT
      </Button>
    </FloatCard>
  );
}


export default ForgotPassword;