import React, { useState } from 'react';
import { BasicButtons } from 'Atoms';
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

import { EditItemFrom } from "Components/Forms/EditItemFrom";

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
    const [isModelOpen, setIsModelOpen] = useState(false)
    const onEditClick = () => {
        setIsModelOpen(true);
    }
    const onGetClick = () => {
        console.log('get click: ', type)
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
                        label="GET"
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