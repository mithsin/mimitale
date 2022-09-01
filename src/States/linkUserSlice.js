import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import {mockFullUser} from '../mockData';

export const linkUserSlice = createSlice({
    name: 'linkCardState',
    initialState: {
        giverNickName: '',
        nickName: '',
        receiverGender: '',
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
        setCardState: (state, action) => {
            return {...state, ...action.payload}
        }
    },
});
 
export const {
    setCardState
} = linkUserSlice.actions;

const UserAPI = process.env.REACT_APP_API_GATEWAY_URL;

export const getCardData = ( cardlink ) => dispatch => {
        axios.get(`${UserAPI}/card/${cardlink}`)
        .then(res => 
            dispatch(setCardState({...res.data}))
        )
        .catch(err => console.log(err))
}

export const updateCardData = ( cardlink ) => dispatch => {
    dispatch(setCardState({...cardlink}));
}

export const cardState = state => state.linkCardState;
export const giverNickName = state => state.linkCardState.giverNickName;
export const nickName = state => state.linkCardState.nickName;
export const cardPoints = state => state.linkCardState.points;
export const pendingTradePoints = state => state.linkCardState.pendingTradePoints;
export const pendingRewardPoints = state => state.linkCardState.pendingRewardPoints;
export const tradeHistory = state => state.linkCardState.tradeHistory;
export const requestItem = state => state.linkCardState.requestItem;
export const shopItemList = state => state.linkCardState.shopItemList;
export const questItemList = state => state.linkCardState.questItemList;

export default linkUserSlice.reducer;