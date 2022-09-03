import React from 'react';
import SwipComponent from 'Components/Utils/SwipComponent';
import { staticOptionList } from '../Utilities/support';
import { 
    SlideWrapper,
    SlideWrapContWrap,
    WrapText
} from './styled';

export const OptionsSwipe = (props) => {
    const {
        setSelectedSection
    } = props;

    const WrapCont = ({slide}) => {
        return (
          <SlideWrapContWrap onClick={()=> setSelectedSection(slide.dataListName)}>
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