import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from 'States/cognitoSlice';

import { useSelector } from 'react-redux';
import { userData } from 'States/userSlice';

import { NewCardForm } from 'Components/Forms';
import { Card } from 'Components/Card';

import { DashboardBodyWrap, ListSection, ListWrap } from './styled';

const Dashboard = () => {
    const userDataState = useSelector(userData);
    const [openNewCardForm, setOpenNewCardForm] = useState(false)

    useEffect(() => {
        userDataState?.givingList.length === 0 
            ? setOpenNewCardForm(true)
            : setOpenNewCardForm(false);
    },[userDataState?.givingList])

    return(
    <DashboardBodyWrap>
        DASHBOARD PAGE
        <ListSection>
            <span>GIVING LIST</span>
            <ListWrap className='cardListCtn'>
                {   
                    userDataState?.givingList?.map((data, index) => 
                        <Card key={index} cardData={data} userTypeGiver={true}/>
                    )
                }
            </ListWrap>
        </ListSection>

        {openNewCardForm && <NewCardForm setOpenNewCardForm={setOpenNewCardForm} />}
    </DashboardBodyWrap>
)};

export default Dashboard;