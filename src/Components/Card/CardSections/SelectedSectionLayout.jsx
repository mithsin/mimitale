// eslint-disable-line react-hooks/exhaustive-deps
import React, { useEffect, useState } from 'react';
import { 
    SelectedSectionWrapper,
    UpperH3,
    SectionBodyWrap
} from './styled';
import { ShowLayoutType } from '../Utilities/ShowLayoutType';

export const SelectedSectionLayout = (props) => {
    const [selectList, setSelectList] = useState([])
    const {
        selectedSection,
        cardData
    } = props;
    useEffect(()=>{
        setSelectList(cardData[selectedSection])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedSection]);
    
    const showTitle = {
        'shopItemList': "Shop Item",
        'questItemList': "Quest Item",
        'dailyQuestItemList': "Daily Quest Item",
        'historyList': "History",
        'tradePending': "Pending trade",
        'completePending': "Pending Complete",
        'requestItem': "Request Item",
        'points': "Points",
    }

    return (
        <SelectedSectionWrapper>
            <UpperH3>{showTitle[selectedSection]}</UpperH3>
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
