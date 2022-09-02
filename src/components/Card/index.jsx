import React, { useState, useEffect } from 'react';
import { CardOutterWrap } from './styled';
import { ProfileImageSection, StarsSection, OptionsSwipe, SelectedSectionLayout } from './CardSections';

import { staticOptionList } from './Utilities/support';


export const Card = ({cardData}) => {
    console.log('Card-cardData-->: ', cardData)
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
