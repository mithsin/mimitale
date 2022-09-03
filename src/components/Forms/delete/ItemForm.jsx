import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ImageUpload from 'Components/ImageUpload/ImageUpload';
import {MuiButton, MuiInputField} from 'Components/MUI'
import { updateCardItemsList } from 'States/userSlice';
import PreviousBar from 'Components/Utils/PreviousBar';

import './styles.scss';

const ItemForm = ({CardId, itemList, shopButton, setClose}) => {
    const dispatch = useDispatch();
    const [formInputs, setFormInputs] = useState({});
    const [imageURL, setImageURL] = useState('');
    const [inputError, setInputError] = useState(false)
    useEffect(()=>{
        imageURL && setFormInputs({
            ...formInputs,
            image: imageURL
        })
    },[imageURL])

    // store all input changes
    const formInputChange = (e) => {
        if(e.target.name === 'points' && (/[^\d]/g).test(e.target.value)){
            setInputError(true)
        } else {
            setInputError(false)
            setFormInputs({ 
                ...formInputs,
                [e.target.name] : e.target.name === 'points' ? parseInt(e.target.value) : e.target.value
            })
        }
    };

    const onClickAddItem = () => {
        const params={
            CardId: CardId,
            ...(shopButton
                ? {shopItemList: itemList.concat([
                        {shopItemId: `shopItem-${uuidv4()}`, ...formInputs}])}
                     
                : {questItemList: itemList.concat([
                    {questItemId: `questItem-${uuidv4()}`, ...formInputs}])})
        }
        // console.log('ItemForm-params---->: ', params)
        dispatch(updateCardItemsList(params))
        setClose(false)
    };

    // input box setting
    const inputSettings = [
        {
            type: "text",
            name: "itemName", 
            placeholder: "Name"
        },
        {
            type: "text",
            name: "itemDescription", 
            placeholder: "Description"
        },
        {
            type: "text",
            name: "points", 
            placeholder: "points",
            className: inputError ? 'inputError' : ''
        }
    ];
    return(
        <div className="outter-block">
            {/* <PreviousBar setClose={setClose}/> */}
            <div className="inner-block">
                <div className="form-container" >
                    <ImageUpload setImageURL={setImageURL}/>
                    <MuiInputField
                        bgColor="#fff"
                        type="text"
                        name="image"
                        label="image link"
                        onChange={(e)=> setImageURL(e.target.value)}/>
                    {
                        inputSettings.map((inputSetting, index)=>
                            <MuiInputField
                                key={`${index}-inputsetting`}
                                bgColor="#fff"
                                name={inputSetting.name}
                                label={inputSetting.placeholder} 
                                onChange={ formInputChange }/>
                        )
                    }
                    <MuiButton 
                        bgColor="#fff"
                        labelColor="#000"
                        label="SUBMIT"
                        onClick={ onClickAddItem }/>
                </div>
            </div>
        </div>
    )
}

export default ItemForm;
