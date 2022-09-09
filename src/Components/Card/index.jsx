import React, { useState } from 'react';
import { CardOutterWrap } from './styled';
import { useFullCardData } from 'States/cardSlice';

import { useSelector } from 'react-redux';
import { ProfileImageSection, StarsSection, OptionsSwipe, SelectedSectionLayout } from './CardSections';
import { CardSetting } from './Utilities/CardSetting';

import { staticOptionList } from './Utilities/support';


export const Card = () => {
    const cardData = useSelector(useFullCardData);
    const [openCardSetting, setOpenCardSetting] = useState(false);
    const [selectedSection, setSelectedSection] = useState(staticOptionList[0]['dataListName']);
    const propsList = {
        selectedSection,
        setSelectedSection,
        cardData
    }
    
    return(
        <CardOutterWrap>
            {openCardSetting && 
                <CardSetting cardData={cardData} setOpenCardSetting={setOpenCardSetting}/>}
            <ProfileImageSection cardData={cardData}  setOpenCardSetting={setOpenCardSetting}/>
            <StarsSection cardData={cardData}/>
            <OptionsSwipe {...propsList} />
            <SelectedSectionLayout {...propsList}/>
        </CardOutterWrap>
    );
}

export default Card;
