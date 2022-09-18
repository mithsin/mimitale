import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import Card from 'Components/Card';

import { cardState, getCardData } from 'States/linkUserSlice';


const CardLink = () => {
    const dispatch = useDispatch();
    const cardUseState = useSelector(cardState);
    const {cardlink} = useParams();
    useEffect(()=>{
        dispatch(getCardData(cardlink))
    },[])
    console.log('cardlink-->: ', cardlink)
    console.log('cardUseState-->: ', cardUseState)
    return(
        <div className='cardLinkWrapper'>
            <Card userTypeGiver={false} cardData={cardUseState}/>
        </div>
    );
};

export default CardLink;