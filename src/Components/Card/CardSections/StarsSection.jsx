import React from 'react';
import { StarsContainer } from 'Atoms';
import { 
    StarsSectionWrap,
    NameBlock,
} from './styled';

export const StarsSection = ({cardData}) => {

    return (
        <StarsSectionWrap>
            <NameBlock>{cardData.nickName}</NameBlock>
            <StarsContainer color="green" type="available" StarPoints={cardData.points}/>
            <StarsContainer color="yellow" type="pending reward" StarPoints={cardData.pendingRewardPoints}/>
            <StarsContainer color="red" type="pending traded" StarPoints={cardData.pendingTradePoints}/>
        </StarsSectionWrap>
    );
}

export default StarsSection;
