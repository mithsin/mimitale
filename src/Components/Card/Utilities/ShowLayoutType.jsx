import React, { useEffect, useState, useCallback } from 'react';
import { showDisplayType } from 'utils/type';
import { useFullCardData } from 'States/cardSlice';
import { useSelector } from 'react-redux';
import { 
    SectionVerticalGridWrap,
    SectionGridWrap,
} from './styled';
import { ItemBlock, AddNewItemBlock, RowBlock, PointsLayout } from 'Molecules';

export const ShowLayoutType = ({type, userTypeGiver}) => {
    const [selectList, setSelectList] = useState([])
    const cardData = useSelector(useFullCardData);
    const selectMemo = useCallback(()=>{
        setSelectList(cardData[type])
    },[type, cardData])

    useEffect(()=>{
        selectMemo()
    },[type, selectMemo]);

    const showType = showDisplayType(userTypeGiver)

    if(showType[type] === "tile"){
        return (
            <SectionGridWrap>
                {
                    (selectList?.length > 0)
                        ? (<>   
                            {selectList.map((item, index) => {
                                return(
                                    <ItemBlock 
                                        key={'itemblock-' + index}
                                        userTypeGiver={userTypeGiver}
                                        cardData={cardData}
                                        itemData={item} 
                                        type={type}/>
                                )
                            })}
                            <AddNewItemBlock 
                                cardData={cardData}
                                type={type}/>
                        </>
                            
                          )
                        : <p>{type}</p>
                }
            </SectionGridWrap>
        );
    }

    if(showType[type] === "row"){
        return(
            <SectionVerticalGridWrap>
                {
                    (selectList?.length > 0)
                        ? selectList.map((item, index) => {
                                return(
                                    <RowBlock
                                        key={'RowBlock-' + index}
                                        userTypeGiver={userTypeGiver}
                                        cardData={cardData}
                                        itemData={item} 
                                        type={type}/>
                                )
                            })
                        : <p>{type}</p>
                }
            </SectionVerticalGridWrap>
        );
    }

    if(showType[type] === "pointLayout"){
        return(
            <PointsLayout cardData={cardData} />
        );
    }
    return <p>{type}</p>;  
};

export default ShowLayoutType;
