import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BasicButtons } from 'Atoms';
import { updateCardInfo } from 'States/userSlice';
import {
    ItemBlockWrapper, 
    BackgroundImage,
    IconAbsoulteTopRight,
    PointsBottomRight
} from './styled';
import {
    faRepeat
} from '@fortawesome/free-solid-svg-icons';

import { showTypeText } from "utils/type";
import { EditItemFrom } from "Components/Forms/EditItemFrom";

import {
    onCompleteClick,
    onTradeClick
} from './events';

export const ItemBlock = ({
    type,
    userTypeGiver,
    itemData,
    cardData,
}) => {
    const {
        image,
        points,
        itemName,
        itemDescription
    } = itemData;
    const dispatch = useDispatch();
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isFlip, setIsFlip] = useState(false);
    const clickProps = {
        type,
        cardData,
        itemData,
        dispatch,
        updateCardInfo
    }
    const onEditClick = () => {
        setIsModelOpen(true);
    }

    const onGetClick = () => {
        if(showTypeText[type] === "Buy"){
            onTradeClick(clickProps)
        }
        if(showTypeText[type] === "Done"){
            onCompleteClick(clickProps)
        }
    }

    const buttonAvailable = () =>( 
        ((showTypeText[type] === "Buy" && (cardData.points - itemData.points >= 0)) || showTypeText[type] !== "Buy") 
            ? false
            : true
    )
    const onFlipClick = () => setIsFlip(!isFlip);

    const FrontSide = () => (
        <ItemBlockWrapper>
            <BackgroundImage image={image}>

                <IconAbsoulteTopRight top=".25rem" right=".25rem" icon={faRepeat} onClick={onFlipClick}/>
        
                <PointsBottomRight color="green">{points}</PointsBottomRight>
            </BackgroundImage>
            <div className="textWrapper">
                <span className="textTitle">{itemName}</span>
            </div>
            {userTypeGiver 
                ? <BasicButtons 
                    label="EDIT"
                    onClick={onEditClick}
                />
                : <BasicButtons 
                    disabled={buttonAvailable()}
                    label={showTypeText[type]}
                    onClick={onGetClick}
                />
            }
            {isModelOpen && 
                <EditItemFrom 
                    setIsModelOpen={setIsModelOpen}
                    type={type}
                    itemData={itemData}
                    cardData={cardData}
                />
            }
        </ItemBlockWrapper>
    );

    const BackSide = () =>  (
        <ItemBlockWrapper>
            <IconAbsoulteTopRight top=".25rem" right=".25rem" icon={faRepeat} onClick={onFlipClick}/>
                
            <div className="textWrapper">
                <span className="textTitle">{itemDescription}</span>
            </div>
        </ItemBlockWrapper>
    )

    return (
        <>
            { isFlip
                ? <BackSide />
                : <FrontSide />
            }
        </>
    );
};

export default ItemBlock;