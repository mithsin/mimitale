import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCardInfo } from 'States/userSlice';
import Switch from '@mui/material/Switch';

import { StarsContainer } from 'Atoms';
import { BasicButtons } from 'Atoms';
import { PointsLayouterWrapper, QuicPointskWrapper, PointSysUl, PointStarCtn, ButtonWrap } from './styled';

export const PointsLayout = ({ cardData, className }) => {
    const dispatch = useDispatch();
    const { CardId, points } = cardData;
    const [ isAdd, setIsAdd ] = useState(true);
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
            // console.log("onButtonClick-params--->: ", params)
            dispatch(updateCardInfo(params))
            setInputValue('')
        } else {
            console.log('something is not right in input')
        }
    };
    
    const onFastPointsClick = (fastPoint) => {
        const updatePoints = +points + parseInt(fastPoint)
        if(!inputError && updatePoints > -1){
            const params = {
                CardId: CardId,
                points: updatePoints
            };
            // console.log("onPointsClick-params--->: ", params)
            dispatch(updateCardInfo(params))
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
                        <PointStarCtn key={point} isAdd={true} onClick={()=> onFastPointsClick(point)}>
                            <StarsContainer
                                color="green" 
                                StarPoints={ point } />
                        </PointStarCtn>)
                    }
                </PointSysUl>
                <PointSysUl>
                    { negativePoints.map( point =>
                        <PointStarCtn key={point} isAdd={false} onClick={()=> onFastPointsClick(point)}>
                            <StarsContainer
                                color="red" 
                                StarPoints={ point } />
                        </PointStarCtn>)
                    }
                </PointSysUl>
            </QuicPointskWrapper>
            {inputError && <span>NUMBER ONLY</span>}
                
            <input 
                className={inputError ? 'inputError' : 'pointInput'} 
                value={inputValue} 
                type='text' 
                placeholder="points" 
                onChange={onInputChange}/>
            <ButtonWrap>
                <BasicButtons
                    onClick={onButtonClick}
                    classcolor={isAdd ? 'green' : 'red'}
                    label={isAdd ? 'ADD' : 'MINUS'}
                    isAdd={isAdd}
                    className="pointButton" />
                <div>
                    Add
                    <Switch 
                        label='url-input' 
                        defaultChecked 
                        color="error"
                        checked={!isAdd}
                        onChange={onClickIsAdd}
                        inputProps={{ 'aria-label': 'controlled' }} /> 
                    Minus
                </div>
            </ButtonWrap>    
        </PointsLayouterWrapper>
    );
};

export default PointsLayout;