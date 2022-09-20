import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Card from 'Components/Card';
import {
    CardLinkWrap
} from './styled';
import { cardState, getCardData } from 'States/linkUserSlice';


const CardLink = () => {
    const dispatch = useDispatch();
    const cardUseState = useSelector(cardState);
    const {cardlink} = useParams();
    useEffect(()=>{
        dispatch(getCardData(cardlink))
    },[cardlink, dispatch])
    
    return(
        <CardLinkWrap>
            <Card userTypeGiver={false} cardData={cardUseState}/>
        </CardLinkWrap>
    );
};

export default CardLink;