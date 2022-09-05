import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCardItemsList } from 'States/userSlice';
import { FullWidthFormContainer } from './styled';
import { FormPreSet } from './FormPreSet';
import { Models } from 'Molecules/Models';
import Switch from '@mui/material/Switch';

export const EditItemFrom = ({ 
    setIsModelOpen, 
    type, 
    itemData, 
    cardData 
}) => {
    const dispatch = useDispatch();
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const deafultFormat = itemData

    const onClickSubmitEditItem = (formInputs) => {
        const updateList = cardData[type].map((item)=> { 
            return (item.itemId === formInputs.itemId) 
                ? formInputs
                : item;
        })
        // console.log('updatedItemList->: ', updateList)
        const params = {
            CardId: cardData?.CardId,
            [type]: updateList
        }
        // console.log('params--> ', params)
        dispatch(updateCardItemsList(params));
        setIsModelOpen(false);
    };

    const onDeleteToggleClick = () => setShowDeleteButton(!showDeleteButton);

    const onDeleteClick = () => {
        const updateList = cardData[type].filter((item) => {
            return (item.itemId !== itemData.itemId)
        })

        const params = {
            CardId: cardData?.CardId,
            [type]: updateList
        }
        // console.log('params--> ', params)
        dispatch(updateCardItemsList(params));
        setIsModelOpen(false);
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
                <div>
                    <Switch 
                        label='delete togglet' 
                        defaultChecked 
                        checked={showDeleteButton}
                        onChange={onDeleteToggleClick}
                        inputProps={{ 'aria-label': 'delete-toggle' }}
                        />
                    Delete
                </div>
                <FormPreSet
                    isUploadImageAvailable={true}
                    inputSettings={inputSettings}
                    defaultFormat={deafultFormat}
                    onClick={onClickSubmitEditItem}
                    onDeleteClick={onDeleteClick}
                    showDeleteButton={showDeleteButton}
                />
                 
            </FullWidthFormContainer>
        </Models>
    )
}

export default EditItemFrom;