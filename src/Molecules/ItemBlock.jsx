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
import Tooltip from '@mui/material/Tooltip';
import {
    faCircleInfo
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
        itemName,
        itemDescription
    } = itemData;
    const dispatch = useDispatch();
    const [isModelOpen, setIsModelOpen] = useState(false)
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

    return (
        <>
            <ItemBlockWrapper>
                <BackgroundImage image={image}>
                    <Tooltip title={itemDescription}>
                        <IconAbsoulteTopRight icon={faCircleInfo}/>
                    </Tooltip>
                    <PointsBottomRight color="green">50</PointsBottomRight>
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
        </>
    );
};

export default ItemBlock;