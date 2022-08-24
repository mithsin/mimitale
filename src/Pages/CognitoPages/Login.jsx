import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { FloatCard } from 'molecules';
import { InputStandard, CardWrap } from 'atoms';
import { isObjFalsy } from 'utils/functions';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 8rem;
`;

const Login = () => {
  // const userSignIn = useSelector(isSignIn);
  // const dispatch = useDispatch();
  const [inputErrorMessage, setInputErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState({
    userName: '',
    password: ''
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

  const onLoginClicked = () => {
    // (inputValue.userName && inputValue.password) && dispatch(userLogin({...inputValue}));
    // (!inputValue.userName || !inputValue.password) 
    //     ? setInputErrorMessage('FILL IN MISSING INPUT FIELD') 
    //     : setInputErrorMessage('');
  };

  return(
    <FloatCard title="LOGIN">
      <InputStandard 
        id="userName" 
        label="user name" 
        variant="standard" 
        onChange={onInputChange}/>
      <InputStandard 
        id="password" 
        label="password" 
        type="password" 
        variant="standard" 
        onChange={onInputChange}/>
      <Button 
        variant="contained" 
        color="success"
        disabled={isDisabled}
        onClick={onLoginClicked}>
          SUBMIT
      </Button>
      <span>Dont have a account? <Link to="/signup"> click here</Link></span>
    </FloatCard>
  )
}

export default Login;
