import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { InputStandard, BasicButtons } from 'Atoms';
import { Models } from 'Molecules/Models';
import { ImageUploadBlock } from 'Molecules/ImageUploadBlock';
import {
  Button,
  ListItemText,
  ListItem,
  List,
  Switch } from '@mui/material';
import ImageUpload from 'Components/ImageUpload/ImageUpload';
import { updateCardInfo, deleteCard, linkUpdateCardUser } from 'States/userSlice';

import { ButtonWrap, InputLinkWrap } from './styled';

export const CardSetting = ({cardData, setOpenCardSetting}) => {
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);
  const {CardId, giverId, cardSetting} = cardData;
  const [copySuccess, setCopySuccess] = useState('COPY LINK');
  const [bgImageURL, setBgImageURL] = useState(cardData?.cardSetting?.bgImageURL || '');
  const [profileImageURL, setProfileImageURL] = useState(cardData?.cardSetting?.profileImageURL || '');
  const [paramInput, setParamInput] = useState({});
  const [openDeleteCard, setOpenDeleteCard] = useState(false);
  const [recEmail, setRecEmail] = useState(cardData?.receiverId || '')
  const [privateOn, setPrivateOn] = useState(cardSetting.linkPrivate)
  const [adaptBtnDisabled, setAdaptBtnDisabled] = useState(false);
  

  useEffect(()=>{
    setParamInput({
          ...paramInput,
          profileImageURL: profileImageURL,
          bgImageURL: bgImageURL
      })
  },[bgImageURL, profileImageURL])
  useEffect(()=>{
    const varReceiverPending = cardData?.cardSetting?.receiverPending;
    const varAdaptStatus = cardData?.cardSetting?.adaptStatus;
    if((varReceiverPending === true) || (varAdaptStatus === true)){
      setAdaptBtnDisabled(true)
    } else {
      setAdaptBtnDisabled(false)
    }
  },[])

  const onClickUpdatePersonalCardSetting = () => {
    const params={
        CardId: CardId,
        cardSetting: {
          ...paramInput
        }
    }
    // console.log('ItemForm-params---->: ', params)
    dispatch(updateCardInfo(params))
};

const copyToClipboard = () => {
  textAreaRef.current.select();
  document.execCommand('copy');
  setCopySuccess('Copied!');
};
const onCardDelete = () => {
  dispatch(deleteCard({
    CardId: CardId,
    giverId: giverId
  }))
  setOpenCardSetting(false);
};
const updateReceiverEmail = () => {
  if(recEmail && CardId){
    const params={
      CardId: CardId,
      receiverId: recEmail.toLowerCase(),
      cardSetting: {
        ...cardData.cardSetting,
        receiverPending: true
      }
    }
    dispatch(linkUpdateCardUser(params))
  }
}
const onPrivateOn = () => {
  const params={
    CardId: CardId,
    cardSetting: {
      ...cardData.cardSetting,
      linkPrivate: !privateOn
    }
  }
  dispatch(updateCardInfo(params))
  setPrivateOn(!privateOn)
}

  return (
    <Models>
      <ImageUploadBlock
          title="Change Profile Image"
          setImage={setProfileImageURL}
        />
      <ImageUploadBlock
          title="Change Background Image"
          setImage={setBgImageURL}
        />
      <InputLinkWrap  >
        <InputStandard
            ref={textAreaRef}
            value={`${window.location.href}card/${cardData.link}`}
        />
        <BasicButtons 
          label={copySuccess}
          size="small"
          onClick={copyToClipboard}
          { 
            ...( (cardData?.cardSetting?.receiverPending || cardData?.cardSetting?.adaptStatus) &&
            { disabled: adaptBtnDisabled } )
          }
        />
      </InputLinkWrap>
      <InputLinkWrap  >
        <InputStandard
          { ...( cardData?.receiverId && { defaultValue: cardData?.receiverId } ) }
          type="text"
          name="receiverEmailUpdate"
          label="Receiver E-Mail"
          onChange={e=> setRecEmail(e.target.value)}
        />
        <BasicButtons 
          label="Submit"
          { 
            ...( (cardData?.cardSetting?.receiverPending || cardData?.cardSetting?.adaptStatus) &&
            { disabled: adaptBtnDisabled } )
          }
          onClick={updateReceiverEmail}/>
      </InputLinkWrap>
      <ListItem >
        <ListItemText id="switch-list-label-delete-card" primary="PRIVATE ON" />
        <Switch
            checked={privateOn}
            edge="end"
            onChange={onPrivateOn}
          />
      </ListItem>
      <ListItem >
        <ListItemText id="switch-list-label-delete-card" primary="DELETE CARD" />
        <Switch
            edge="end"
            onChange={()=>setOpenDeleteCard(!openDeleteCard)}
          />
      </ListItem>
      <ButtonWrap>
        {openDeleteCard && 
            <BasicButtons onClick={onCardDelete} color="error" label="Delete" />
        }       
        <BasicButtons 
          onClick={onClickUpdatePersonalCardSetting}
          onKeyPress={onClickUpdatePersonalCardSetting}
          label="Update" />
      </ButtonWrap>
    </Models>
  );
}

export default CardSetting;