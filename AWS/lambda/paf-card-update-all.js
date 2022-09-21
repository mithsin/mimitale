const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  let paramUE = '';
  let paramUA = {};
  let paramUAV = {};
  
  let allEventToOneObj = {
    UE: [],
    UA: {},
    UAV: {}
  };
  const cardSettingEvent = event.cardSetting ? {
    UE: '#CSSE = :CSSE',
    UA: {"#CSSE": "cardSetting"},
    UAV: {":CSSE": event.cardSetting}
  } : '';
  const profileImageEvent = event.profileImage ? {
    UE: '#PFIE = :PFIE',
    UA: {"#PFIE": "profileImage"},
    UAV: {":PFIE": event.profileImage}
  } : '';
  const contributorsEvent = event.contributors ? {
    UE: '#GI = :GI',
    UA: {"#GI": "contributors"},
    UAV: {":GI": event.contributors}
  } : '';
  const giverNickNameEvent = event.giverNickName ? {
    UE: '#GNN = :GNN',
    UA: {"#GNN": "giverNickName"},
    UAV: {":GNN": event.giverNickName}
  } : '';
  const nickNameEvent = event.nickName ? {
    UE: '#RE = :RE',
    UA: {"#RE": "nickName"},
    UAV: {":RE": event.nickName}
  } : '';
  const receiverGenderEvent = event.receiverGender ? {
    UE: '#RGE = :RGE',
    UA: {"#RGE": "receiverGender"},
    UAV: {":RGE": event.receiverGender}
  } : '';
  const linkPrivateEvent = (event.linkPrivate === true || event.linkPrivate === false) ? {
    UE: '#LP = :LP',
    UA: {"#LP": "linkPrivate"},
    UAV: {":LP": event.linkPrivate}
  } : '';
  const pointsEvent = (event.points === 0 || event.points ) ? {
    UE: '#PE = :PE',
    UA: {"#PE": "points"},
    UAV: {":PE": event.points}
  } : '';
  const pendingTradePointsEvent = (event.pendingTradePoints === 0 || event.pendingTradePoints ) ? {
    UE: '#PPE = :PPE',
    UA: {"#PPE": "pendingTradePoints"},
    UAV: {":PPE": event.pendingTradePoints}
  } : '';
  const pendingRewardPointsEvent = (event.pendingRewardPoints === 0 || event.pendingRewardPoints ) ? {
    UE: '#PRP = :PRP',
    UA: {"#PRP": "pendingRewardPoints"},
    UAV: {":PRP": event.pendingRewardPoints}
  } : '';
  const tradePendingEvent = event.tradePending ? {
    UE: '#THE = :THE',
    UA: {"#THE": "tradePending"},
    UAV: {":THE": event.tradePending}
  } : '';
  const completePendingEvent = event.completePending ? {
    UE: '#CHE = :CHE',
    UA: {"#CHE": "completePending"},
    UAV: {":CHE": event.completePending}
  } : '';
  const historyListEvent = event.historyList ? {
    UE: '#HLE = :HLE',
    UA: {"#HLE": "historyList"},
    UAV: {":HLE": event.historyList}
  } : '';
  const requestItemEvent = event.requestItem ? {
    UE: '#RIE = :RIE',
    UA: {"#RIE": "requestItem"},
    UAV: {":RIE": event.requestItem}
  } : '';
  const shopItemListEvent = event.shopItemList ? {
    UE: '#SLE = :SLE',
    UA: {"#SLE": "shopItemList"},
    UAV: {":SLE": event.shopItemList}
  } : '';
  const questItemListEvent = event.questItemList ? {
    UE: '#QIE = :QIE',
    UA: {"#QIE": "questItemList"},
    UAV: {":QIE": event.questItemList}
  } : '';
  const dailyQuestItemListEvent = event.dailyQuestItemList ? {
    UE: '#DQIE = :DQIE',
    UA: {"#DQIE": "dailyQuestItemList"},
    UAV: {":DQIE": event.dailyQuestItemList}
  } : '';

const allEvent = [
    cardSettingEvent,
    profileImageEvent,
    contributorsEvent, 
    giverNickNameEvent,
    nickNameEvent,
    receiverGenderEvent,
    linkPrivateEvent,
    pointsEvent,
    pendingTradePointsEvent,
    pendingRewardPointsEvent,
    tradePendingEvent,
    completePendingEvent,
    historyListEvent,
    requestItemEvent,
    shopItemListEvent,
    questItemListEvent,
    dailyQuestItemListEvent
];
// const filterEvents = allEvent.filter((item)=> item !== '')
allEvent.forEach(evntlist =>{
      if(evntlist){
        return allEventToOneObj = {
          UE: (allEventToOneObj.UE).concat(evntlist.UE),
          UA: {...allEventToOneObj.UA, ...evntlist.UA},
          UAV: {...allEventToOneObj.UAV, ...evntlist.UAV}
        };
      }
  });
  const strUE = allEventToOneObj.UE.filter(item => item !== '').join(',');
  paramUE = 'set '.concat(strUE);
  paramUA = allEventToOneObj.UA;
  paramUAV = allEventToOneObj.UAV;

  const params = {
      TableName: "paf-card",
      Key: { CardId : event.CardId },
      UpdateExpression: paramUE,
      ExpressionAttributeNames: {...paramUA},
      ExpressionAttributeValues: {...paramUAV}
    };
    
    console.log('params: ', params);
    dynamodb.update(params, function(err, data){
        if(err){
            console.log(err);
            callback(err);
        } else {
            console.log(data.Item);
            callback(null, { status: 200, upload_status: 'success', data: data.Item });
        }
    });
};