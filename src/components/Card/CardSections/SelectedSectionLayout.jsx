import React from 'react';
import { 
    SelectedSectionWrapper,
    SectionGridWrap,
    IconAbsoulteTopRight
} from './styled';

import { mockQuest } from './mockQuestData';
import ItemBlock from './ItemBlock';
import { 
    faMaximize
} from '@fortawesome/free-solid-svg-icons';

export const SelectedSectionLayout = ({cardData}) => {
    
    return (
        <SelectedSectionWrapper>
            <IconAbsoulteTopRight top="1rem" right="1rem" icon={faMaximize} />
            <h3>Selected Title</h3>
            <SectionGridWrap>
                {
                    mockQuest.map(item => {
                        return(
                            <ItemBlock itemBlockData={item}/>
                        )
                    })
                }
            </SectionGridWrap>
        </SelectedSectionWrapper>
    );
}

export default SelectedSectionLayout;
