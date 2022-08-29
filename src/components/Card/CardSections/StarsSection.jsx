import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { 
    StarsSectionWrap,
    NameBlock,
    StarsBlock,
    FontAwesomeIconAvailable,
    FontAwesomeIconReward,
    FontAwesomeIconTraded,
    StarPointsWrap,
    StarPointsType,
} from './styled';

const StarsContainer = ({type, size="2x", StarPoints}) => (
    <StarsBlock>
        { type === 'available' && <FontAwesomeIconAvailable icon={faStar} size={size}/>}
        { type === 'reward' && <FontAwesomeIconReward icon={faStar} size={size}/>}
        { type === 'traded' && <FontAwesomeIconTraded icon={faStar} size={size}/>}
        {type && <StarPointsType className="starLabel">{type}</StarPointsType>}
        <StarPointsWrap>{StarPoints}</StarPointsWrap>
    </StarsBlock>
)

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
