/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { InputStandard, RadioButtonsGroup, BasicButtons } from 'Atoms';
import { ImageUpload } from 'Components/ImageUpload/ImageUpload';
import { ButtonWrap, UploadImageWrap, ImageWrap } from './styled';
import Switch from '@mui/material/Switch';

export const FormFormat = ({
    defaultFormat,
    inputSettings,
    isUploadImageAvailable=false, 
    onClick
}) => {

    const [formInputs, setFormInputs] = useState(defaultFormat ? defaultFormat : {});
    const [useInputSetting, setUseInputSetting] = useState(inputSettings)
    const [imageURL, setImageURL] = useState(defaultFormat.image || '');
    const [inputError, setInputError] = useState()
    const [isImageURLDrop, setIsImageURLDrop] = useState(true);
    const clearInput = Object.assign(inputSettings);

    useEffect(()=>{
        imageURL && setFormInputs({
            ...formInputs,
            cardSetting: {
                ...formInputs?.cardSetting,
                profileImageURL: encodeURI(imageURL)
              }
        })
    },[imageURL])
    const formInputChange = (e) => {
        const checkType = e.target.getAttribute("data-check");
        const inputName = e.target.name;
        if(checkType === 'number' && (/[^\d]/g).test(e.target.value)){
            setInputError(true)
            const updateinputSettings = useInputSetting.map(item => (item.name === inputName) ? {...item, error: true} : item)
            setUseInputSetting(updateinputSettings)
        } else {
            setInputError(false)
            const updateinputSettings = useInputSetting.map(item => (item.name === inputName) ? {...item, error: false} : item)
            setUseInputSetting(updateinputSettings)

            setFormInputs({ 
                ...formInputs,
                [inputName] : inputName === 'points' ? parseInt(e.target.value) : e.target.value
            })
        }
    };

    const onButtonClicked = () => {
        if(!inputError){
            onClick(formInputs)
            setFormInputs(clearInput)
        }
    }

    const onImageToggleClick = () => setIsImageURLDrop(!isImageURLDrop);

    return (
        <div>
            { isUploadImageAvailable &&
                    <div>
                        Upload Profile Image
                        <div>
                            <Switch 
                                label='url-input' 
                                defaultChecked 
                                checked={!isImageURLDrop}
                                onChange={onImageToggleClick}
                                inputProps={{ 'aria-label': 'controlled' }}
                                />
                            input url or upload file?
                        </div>
                        <UploadImageWrap>
                            { isImageURLDrop
                                ? <ImageUpload setImageURL={setImageURL}/>
                                : <InputStandard name="image" label="image url" onChange={formInputChange} />
                            }
                            <ImageWrap>
                                <img src={imageURL} alt="upload-preview" />
                            </ImageWrap>
                        </UploadImageWrap>
                    </div>
            }
            {
                useInputSetting.map((inputSetting, index)=> {
                    if(inputSetting.type === "text"){
                        return(
                            <InputStandard key={`input-key-`+ index} {...inputSetting} onChange={formInputChange} />
                        )
                    }
                    if(inputSetting.type === "radio"){
                        return(
                            <RadioButtonsGroup key={`input-key-`+ index} {...inputSetting} onChange={formInputChange} />
                        )
                    }
                    return ''
                })
            }
            <ButtonWrap>
                <BasicButtons onClick={onButtonClicked} label="SUBMIT" />
            </ButtonWrap>
        </div>
    );
};

export default FormFormat;