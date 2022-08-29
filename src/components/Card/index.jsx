import React from 'react';
import { CardOutterWrap } from './styled';
import { ProfileImageSection, StarsSection } from './CardSections';


export const Card = ({cardData}) => {

    return(
        <CardOutterWrap>
            <ProfileImageSection cardData={cardData}/>
            <StarsSection cardData={cardData}/>
        </CardOutterWrap>
    );
}

export default Card;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { 
//     faPlus,
//     faMinus,
//     faHome,
//     faFile,
//     faUniversity,
//     faUser,
//     faListAlt,
//     faStar
// } from '@fortawesome/free-solid-svg-icons';