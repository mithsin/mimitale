// eslint-disable-line react-hooks/exhaustive-deps
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { 
    usePendingRewardPoints,
    usePendingTradePoints,
    usePoints,
    useShopItemList,
    useCompletePending,
    useQuestItemList,
    useDailyQuestItemList,
    useHistoryList,
    useRequestItem,
    useTradePending } from 'States/cardSlice';
import { 
    SelectedSectionWrapper,
    UpperH3,
    SectionBodyWrap
} from './styled';
import { ShowLayoutType } from '../Utilities/ShowLayoutType';

export const SelectedSectionLayout = (props) => {
    const getQuestList = useSelector(useQuestItemList);
    const getPendingRewardPoints = useSelector(usePendingRewardPoints);
    const getPendingTradePoints = useSelector(usePendingTradePoints);
    const getPoints = useSelector(usePoints);
    const getShopItemList = useSelector(useShopItemList);
    const getCompletePending = useSelector(useCompletePending);
    const getQuestItemList = useSelector(useQuestItemList);
    const getDailyQuestItemList = useSelector(useDailyQuestItemList);
    const getHistoryList = useSelector(useHistoryList);
    const getRequestItem = useSelector(useRequestItem);
    const getTradePending = useSelector(useTradePending);
    
    const [selectList, setSelectList] = useState([])
    const {
        selectedSection,
        cardData
    } = props;
    useEffect(()=>{
        setSelectList(cardData[selectedSection])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[
        selectedSection, 
        getQuestList,
        getPendingRewardPoints,
        getPendingTradePoints,
        getPoints,
        getShopItemList,
        getCompletePending,
        getQuestItemList,
        getDailyQuestItemList,
        getHistoryList,
        getRequestItem,
        getTradePending
    ]);
    
    const showTitle = {
        'shopItemList': "Shop Item",
        'questItemList': "Quest Item",
        'dailyQuestItemList': "Daily Quest Item",
        'historyList': "History",
        'tradePending': "Pending trade",
        'completePending': "Pending Complete",
        'requestItem': "Request Item",
        'points': "Points",
    }

    return (
        <SelectedSectionWrapper>
            <UpperH3>{showTitle[selectedSection]}</UpperH3>
            <SectionBodyWrap>
                <ShowLayoutType 
                    type={selectedSection}
                    list={selectList}
                    cardData={cardData}
                />
            </SectionBodyWrap>
        </SelectedSectionWrapper>
    );
}

export default SelectedSectionLayout;
