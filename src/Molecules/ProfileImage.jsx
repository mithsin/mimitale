import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser, 
} from '@fortawesome/free-solid-svg-icons';

import {
    ImageWrapper, 
} from './styled';

export const ProfileImage = ({cardData}) => {
    const { profileImage, receiverGender, nickName } = cardData;
    const girlAnimateImg = "https://cdna.artstation.com/p/assets/images/images/001/690/356/medium/jay-choi-19.jpg?1450951074";
    const boyAnimateImg = "https://i.pinimg.com/736x/20/35/76/203576cfc2b68dc061360f47602ba06d.jpg";
    return (
        <ImageWrapper rounded={true} >
            {
                (profileImage && <img src={profileImage} alt={nickName} />) ||
                ((receiverGender === "F") && <img src={girlAnimateImg} alt="Girl-animate" />) ||
                ((receiverGender === "M") && <img src={boyAnimateImg} alt="Boy-animate" />) ||
                (<FontAwesomeIcon icon={faUser} size="6x" />)
            }
        </ImageWrapper>
    );
}

export default ProfileImage;
