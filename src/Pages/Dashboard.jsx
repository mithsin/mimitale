import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { givingList } from 'States/userSlice';

import { NewCardForm } from 'Components/Forms';
import { Card } from 'Components/Card';
import { UserSwipBlock } from 'Molecules';

import { DashboardBodyWrap, ListSection, ListWrap } from './styled';

const Dashboard = () => {
    const userGivingList = useSelector(givingList);
    const [openNewCardForm, setOpenNewCardForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const [showUser, setShowUser] = useState({});
    useEffect(() => {
        userGivingList.length === 0 
            ? setOpenNewCardForm(true)
            : setOpenNewCardForm(false);
    },[userGivingList])

    useEffect(() => {
        setShowUser(
            (selectedUser && userGivingList?.length > 1 && userGivingList.find(card => card.CardId === selectedUser)) ||
            (userGivingList?.length > 0 && userGivingList[0]) ||
            ({})
        )
    },[userGivingList, selectedUser]);

    return(
    <DashboardBodyWrap>
        HOME PAGE
        { userGivingList?.length > 1 &&
            <UserSwipBlock
                givingList={userGivingList}
                setSelectedUser={setSelectedUser}
            />
        }
        <ListSection>
            <span>GIVING LIST</span>
            <ListWrap className='cardListCtn'>
                {!openNewCardForm && <Card cardData={showUser} userTypeGiver={true}/>}
            </ListWrap>
        </ListSection>

        {openNewCardForm && <NewCardForm setOpenNewCardForm={setOpenNewCardForm} />}
    </DashboardBodyWrap>
)};

export default Dashboard;