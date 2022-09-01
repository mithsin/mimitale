import React, { useEffect, useState } from 'react';
import { 
    SelectedSectionWrapper,
    SectionGridWrap,
    IconAbsoulteTopRight,
    UpperH3
} from './styled';

import { mockQuest } from './mockQuestData';
import ItemBlock from './ItemBlock';
import { 
    faMaximize
} from '@fortawesome/free-solid-svg-icons';

import { updateCardItemsList } from 'States/userSlice';

export const SelectedSectionLayout = (props) => {
    const [selectList, setSelectList] = useState([])
    const {
        selectedSection,
        cardData
    } = props;
    useEffect(()=>{
        setSelectList(cardData[selectedSection])
    },[selectedSection])

    console.log('selectedSection-->: ', selectedSection)
    console.log('SelectedSectionLayout-cardData-->: ', cardData)
    console.log('selectList ', selectList)

    return (
        <SelectedSectionWrapper>
            <IconAbsoulteTopRight top="1rem" right="1rem" icon={faMaximize} />
            <UpperH3>{selectedSection}</UpperH3>
            <SectionGridWrap>
                {
                    selectList
                        ? selectList.map(item => {
                                return(
                                    <ItemBlock itemBlockData={item}/>
                                )
                            })
                        : <p>{selectedSection}</p>
                }
            </SectionGridWrap>
        </SelectedSectionWrapper>
    );
}

export default SelectedSectionLayout;
