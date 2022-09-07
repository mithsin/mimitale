import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { userData } from 'States/userSlice';
import { NewCardForm } from 'Components/Forms';
import { Card } from 'Components/Card';
import { UserSwipBlock } from 'Molecules';

import { DashboardBodyWrap, ListSection, ListWrap } from './styled';

const Dashboard = () => {

    const userDataState = useSelector(userData);
    const [openNewCardForm, setOpenNewCardForm] = useState(false);
    useEffect(() => {
        userDataState?.givingList.length === 0 
            ? setOpenNewCardForm(true)
            : setOpenNewCardForm(false);
    },[userDataState?.givingList])

    return(
    <DashboardBodyWrap>
        HOME PAGE
        { userDataState?.givingList?.length > 1 &&
            <UserSwipBlock
                givingList={userDataState?.givingList}
            />
        }
        <ListSection>
            <span>GIVING LIST</span>
            <ListWrap className='cardListCtn'>
                {!openNewCardForm && <Card/>}
            </ListWrap>
        </ListSection>

        {openNewCardForm && <NewCardForm setOpenNewCardForm={setOpenNewCardForm} />}
    </DashboardBodyWrap>
)};

export default Dashboard;