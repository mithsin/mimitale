import React from 'react';
import {
    ModelWrapper,
    ModelInnerWrap,
    IconToShow,
    CloseIconWrapper
} from './styled';

import {
    faX
} from '@fortawesome/free-solid-svg-icons';

export const Models = ({
    setIsModelOpen,
    children
}) => {

    const onCloseClick = () => {
        setIsModelOpen(false)
    }

    const onClickOutside = (e) => {
        if(e.target.getAttribute('data-element') === "model-cover"){
            setIsModelOpen(false)
        }
    }

    return (
        <ModelWrapper data-element="model-cover" onClick={onClickOutside}>
            <ModelInnerWrap>
                <CloseIconWrapper>
                    <IconToShow 
                        icon={faX}
                        color="#000"
                        onClick={onCloseClick}
                    />
                </CloseIconWrapper>
                {children}
            </ModelInnerWrap>
        </ModelWrapper>
    );
};

export default Models;