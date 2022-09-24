import React, { useEffect, useState, useCallback } from 'react';
import { showDisplayType } from 'utils/type';
import { 
    useFullCardData, 
    useShopItemList,
    useCompletePending,
    useQuestItemList,
    useDailyQuestItemList,
    useHistoryList,
    useRequestItem,
    useTradePending,
} from 'States/cardSlice';
import { useSelector } from 'react-redux';
import { 
    SectionVerticalGridWrap,
    SectionGridWrap,
} from './styled';
import { ItemBlock, AddNewItemBlock, RowBlock, PointsLayout } from 'Molecules';

export const ShowLayoutType = ({type, userTypeGiver}) => {
    const [selectList, setSelectList] = useState([])
    const cardData = useSelector(useFullCardData);

    const isShopItemList = useSelector(useShopItemList);
    const isCompletePending = useSelector(useCompletePending);
    const isQuestItemList = useSelector(useQuestItemList);
    const isDailyQuestItemList = useSelector(useDailyQuestItemList);
    const isHistoryList = useSelector(useHistoryList);
    const isRequestItem = useSelector(useRequestItem);
    const isTradePending = useSelector(useTradePending);

    const selectMemo = useCallback(()=>{
        setSelectList(cardData[type])
        // eslint-disable-next-line
    },[
        type, 
        cardData,
        isShopItemList,
        isCompletePending,
        isQuestItemList,
        isDailyQuestItemList,
        isHistoryList,
        isRequestItem,
        isTradePending
    ])

    useEffect(()=>{
        selectMemo()
        // eslint-disable-next-line
    },[
        type, 
        selectMemo,
        isShopItemList,
        isCompletePending,
        isQuestItemList,
        isDailyQuestItemList,
        isHistoryList,
        isRequestItem,
        isTradePending
    ]);

    const showType = showDisplayType(type)

    if(showType[type] === "tile"){
        return (
            <SectionGridWrap>
                {
                    (selectList?.length > 0)
                        ? (<>   
                            {selectList.map((item, index) => {
                                return(
                                    <ItemBlock 
                                        key={'itemblock-' + index}
                                        userTypeGiver={userTypeGiver}
                                        cardData={cardData}
                                        itemData={item} 
                                        type={type}/>
                                )
                            })}
                            <AddNewItemBlock 
                                cardData={cardData}
                                type={type}/>
                        </>
                            
                          )
                        : <p>{type}</p>
                }
            </SectionGridWrap>
        );
    }

    if(showType[type] === "row"){
        return(
            <SectionVerticalGridWrap>
                {
                    (selectList?.length > 0)
                        ? selectList.map((item, index) => {
                                return(
                                    <RowBlock
                                        key={'RowBlock-' + index}
                                        userTypeGiver={userTypeGiver}
                                        cardData={cardData}
                                        itemData={item} 
                                        type={type}/>
                                )
                            })
                        : <p>{type}</p>
                }
            </SectionVerticalGridWrap>
        );
    }

    if(showType[type] === "pointLayout"){
        return(
            <PointsLayout cardData={cardData} />
        );
    }
    return <p>{type}</p>;  
};

export default ShowLayoutType;
