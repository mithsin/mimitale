import React from 'react';
import { useDispatch } from 'react-redux';
import { setCardSelected } from 'States/userSlice';
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
  const dispatch = useDispatch();

    const WrapCont = ({slide}) => {
        const { CardId, nickName } = slide;
        const onSlideClick = () => {
          dispatch(setCardSelected(CardId))
          setSelectedUser(CardId)
        }
        return (
          <SlideItemWrap onClick={onSlideClick}>
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