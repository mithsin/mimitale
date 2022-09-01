import React from 'react';
import SwipComponent from 'Components/Utils/SwipComponent';
import {
    faFile,
    faUniversity,
    faHeart,
    faListAlt,
    faHippo,
    faBasketShopping,
} from '@fortawesome/free-solid-svg-icons';
import { 
    SlideWrapper,
    FontAwesomeIconCont,
    SlideWrapContWrap,
    WrapText
} from './styled';

export const OptionsSwipe = () => {
    const staticOptionList = [{
        icon: <FontAwesomeIconCont 
                icon={faBasketShopping} 
                color="#16bbbb" 
                size="2x"/>,
        option: 'shop'
    },{
        icon: <FontAwesomeIconCont 
                icon={faFile} 
                color="#4c0303d1" 
                size="2x"/>,
        option: 'quests'
    },{
        icon: <FontAwesomeIconCont 
                icon={faHeart} 
                color="#b50011" 
                size="2x"/>,
        option: 'daily quest'
    },{
        icon: <FontAwesomeIconCont 
                icon={faListAlt} 
                color="#704cb6"                
                size="2x"/>,
        option: 'pending'
    },{
        icon: <FontAwesomeIconCont 
                icon={faUniversity} 
                color="#007aff" 
                size="2x"/>,
        option: 'history'
    },{
        icon: <FontAwesomeIconCont 
                icon={faHippo} 
                color="#307d00" 
                size="2x"/>,
        option: 'points'
    }];

    const WrapCont = ({slide}) => {
        return (
          <SlideWrapContWrap>
            {slide.icon}
            <WrapText>{slide.option}</WrapText>
          </SlideWrapContWrap>
        )
      };

    return (
        <SlideWrapper>
            <SwipComponent 
                slidesPerview="auto"
                WrapCont={WrapCont}
                slideList={staticOptionList}/>
        </SlideWrapper>
    );
}

export default OptionsSwipe;