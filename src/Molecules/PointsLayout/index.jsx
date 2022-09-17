import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCardInfo } from 'States/userSlice';
import { StarsContainer } from 'Atoms';
import { BasicButtons } from 'Atoms';
import { PointsLayouterWrapper } from './styled';

export const PointsLayout = ({ cardData, className, add }) => {
    const dispatch = useDispatch();
    const { CardId, points } = cardData;
    const [inputError, setInputError] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const positivePoints = [1, 5, 10, 20];
    const negativePoints = [-1, -5, -10, -20];
    const onButtonClick = () => {
        const updatePoints = +points + parseInt(add ? inputValue : -inputValue)
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

    const onPointsClick = (fastPoint) => {
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

    const onInputChange = (e) => {
        if((/[^\d]/g).test(e.target.value)){
            //submit value
            setInputError(true)
        }else{
            setInputValue(e.target.value)
            setInputError(false)
        }
    };

    return (
        <PointsLayouterWrapper>
            <ul className="pointSysUl">
                { positivePoints.map( point =>
                    <li key={point} className={className} onClick={()=> onPointsClick(point)}>
                        <StarsContainer
                            color="green" 
                            StarPoints={ point } />
                    </li>)
                }
            </ul>
            <ul className="pointSysUl">
                { negativePoints.map( point =>
                    <li key={point} className={className} onClick={()=> onPointsClick(point)}>
                        <StarsContainer
                            color="red" 
                            StarPoints={ point } />
                    </li>)
                }
            </ul>
            {inputError && <span>NUMBER ONLY</span>}
            <input 
                className={inputError ? 'inputError' : 'pointInput'} 
                value={inputValue} 
                type='text' 
                placeholder="points" 
                onChange={onInputChange}/>
            <BasicButtons
                onClick={onButtonClick}
                label={add ? 'ADD' : 'MINUS'}
                className="pointButton" />
        </PointsLayouterWrapper>
    );
};

export default PointsLayout;