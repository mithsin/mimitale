import React from 'react';
import { showDisplayType } from 'utils/type';
import { 
    SectionVerticalGridWrap,
    SectionGridWrap,
} from './styled';
import { ItemBlock, AddNewItemBlock, RowBlock, PointsLayout } from 'Molecules';

export const ShowLayoutType = ({type, list, cardData, userTypeGiver}) => {
    const showType = showDisplayType(userTypeGiver)

    if(showType[type] === "tile"){
        return (
            <SectionGridWrap>
                {
                    (list?.length > 0)
                        ? (<>   
                            {list.map((item, index) => {
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
                    (list?.length > 0)
                        ? list.map((item, index) => {
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
