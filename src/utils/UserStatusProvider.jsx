import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    isSignIn,
} from 'States/userSlice';
import {
  // cognitoUserInfo,
  userLoginCheck
} from 'States/cognitoSlice';

const UserStatusCheck = createContext({});

const UserStatusProvider = ({ children }) => {
  const dispatch = useDispatch();
  const userIsSignIn = useSelector(isSignIn)
  useEffect(()=>{
    !userIsSignIn && dispatch(userLoginCheck());
  },[userIsSignIn])
  // Check user status when page refresh.
  
  
  // console.log('UserStatusProvider-userIsSignIn--->', userIsSignIn)
    return (
        <UserStatusCheck.Provider >
            {children}
        </UserStatusCheck.Provider>
    );
};

export default UserStatusProvider;