import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BasicButtons } from 'Atoms';
import { updateCardInfo } from 'States/userSlice';
import {
    onClickAcceptTrade,
    onClickAcceptCompleteQuest,
    onClickRejectTrade,
    onClickRejectComplete
} from './events';

import {
    ItemRowWrapper, 
    VerticalBackgroundImage,
    IconAbsoulteTopRight,
    PointsBottomRight,
    FrontRowInnerWrap,
    BackRowInnerWrap,
    RowTextBlock,
    RowTextWrap,
    ButtonWrap
} from './styled';

import {
    faRepeat
} from '@fortawesome/free-solid-svg-icons';

export const RowBlock = ({
    cardData,
    userTypeGiver,
    itemData,
    type,
}) => {
    const dispatch = useDispatch();
    
    const [isFlip, setIsFlip] = useState(false);
    const setUseItemData = {
                ...itemData?.["tradeItem"],
                ...itemData?.["completeItem"],
                taskItemId: 
                    itemData?.["tradeItem"]?.["shopItemId"] || 
                    itemData?.["completeItem"]?.["questItemId"] || 
                    "null",
                itemObj: {
                    type: itemData["type"],
                    status: itemData["status"],
                    activeDate: itemData["tradeDate"] || itemData["completeDate"],
                    fulFilledDate: itemData["fulFilledDate"],
                    itemId: itemData["tradeId"] || itemData["completeId"],
                }
            };

    const clickProps = {
        type,
        cardData,
        itemData,
        dispatch,
        updateCardInfo
    }

    const onAcceptClick = () => {
        if(type === "completePending") onClickAcceptCompleteQuest(clickProps);
        if(type === "tradePending") onClickAcceptTrade(clickProps);
    }

    const onRejectClick = () => {
        if(type === "completePending") onClickRejectComplete(clickProps);
        if(type === "tradePending") onClickRejectTrade(clickProps);
    }

    const onCancelClick = () => {
        console.log('cancel clicked')
    }

    const FrontSide = ({useItemData}) => {
        const {
            image,
            itemDescription,
            itemName,
            points,
            taskItemId,
        } = useItemData
        
        const pointColor = {
            "shop": "#16bbbb",
            "quest": "#4c0303d1",
            "questItem": "#4c0303d1",
        }

        return (
            <FrontRowInnerWrap>
                <VerticalBackgroundImage image={image}>
                    <PointsBottomRight color={pointColor[taskItemId?.split('-')[0]] || "blue"}>{points}</PointsBottomRight>
                </VerticalBackgroundImage>
                <RowTextBlock>
                    <RowTextWrap className="textWrapper">
                        <div className="textTitle">{itemName}</div>
                        <div className="itemDescription">{itemDescription}</div>
                    </RowTextWrap>
                    {itemData["status"] === "pending" && 
                        (userTypeGiver 
                            ? (<ButtonWrap>
                                    <BasicButtons onClick={onRejectClick} color="error" label="Reject" />
                                    <BasicButtons onClick={onAcceptClick} label="Accept" />
                                </ButtonWrap>)
                            : <BasicButtons 
                                label="Cancel"
                                onClick={onCancelClick} />
                    )}
                </RowTextBlock>
            </FrontRowInnerWrap>
        )
    };

    const BackSide = ({itemObj}) =>  {
        const { 
            activeDate,
            fulFilledDate,
            status,
         } = itemObj;
        return (
            <BackRowInnerWrap>
                <div>activeDate: {activeDate}</div>
                <div>fulFilledDate: {fulFilledDate}</div>
                <div>status: {status}</div>
            </BackRowInnerWrap>
        )
    };

    const onFlipClick = () => setIsFlip(!isFlip);
    return (
        <ItemRowWrapper>
            {   setUseItemData?.itemObj && 
                    <IconAbsoulteTopRight top="1rem" right="1rem" icon={faRepeat} onClick={onFlipClick}/>
            }
            { isFlip
                ? <BackSide itemObj={setUseItemData?.itemObj}/>
                : <FrontSide useItemData={setUseItemData}/>
            }
        </ItemRowWrapper>
    );
};

export default RowBlock;
