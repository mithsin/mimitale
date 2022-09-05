import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { userData } from '../States/userSlice';

import { NewCardForm } from '../Components/Forms';
import { Card } from '../Components/Card';
import { UserSwipBlock } from 'Molecules';

import { DashboardBodyWrap, ListSection, ListWrap } from './styled';

const initialState = {
    CardId: '',
    giverNickName: '',
    nickName: '',
    receiverGender: '',
    points: 0,
    pendingTradePoints: 0,
    pendingRewardPoints: 0,
    historyList: [],
    contributors: [],
    tradePending: [],
    completePending: [],
    requestItem: [],
    shopItemList: [],
    questItemList: [],
    dailyQuestItemList: [],
    cardSetting: {}
};

const Dashboard = () => {
    const userDataState = useSelector(userData);
    const [openNewCardForm, setOpenNewCardForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const [showUser, setShowUser] = useState(initialState);
    useEffect(() => {
        userDataState?.givingList.length === 0 
            ? setOpenNewCardForm(true)
            : setOpenNewCardForm(false);
    },[userDataState?.givingList])

    useEffect(() => {
        setShowUser(
            (selectedUser && userDataState?.givingList?.length > 1 && userDataState?.givingList.find(card => card.CardId === selectedUser)) ||
            (userDataState?.givingList?.length > 0 && userDataState?.givingList[0]) ||
            (initialState)
        )
    },[userDataState?.givingList, selectedUser]);

    return(
    <DashboardBodyWrap>
        HOME PAGE
        { userDataState?.givingList?.length > 1 &&
            <UserSwipBlock
                givingList={userDataState?.givingList}
                setSelectedUser={setSelectedUser}
            />
        }
        <ListSection>
            <span>GIVING LIST</span>
            <ListWrap className='cardListCtn'>
                <Card cardData={showUser} userTypeGiver={true}/>
            </ListWrap>
        </ListSection>

        {openNewCardForm && <NewCardForm setOpenNewCardForm={setOpenNewCardForm} />}
    </DashboardBodyWrap>
)};

export default Dashboard;