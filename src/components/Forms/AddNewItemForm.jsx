import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCardItemsList } from 'States/userSlice';
import { FullWidthFormContainer } from './styled';
import { FormPreSet } from './FormPreSet';
import { Models } from 'Molecules/Models'; 



export const AddNewItemForm = ({ 
    setIsModelOpen, 
    type, 
    itemData, 
    cardData 
}) => {
    const dispatch = useDispatch();
    const deafultFormat = itemData

    const onClickSubmitEditItem = (formInputs) => {
        console.log('cardData-->: ', cardData)
        console.log('itemData-->: ', itemData)
        console.log("edit-form-input: ", formInputs);
        console.log('type-->: ', type)

        const params = {
            CardId: cardData?.CardId,
            [type]: [formInputs]
        }
        console.log('params--> ', params)
        // dispatch(updateCardItemsList(params));
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
            <h2>Add New Item</h2>
            <FullWidthFormContainer>
                <FormPreSet
                    isUploadImageAvailable={true}
                    inputSettings={inputSettings}
                    defaultFormat={deafultFormat}
                    onClick={onClickSubmitEditItem}
                />
            </FullWidthFormContainer>
        </Models>
    )
}

export default AddNewItemForm;