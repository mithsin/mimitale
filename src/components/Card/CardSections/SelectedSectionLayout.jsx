import React, { useEffect, useState } from 'react';
import { 
    SelectedSectionWrapper,
    IconAbsoulteTopRight,
    UpperH3,
    SectionBodyWrap
} from './styled';

import { 
    faMaximize
} from '@fortawesome/free-solid-svg-icons';
import { ShowLayoutType } from '../Utilities/ShowLayoutType';

export const SelectedSectionLayout = (props) => {
    const [selectList, setSelectList] = useState([])
    const {
        selectedSection,
        cardData
    } = props;
    useEffect(()=>{
        setSelectList(cardData[selectedSection])
    },[selectedSection]);
    
    return (
        <SelectedSectionWrapper>
            <IconAbsoulteTopRight top="1rem" right="1rem" icon={faMaximize} />
            <UpperH3>{selectedSection}</UpperH3>
            <SectionBodyWrap>
                <ShowLayoutType 
                    type={selectedSection}
                    list={selectList}
                    cardData={cardData}
                />
            </SectionBodyWrap>
        </SelectedSectionWrapper>
    );
}

export default SelectedSectionLayout;
