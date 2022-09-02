import React, { useState } from 'react';
// import './styles.scss';
import {
    ItemRowWrapper, 
    VerticalBackgroundImage,
    IconAbsoulteTopRight,
    PointsBottomRight,
    FrontRowInnerWrap,
    BackRowInnerWrap
} from './styled';

import {
    faRepeat
} from '@fortawesome/free-solid-svg-icons';

export const RowBlock = ({
    itemData,
    type,
}) => {
    const [isFlip, setIsFlip] = useState(false);
    const setUseItemData = 
        type === "tradePending" 
            ? itemData 
            : {
                ...itemData?.["tradeItem"],
                ...itemData?.["completeItem"],
                taskItemId: 
                    itemData?.["tradeItem"]?.["shopItemId"] || 
                    itemData?.["completeItem"]?.["questItemId"] || 
                    "null",
                itemObj: {
                    status: itemData["status"],
                    activeDate: itemData["tradeDate"] || itemData["completeDate"],
                    fullfilledDate: itemData["tradeDate"] || itemData["completeFulFillDate"],
                    itemId: itemData["tradeId"] || itemData["completeId"],
                }
            };

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
        // console.log('useItemData-->: ', useItemData)
        return (
            <FrontRowInnerWrap>
                <VerticalBackgroundImage image={image}>
                    <PointsBottomRight color={pointColor[taskItemId?.split('-')[0]] || "blue"}>{points}</PointsBottomRight>
                </VerticalBackgroundImage>
                <span className="textWrapper">
                    <div className="textTitle">{itemName}</div>
                    <div className="itemDescription">{itemDescription}</div>
                </span>
            </FrontRowInnerWrap>
        )
    };

    const BackSide = ({itemObj}) =>  {
        const {
            activeDate,
            fullfilledDate,
            itemId,
            status,
         } = itemObj;
        return (
            <BackRowInnerWrap>
                <div>activeDate: {activeDate}</div>
                <div>fullfilledDate: {fullfilledDate}</div>
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

// const convertedObj = {
//     status: itemData["status"],
//     activeDate: itemData["tradeDate" || "completeDate"],
//     fullfilledDate: itemData["tradeDate" || "completeFulFillDate"],
//     itemId: itemData["tradeId" || "completeId"],
//     itemObj: {
//         ...itemData["tradeItem" || "completeItem"],
//         taskItemId: itemData["tradeItem"]["shopItemId"] || itemData["completeItem"]["questItemId"]
//     }
// };