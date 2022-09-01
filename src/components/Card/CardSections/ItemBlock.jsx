import React, { useState } from 'react';
// import './styles.scss';
import {
    ItemBlockWrapper, 
    BackgroundImage,
    IconAbsoulteTopRight,
    PointsBottomRight
} from './styled';

import {
    faCircleInfo
} from '@fortawesome/free-solid-svg-icons';

const ItemBlock = ({
    itemBlockData,
}) => {
    const {
        image,
        points,
        itemName,
        itemDescription,
        shopItemId
    } = itemBlockData;
    const [editOpen, setEditOpen] = useState(false);
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
            </ItemBlockWrapper>
        </>
    );
};

export default ItemBlock;