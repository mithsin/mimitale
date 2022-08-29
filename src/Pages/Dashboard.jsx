import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from 'States/cognitoSlice';

import { CognitoButton } from 'atoms';
import { NewCardForm } from 'Components/Forms';

import { DashboardBodyWrap } from './styled';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogoutClicked = () => {
        dispatch(userLogout({navigate}))
    }
    const setOpenNewCardForm = true;
    return(
    <DashboardBodyWrap>
        <CognitoButton 
            variant="contained" 
            color="error"
            onClick={onLogoutClicked}>
            LOGOUT
        </CognitoButton>
        Dashboard
        <NewCardForm setOpenNewCardForm={setOpenNewCardForm} />
    </DashboardBodyWrap>
)};

export default Dashboard;