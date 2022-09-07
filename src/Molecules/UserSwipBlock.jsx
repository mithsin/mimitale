import React from 'react';
import { useDispatch } from 'react-redux';
import { setCardSelected } from 'States/userSlice';
import { ProfileImage } from 'Molecules';
import { useDispatch } from 'react-redux';
import { updateCardId } from 'States/cardSlice';

import SwipComponent from 'Components/Utils/SwipComponent';
import { 
    SwipWrapper,
    SlideItemWrap,
    SlideItemText
} from './styled';

const WrapCont = ({slide}) => {  
  const dispatch = useDispatch();
  const { CardId, nickName } = slide;
  const onClickUser = () => {
    dispatch(updateCardId(CardId))
  };
  return (
    <SlideItemWrap onClick={onClickUser}>
      <ProfileImage cardData={slide}/>
      <SlideItemText>{nickName}</SlideItemText>
    </SlideItemWrap>
  )
};

export const UserSwipBlock = ({
    givingList
}) => {
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