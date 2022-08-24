import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from 'States/cognitoSlice';

import { CognitoButton } from 'atoms';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogoutClicked = () => {
        dispatch(userLogout({navigate}))
    }
    return(
    <div>
        <CognitoButton 
            variant="contained" 
            color="error"
            onClick={onLogoutClicked}>
            LOGOUT
        </CognitoButton>
        Dashboard
    </div>
)};

export default Dashboard;