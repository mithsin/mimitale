import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCardState } from 'States/cardSlice';

export const linkUserSlice = createSlice({
    name: 'linkCardState',
    initialState: {
        giverNickName: '',
        nickName: '',
        receiverGender: '',
        link: '',
        points: 0,
        pendingTradePoints: 0,
        pendingRewardPoints: 0,
        historyList: [],
        contributors: [],
        tradePending: [],
        completePending: [],
        requestItem: [],
        shopItemList: [],
        questItemList: [],
        dailyQuestItemList: [],
        cardSetting: {}
    },
    reducers: {
        setLinkCardState: (state, action) => {
            return {...state, ...action.payload}
        }
    },
});
 
export const {
    setLinkCardState
} = linkUserSlice.actions;

const UserAPI = process.env.REACT_APP_API_GATEWAY_URL;

export const getCardData = ( cardlink ) => dispatch => {
        axios.get(`${UserAPI}/card/${cardlink}`)
        .then(res => {
            dispatch(setLinkCardState(res.data))
            dispatch(setCardState(res.data))
        })
        .catch(err => console.log(err))
}

export const updateCardData = ( cardlink ) => dispatch => {
    dispatch(setLinkCardState({...cardlink}));
}

export const cardState = state => state.linkCardState;
export const giverNickName = state => state.linkCardState.giverNickName;
export const nickName = state => state.linkCardState.nickName;
export const cardLink = state => state.linkCardState.link;
export const cardPoints = state => state.linkCardState.points;
export const pendingTradePoints = state => state.linkCardState.pendingTradePoints;
export const pendingRewardPoints = state => state.linkCardState.pendingRewardPoints;
export const tradeHistory = state => state.linkCardState.tradeHistory;
export const requestItem = state => state.linkCardState.requestItem;
export const shopItemList = state => state.linkCardState.shopItemList;
export const questItemList = state => state.linkCardState.questItemList;

export default linkUserSlice.reducer;