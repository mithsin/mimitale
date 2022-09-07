import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserId, givingList, createNewCard } from 'States/userSlice';
import CloseBar from 'Components/Utils/CloseBar';
import { newCardDefaultShopAndTrade } from './defaultData';
import { FullWidthOutterWrap, InnerFlexColumnWrap, FullWidthFormContainer } from './styled';
import { FormFormat } from './FormFormat';

const deafultFormat = {
    nickName: '',
    receiverGender: '',
    receiverId: '',
    contributors: '',
    points: 0,
    cardSetting: {
        profileImageURL: ''
    }
}

export const NewCardForm = ({setOpenNewCardForm}) => {
    const dispatch = useDispatch();
    const giverId = useSelector(UserId);
    const givingListCurrent = useSelector(givingList);
    
    const onClickAddUser = (formInputs) => {
        const params={
            giverId: giverId,
            givingList: (givingListCurrent?.length > 0) ? givingListCurrent.map(item => item.CardId) : [],
            ...newCardDefaultShopAndTrade,
            ...formInputs
        }
        dispatch(createNewCard(params));
        setOpenNewCardForm(false);
    };

    // input box setting
    const inputSettings = [
        {
            type: "text",
            "data-check": "text",
            name: "nickName", 
            required: true,
            label: "Nickname",
        },
        {
            type: "text",
            "data-check": "text",
            name: "contributors", 
            label: "Contributors email (optional)"
        },
        {
            type: "text",
            "data-check": "number",
            name: "points", 
            label: "Points",
        },{
            type: "radio",
            "data-check": "radio",
            title: "Receiver Gender",
            name: "receiverGender",
            contentList: [{
                    name: "receiverGender",
                    value: "M",
                    label: "Male"
                },{
                    name: "receiverGender",
                    value: "F",
                    label: "Female"
            }]
        }
    ];
    return(
        <FullWidthOutterWrap>
            <CloseBar setClose={setOpenNewCardForm}/>
            <InnerFlexColumnWrap>
                <h2>Add New Card</h2>
                <FullWidthFormContainer>
                    <FormFormat 
                        isUploadImageAvailable={true}
                        inputSettings={inputSettings}
                        defaultFormat={deafultFormat}
                        onClick={onClickAddUser}
                    />
                </FullWidthFormContainer>
            </InnerFlexColumnWrap>
        </FullWidthOutterWrap>
    )
}

export default NewCardForm;