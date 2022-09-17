import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateCardInfo } from 'States/userSlice';
import Switch from '@mui/material/Switch';

import { StarsContainer } from 'Atoms';
import { BasicButtons } from 'Atoms';
import { PointsLayouterWrapper, QuicPointskWrapper,  } from './styled';

export const PointsLayout = ({ cardData, className }) => {
    // const dispatch = useDispatch();
    const { CardId, points } = cardData;
    const { isAdd, setIsAdd } = useState(true);
    const [inputError, setInputError] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const positivePoints = [1, 5, 10, 20];
    const negativePoints = [-1, -5, -10, -20];
    const onButtonClick = () => {
        const updatePoints = +points + parseInt(isAdd ? inputValue : -inputValue)
        if(!inputError && updatePoints > -1){
            const params = {
                CardId: CardId,
                points: updatePoints
            };
            console.log("onButtonClick-params--->: ", params)
            // dispatch(updateCardInfo(params))
            setInputValue('')
        } else {
            console.log('something is not right in input')
        }
    };

    const onAddPointsClick = (fastPoint) => {
        const updatePoints = +points + parseInt(fastPoint)
        if(!inputError && updatePoints > -1){
            const params = {
                CardId: CardId,
                points: updatePoints
            };
            console.log("onPointsClick-params--->: ", params)
            // dispatch(updateCardInfo(params))
        }
    };

    const onMinusPointsClick = (fastPoint) => {
        const updatePoints = +points - parseInt(fastPoint)
        if(!inputError && updatePoints > -1){
            const params = {
                CardId: CardId,
                points: updatePoints
            };
            console.log("onPointsClick-params--->: ", params)
            // dispatch(updateCardInfo(params))
        }
    };

    const onInputChange = (e) => {
        if((/[^\d]/g).test(e.target.value)){
            //submit value
            setInputError(true)
        }else{
            setInputValue(e.target.value)
            setInputError(false)
        }
    };

    const onClickIsAdd = () => setIsAdd(!isAdd);


    return (
        <PointsLayouterWrapper>
            <QuicPointskWrapper>
                <PointSysUl>
                    { positivePoints.map( point =>
                        <li key={point} className={className} onClick={()=> onAddPointsClick(point)}>
                            <StarsContainer
                                color="green" 
                                StarPoints={ point } />
                        </li>)
                    }
                </PointSysUl>
                <PointSysUl>
                    { negativePoints.map( point =>
                        <li key={point} className={className} onClick={()=> onMinusPointsClick(point)}>
                            <StarsContainer
                                color="red" 
                                StarPoints={ point } />
                        </li>)
                    }
                </PointSysUl>
            </QuicPointskWrapper>
            {inputError && <span>NUMBER ONLY</span>}
                <div>
                    <Switch 
                        label='url-input' 
                        defaultChecked 
                        checked={!isImageURLDrop}
                        onChange={onClickIsAdd}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    points format
                </div>
            <input 
                className={inputError ? 'inputError' : 'pointInput'} 
                value={inputValue} 
                type='text' 
                placeholder="points" 
                onChange={onInputChange}/>
            <BasicButtons
                onClick={onButtonClick}
                label={isAdd ? 'ADD' : 'MINUS'}
                className="pointButton" />
        </PointsLayouterWrapper>
    );
};

export default PointsLayout;