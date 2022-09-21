import React, { useState } from 'react';
import { CardOutterWrap } from './styled';
import { useFullCardData } from 'States/cardSlice';

import { useSelector } from 'react-redux';
import { ProfileImageSection, StarsSection, OptionsSwipe, SelectedSectionLayout } from './CardSections';
import { CardSetting } from './Utilities/CardSetting';

import { staticOptionList } from './Utilities/support';


export const Card = ({userTypeGiver=true}) => {
    const cardData = useSelector(useFullCardData);
    const [openCardSetting, setOpenCardSetting] = useState(false);
    const [selectedSection, setSelectedSection] = useState(staticOptionList[0]['dataListName']);
    const propsList = {
        selectedSection,
        setSelectedSection,
        cardData,
        userTypeGiver
    }

    return(
        <CardOutterWrap>
            {openCardSetting && 
                <CardSetting cardData={cardData} setOpenCardSetting={setOpenCardSetting}/>}
            <ProfileImageSection cardData={cardData} setOpenCardSetting={setOpenCardSetting} userTypeGiver={userTypeGiver} />
            <StarsSection cardData={cardData}/>
            <OptionsSwipe {...propsList} />
            <SelectedSectionLayout {...propsList}/>
        </CardOutterWrap>
    );
}

export default Card;
