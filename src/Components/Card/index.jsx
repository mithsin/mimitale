import React, { useState } from 'react';
import { CardOutterWrap } from './styled';
import { useFullCardData } from 'States/cardSlice';

import { useSelector } from 'react-redux';
import { ProfileImageSection, StarsSection, OptionsSwipe, SelectedSectionLayout } from './CardSections';

import { staticOptionList } from './Utilities/support';


export const Card = () => {
    const cardData = useSelector(useFullCardData);

    const [selectedSection, setSelectedSection] = useState(staticOptionList[0]['dataListName']);

    const propsList = {
        selectedSection,
        setSelectedSection,
        cardData
    }
    
    return(
        <CardOutterWrap>
            <ProfileImageSection cardData={cardData}/>
            <StarsSection cardData={cardData}/>
            <OptionsSwipe {...propsList} />
            <SelectedSectionLayout {...propsList}/>
        </CardOutterWrap>
    );
}

export default Card;
