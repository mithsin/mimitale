import React from 'react';
import { 
    SectionVerticalGridWrap,
    SectionGridWrap,
} from './styled';
import { ItemBlock, AddNewItemBlock, RowBlock } from 'Molecules';

export const ShowLayoutType = ({type, list, cardData}) => {
    const showType = {
        'shopItemList': "tile",
        'questItemList': "tile",
        'dailyQuestItemList': "tile",
        'historyList': "row",
        'tradePending': "row",
        'completePending': "row",
        'requestItem': "row",
        'points': "custom",
    }

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
    return <p>{type}</p>;  
};

export default ShowLayoutType;
