import React from 'react';
import SwipComponent from 'Components/Utils/SwipComponent';
import { 
    faHome,
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
    wrapP
} from './styled';

export const OptionsSwipe = () => {
    const staticOptionList = [{
        icon: <FontAwesomeIconCont icon={faBasketShopping} size="2x"/>,
        option: 'shop'
    },{
        icon: <FontAwesomeIconCont icon={faFile} size="2x"/>,
        option: 'quests'
    },{
        icon: <FontAwesomeIconCont icon={faHeart} size="2x"/>,
        option: 'daily quest'
    },{
        icon: <FontAwesomeIconCont icon={faListAlt} size="2x"/>,
        option: 'pending'
    },{
        icon: <FontAwesomeIconCont icon={faUniversity} size="2x"/>,
        option: 'history'
    },{
        icon: <FontAwesomeIconCont icon={faHippo} size="2x"/>,
        option: 'points'
    }];

    const WrapCont = ({slide}) => {
        return (
          <SlideWrapContWrap>
            {slide.icon}
            <wrapP>{slide.option}</wrapP>
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