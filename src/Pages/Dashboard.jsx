import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { givingList } from 'States/userSlice';
import { NewCardForm } from 'Components/Forms';
import { Card } from 'Components/Card';
import { UserSwipBlock } from 'Molecules';

import { DashboardBodyWrap, ListSection, ListWrap } from './styled';

const Dashboard = () => {

    const givingListState = useSelector(givingList);
    const [openNewCardForm, setOpenNewCardForm] = useState(false);
    useEffect(() => {
        givingListState.length === 0 
            ? setOpenNewCardForm(true)
            : setOpenNewCardForm(false);
    },[givingListState])

    return(
    <DashboardBodyWrap>
        HOME PAGE
        { givingListState?.length > 1 &&
            <UserSwipBlock
                givingList={givingListState}
            />
        }
        <ListSection>
            <span>GIVING LIST</span>
            <ListWrap className='cardListCtn'>
                {!openNewCardForm && <Card userTypeGiver={true}/>}
            </ListWrap>
        </ListSection>

        {openNewCardForm && <NewCardForm setOpenNewCardForm={setOpenNewCardForm} />}
    </DashboardBodyWrap>
)};

export default Dashboard;