import { createSlice } from '@reduxjs/toolkit';

const initState = {
    CardId: "",
    link: "",
    receiverGender: "",
    giverNickName: "",
    nickName: "",
    giverId: "",
    receiverId: "",
    cardSetting: {},
    pendingRewardPoints: 0,
    pendingTradePoints: 0,
    points: 0,
    shopItemList: [],
    completePending: [],
    questItemList: [],
    dailyQuestItemList: [],
    historyList: [],
    requestItem: [],
    tradePending: [],
    contributors: []
}

export const cardSlice = createSlice({
    name: 'cardState',
    initialState: initState,
    reducers: {
        setCardState: (state, action) => {
            return action.payload
        },
        setCardId: (state, action) => {
            state.CardId = action.payload;
        },
        setLink: (state, action) => {
            state.link = action.payload;
        },
        setReceiverGender: (state, action) => {
            state.receiverGender = action.payload;
        },
        setGiverNickName: (state, action) => {
            state.giverNickName = action.payload;
        },
        setNickName: (state, action) => {
            state.nickName = action.payload;
        },
        setGiverId: (state, action) => {
            state.giverId = action.payload;
        },
        setReceiverId: (state, action) => {
            state.receiverId = action.payload;
        },
        setCardSetting: (state, action) => {
            state.cardSetting = action.payload;
        },
        setPendingRewardPoints: (state, action) => {
            state.pendingRewardPoints = action.payload;
        },
        setPendingTradePoints: (state, action) => {
            state.pendingTradePoints = action.payload;
        },
        setPoints: (state, action) => {
            state.points = action.payload;
        },
        setShopItemList: (state, action) => {
            state.shopItemList = action.payload;
        },
        setCompletePending: (state, action) => {
            state.completePending = action.payload;
        },
        setQuestItemList: (state, action) => {
            state.questItemList = action.payload;
        },
        setDailyQuestItemList: (state, action) => {
            state.dailyQuestItemList = action.payload;
        },
        setHistoryList: (state, action) => {
            state.historyList = action.payload;
        },
        setRequestItem: (state, action) => {
            state.requestItem = action.payload;
        },
        setTradePending: (state, action) => {
            state.tradePending = action.payload;
        },
        setContributors: (state, action) => {
            state.contributors = action.payload;
        },
    },
});
 
export const {
    setCardState,
    setCardId,
    setLink,
    setReceiverGender,
    setGiverNickName,
    setNickName,
    setGiverId,
    setReceiverId,
    setCardSetting,
    setPendingRewardPoints,
    setPendingTradePoints,
    setPoints,
    setShopItemList,
    setCompletePending,
    setQuestItemList,
    setDailyQuestItemList,
    setHistoryList,
    setRequestItem,
    setTradePending,
    setContributors,
} = cardSlice.actions;

export const updateCardState = ( data, userId ) => dispatch => {

    const fullData = (userId && data?.givingList?.length > 1 && data?.givingList.find(card => card.CardId === userId)) ||
    (data?.givingList?.length > 0 && data?.givingList[0]) ||
    ({});
    localStorage.setItem("cardInitialState", JSON.stringify(fullData));
    dispatch(setCardState(fullData))
}

export const InitCardState = ( data ) => (dispatch, getState) => {
    // const initLocalData = JSON.parse(localStorage.getItem("userInitialState"));
    const originObj = getState().userState.givingList.find(card => card.CardId === data.CardId)

    localStorage.setItem("cardInitialState", JSON.stringify(originObj));
    dispatch(setCardState(originObj));
}

export const updateCardId = ( newCardId ) => (dispatch, getState) => {
    const fullData = getState().userState.givingList.find(cardInfo => cardInfo.CardId === newCardId);
    localStorage.setItem("cardInitialState", JSON.stringify(fullData));

    dispatch(setCardState(fullData))
}

export const useFullCardData = state => state.cardState;
export const useCardId = state => state.cardState.CardId;
export const useLink = state => state.cardState.link;
export const useReceiverGender = state => state.cardState.receiverGender;
export const useGiverNickName = state => state.cardState.giverNickName;
export const useNickName = state => state.cardState.nickName;
export const useGiverId = state => state.cardState.giverId;
export const useReceiverId = state => state.cardState.receiverId;
export const useCardSetting = state => state.cardState.cardSetting;
export const usePendingRewardPoints = state => state.cardState.pendingRewardPoints;
export const usePendingTradePoints = state => state.cardState.pendingTradePoints;
export const usePoints = state => state.cardState.points;
export const useShopItemList = state => state.cardState.shopItemList;
export const useCompletePending = state => state.cardState.completePending;
export const useQuestItemList = state => state.cardState.questItemList;
export const useDailyQuestItemList = state => state.cardState.dailyQuestItemList;
export const useHistoryList = state => state.cardState.historyList;
export const useRequestItem = state => state.cardState.requestItem;
export const useTradePending = state => state.cardState.tradePending;
export const useContributors = state => state.cardState.contributors;
export const useAllOptionList = state => { 
    return {
    pendingRewardPoints: state.cardState.pendingRewardPoints,
    pendingTradePoints: state.cardState.pendingTradePoints,
    points: state.cardState.points,
    shopItemList: state.cardState.shopItemList,
    completePending: state.cardState.completePending,
    questItemList: state.cardState.questItemList,
    dailyQuestItemList: state.cardState.dailyQuestItemList,
    historyList: state.cardState.historyList,
    requestItem: state.cardState.requestItem,
    tradePending: state.cardState.tradePending
}}

export default cardSlice.reducer;