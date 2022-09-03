import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { updateCardItemsList } from 'States/userSlice';
import { FullWidthFormContainer } from './styled';
import { FormPreSet } from './FormPreSet';
import { Models } from 'Molecules/Models'; 



export const AddNewItemForm = ({ 
    setIsModelOpen, 
    type, 
    cardData 
}) => {
    const dispatch = useDispatch();
    const deafultFormat = {
        image: "",
        itemDescription: "",
        itemId: "",
        itemName: "",
        points: 0
    };

    const onClickSubmitEditItem = (formInputs) => {
       console.log('formInputs-> ', formInputs)

        const params = {
            CardId: cardData?.CardId,
            [type]: cardData[type].concat([{...formInputs, itemId: `${type}-${uuidv4()}`}])
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
        },{
            type: "text",
            "data-check": "text",
            name: "itemDescription",
            label: "description",
        },{
            type: "text",
            "data-check": "text",
            name: "points",
            label: "points",
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