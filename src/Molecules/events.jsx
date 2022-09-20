import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const onClickAcceptTrade =({
    type,
    cardData,
    itemData,//trade, complete
    dispatch,
    updateCardInfo
    })=>{

    const {
        CardId,
        points,
        pendingTradePoints,
        historyList
    } = cardData;

    const updatePendingList = cardData[type].filter(item => item.itemId !== itemData.itemId);

    const pendingToHistory = {
        ...itemData,
        type, 
        fulFilledDate: moment().format("YYYY-MM-DD"),
        status: "fulfilled"
    }

    const params={
        CardId: CardId,
        points: points,
        pendingTradePoints: pendingTradePoints - itemData.points,
        tradePending: updatePendingList,
        historyList: historyList ? [...historyList, pendingToHistory] : [pendingToHistory]
    }
    console.log("pedingList-Params-onClickAcceptTrade ---->: ", params)
    // dispatch(updateCardInfo(params))
};
export const onClickAcceptCompleteQuest =({
    type,
    cardData,
    itemData,//trade, complete
    dispatch,
    updateCardInfo
})=>{
    const {
        CardId,
        points,
        pendingRewardPoints,
        historyList
    } = cardData;

    const updatePendingList = cardData[type].filter(item => item.itemId !== itemData.itemId);

    const pendingToHistory = {
        ...itemData,
        type, 
        fulFilledDate: moment().format("YYYY-MM-DD"),
        status: "fulfilled"
    }

    const params={
        CardId,
        points: points + pendingRewardPoints,
        pendingRewardPoints: pendingRewardPoints - itemData.points,
        completePending: updatePendingList,
        historyList: historyList ? [...historyList, pendingToHistory] : [pendingToHistory]
    }
    console.log("pedingList-Params-onClickAcceptCompleteQuest ---->: ", params)
    // dispatch(updateCardInfo(params))
};
export const onClickRejectTrade =({
    type,
    cardData,
    itemData,//trade, complete
    dispatch,
    updateCardInfo
})=>{
    const {
        CardId,
        points,
        pendingTradePoints
    } = cardData;
   
    const updatePendingList = cardData[type].filter(item => item.itemId !== itemData.itemId);

    const params = {
        CardId: CardId,
        points: points + itemData.points,
        pendingTradePoints: pendingTradePoints - itemData.points,
        tradePending: updatePendingList
    }
    console.log("pedingList-Params-onClickRejectTrade ---->: ", params)
    // dispatch(updateCardInfo(params))
};
export const onClickRejectComplete =({
    type,
    cardData,
    itemData,//trade, complete
    dispatch,
    updateCardInfo
})=>{
    const {
        CardId,
        points,
        pendingRewardPoints
    } = cardData;

    const updatePendingList = cardData[type].filter(item => item.itemId !== itemData.itemId);
    
    const params = {
        CardId: CardId,
        points: points,
        pendingRewardPoints: pendingRewardPoints - itemData.points,
        completePending: updatePendingList
    }
    console.log("pedingList-Params-onClickRejectComplete ---->: ", params)
    // dispatch(updateCardInfo(params))
};

export const onBuyClick = ({
    type,
    cardData,
    itemData,//trade, complete
    dispatch,
    updateCardInfo
}) => {

    const params = {
        CardId: cardData.link,
        pendingRewardPoints: cardData.pendingRewardPoints + itemData.points,
        completePending: cardData.completePending.concat([{
            itemId: `${type}-${uuidv4()}`,
            status: "pending",
            activeDate: moment().format("YYYY-MM-DD"),
            fulFilledDate: "none",
            itemData: itemData
        }])
    }
    console.log("onBuyClick-params--->: ", params)
    // dispatch(updateCardInfo(params))
}