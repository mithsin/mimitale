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
            <StarsContainer color="yellow" type="reward" StarPoints={cardData.pendingRewardPoints}/>
            <StarsContainer color="red" type="traded" StarPoints={cardData.pendingTradePoints}/>
        </StarsSectionWrap>
    );
}

export default StarsSection;
