import React from 'react';
import { CardOutterWrap } from './styled';
import { ProfileImageSection, StarsSection, OptionsSwipe, SelectedSectionLayout } from './CardSections';

export const Card = ({cardData}) => {

    return(
        <CardOutterWrap>
            <ProfileImageSection cardData={cardData}/>
            <StarsSection cardData={cardData}/>
            <OptionsSwipe />
            <SelectedSectionLayout />
        </CardOutterWrap>
    );
}

export default Card;
