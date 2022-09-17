import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { 
    StarsBlock,
    FontAwesomeIconCont,
    StarPointsWrap,
    StarPointsType,
} from './styled';

export const StarsContainer = ({color, type, size="2x", StarPoints}) => (
    <StarsBlock>
        <FontAwesomeIconCont beat color={color} icon={faStar} size={size}/>
        {type && <StarPointsType className="starLabel">{type}</StarPointsType>}
        <StarPointsWrap>{StarPoints}</StarPointsWrap>
    </StarsBlock>
)

export default StarsContainer;