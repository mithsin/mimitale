import React from 'react';
import { ProfileImage } from 'Molecules';
import SwipComponent from 'Components/Utils/SwipComponent';
import { 
    SwipWrapper,
    SlideItemWrap,
    SlideItemText
} from './styled';
export const UserSwipBlock = ({
    givingList,
    setSelectedUser
}) => {

    const WrapCont = ({slide}) => {
        const { CardId, nickName } = slide;

        return (
          <SlideItemWrap onClick={()=> setSelectedUser(CardId)}>
            <ProfileImage cardData={slide}/>
            <SlideItemText>{nickName}</SlideItemText>
          </SlideItemWrap>
        )
      };
    return(
        <SwipWrapper>
            <SwipComponent 
                slidesPerview="auto"
                WrapCont={WrapCont}
                slideList={givingList}/>
        </SwipWrapper>
    );
};

export default UserSwipBlock;