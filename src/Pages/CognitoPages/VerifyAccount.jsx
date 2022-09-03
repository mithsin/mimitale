import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { InputStandard } from '../../Atoms';
import { FloatCard } from '../../Molecules';
import { verificationAccount } from '../../States/cognitoSlice';
import { isObjFalsy } from '../../utils/functions';

const VerifyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    userName: '',
    vCode: '',
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
    if(inputValue?.userName && inputValue?.vCode){
        dispatch(verificationAccount( inputValue?.userName.toLowerCase(), inputValue?.vCode, navigate));
      }
  };

  return (
    <FloatCard title="Sign Up">
      <InputStandard 
        required
        id="userName" 
        label="e-mail" 
        variant="standard" 
        onChange={onInputChange}/>
      <InputStandard
        required 
        id="vCode" 
        label="Verfication Code" 
        type="password" 
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


export default VerifyAccount;