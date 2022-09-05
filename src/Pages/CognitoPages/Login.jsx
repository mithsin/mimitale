import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isSignIn } from '../../States/userSlice';
import { userLogin, userLogout } from '../../States/cognitoSlice';

import { FloatCard } from '../../Molecules';
import { InputStandard, CognitoButton } from '../../Atoms';
import { isObjFalsy } from '../../utils/functions';

const Login = () => {
  const userSignIn = useSelector(isSignIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      [idValue]: (idValue === "password") ? eventValue : eventValue.toLowerCase(),
    }) 
  }

  const onLoginClicked = () => {
    (inputValue.userName && inputValue.password) && dispatch(userLogin({...inputValue, navigate}));
 
  };

  const onLogoutClicked = () => {
    dispatch(userLogout({navigate}))
  };

  return(
    <FloatCard title="LOGIN">
      <InputStandard 
        id="userName" 
        label="E-Mail" 
        variant="standard" 
        onChange={onInputChange}/>
      <InputStandard 
        id="password" 
        label="Password" 
        type="password" 
        variant="standard" 
        onChange={onInputChange}/>
      <CognitoButton 
        variant="contained" 
        color="success"
        disabled={isDisabled}
        onClick={onLoginClicked}>
          SUBMIT
      </CognitoButton>
      {userSignIn && <CognitoButton 
        variant="contained" 
        color="error"
        onClick={onLogoutClicked}>
          LOGOUT
      </CognitoButton>}
      <span>Dont have a account? <Link to="/signup"> click here</Link></span>
    </FloatCard>
  )
}

export default Login;
