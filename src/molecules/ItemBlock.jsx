import React, { useState } from 'react';
import { BasicButtons } from 'Atoms';
import { v4 as uuidv4 } from 'uuid';
import {
    ItemBlockWrapper, 
    BackgroundImage,
    IconAbsoulteTopRight,
    PointsBottomRight
} from './styled';

import {
    faCircleInfo
} from '@fortawesome/free-solid-svg-icons';

import { EditItemFrom } from "Components/Forms/EditItemFrom";

export const ItemBlock = ({
    type,
    itemData,
    cardData,
}) => {
    const {
        image,
        points,
        itemName,
        itemDescription,
    } = itemData;
    const [isModelOpen, setIsModelOpen] = useState(false)
    const onEditClick = () => {
        console.log('open model');
        setIsModelOpen(true);
    }

    return (
        <>
            <ItemBlockWrapper>
                <BackgroundImage image={image}>
                    <IconAbsoulteTopRight icon={faCircleInfo}/>
                    <PointsBottomRight color="green">50</PointsBottomRight>
                </BackgroundImage>
                <div className="textWrapper">
                    <span className="textTitle">{itemName}</span>
                </div>
                <BasicButtons 
                    label="EDIT"
                    onClick={onEditClick}
                />
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