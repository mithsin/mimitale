import React, { useState, useEffect, useCallback } from 'react';
import Switch from '@mui/material/Switch';
import { ImageUpload } from 'Components/ImageUpload/ImageUpload';

import { InputStandard } from 'Atoms';
import { ImageUploadBlockWrapper, UploadImageWrap, ImageWrap, ImageTextWrap } from './styled';

export const ImageUploadBlock = ({
    title,
    setImage
}) => {
    const [imageURL, setImageURL] = useState('');
    const [isImageURLDrop, setIsImageURLDrop] = useState(false);
    const onImageToggleClick = () => setIsImageURLDrop(!isImageURLDrop);

    const imageCallBack = useCallback(() => {
        imageURL && setImage(imageURL)
    },[imageURL, setImage]) 

    useEffect(()=>{
        imageCallBack();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[imageURL]);

    const onImageChange = (e) => {
        setImageURL(e.target.value);
    }

    return (
        <ImageUploadBlockWrapper>
            <ImageTextWrap>
                <h3>{title}</h3>
                <Switch 
                    label='url-input' 
                    defaultChecked 
                    checked={!isImageURLDrop}
                    onChange={onImageToggleClick}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                input url or upload file?
            </ImageTextWrap>
            <UploadImageWrap>
                { isImageURLDrop
                    ? <ImageUpload setImageURL={setImageURL}/>
                    : <InputStandard name="image" label="image url" onChange={onImageChange} />
                }
                <ImageWrap>
                    <img src={imageURL} alt="upload-preview" />
                </ImageWrap>
            </UploadImageWrap>
        </ImageUploadBlockWrapper>
    );
};

export default ImageUploadBlock;