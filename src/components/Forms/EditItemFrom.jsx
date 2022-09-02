import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  } from 'States/userSlice';
import { 
    FullWidthOutterWrap, 
    InnerFlexColumnWrap, 
    FullWidthFormContainer 
} from './styled';
import { FormFormat } from './FormFormat';
import { Models } from 'Molecules/Models'; 



export const EditItemFrom = ({ 
    setIsModelOpen, 
    type, 
    itemData, 
    cardData 
}) => {
    console.log('typem, itemData-->: ', type, itemData, cardData)
    const dispatch = useDispatch();

    const deafultFormat = itemData

    const onClickSubmitEditItem = (formInputs) => {
        console.log("edit-form-input: ", formInputs);
        const params = {
            CardId: cardData?.CardId,
            ...itemData,
            ...formInputs
        }
        console.log('params--> ', params)
        // dispatch(createNewCard(params));
        // setIsModelOpen(false);
    };

    // input box setting
    const inputSettings = [
        {
            type: "text",
            "data-check": "text",
            name: "itemName",
            required: true,
            label: "Title",
            placeholder: itemData.itemName
        },{
            type: "text",
            "data-check": "text",
            name: "itemDescription",
            label: "description",
            placeholder: itemData.itemDescription
        },{
            type: "text",
            "data-check": "text",
            name: "points",
            label: "points",
            placeholder: itemData.points
        }
    ];
    return (
        <Models setIsModelOpen={setIsModelOpen}>
            <h2>Edit Item</h2>
            <FullWidthFormContainer>
                <FormFormat
                    isUploadImageAvailable={true}
                    inputSettings={inputSettings}
                    defaultFormat={deafultFormat}
                    onClick={onClickSubmitEditItem}
                />
            </FullWidthFormContainer>
        </Models>
    )
}

export default EditItemFrom;