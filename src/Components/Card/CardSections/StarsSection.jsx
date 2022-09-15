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
            <StarsContainer type="available" StarPoints={cardData.points}/>
            <StarsContainer type="reward" StarPoints={cardData.pendingRewardPoints}/>
            <StarsContainer type="traded" StarPoints={cardData.pendingTradePoints}/>
        </StarsSectionWrap>
    );
}

export default StarsSection;
