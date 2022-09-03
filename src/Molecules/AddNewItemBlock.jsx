import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddNewItemForm } from 'Components/Forms/AddNewItemForm';
import {
    AddNewItemBlockWrapper,
    IconToShow
} from './styled';

export const AddNewItemBlock = ({
    type,
    cardData,
}) => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const onBlockClick = () => setIsModelOpen(true);

    return (
        <>
            <AddNewItemBlockWrapper onClick={onBlockClick}>
                <IconToShow width="100%" icon={faPlus} />
            </AddNewItemBlockWrapper>
            {isModelOpen && 
                    <AddNewItemForm 
                        setIsModelOpen={setIsModelOpen}
                        type={type}
                        cardData={cardData}
                    />
                }
        </>
    );
};

export default AddNewItemBlock;