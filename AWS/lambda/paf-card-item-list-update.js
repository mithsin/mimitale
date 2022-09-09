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
    
    dynamodb.update(params, function(err, data){
        if(err){
            console.log(err);
            callback(err);
        } else {
            callback(null, { status: 200, upload_status: 'success', data: data.Item });
        }
    });
};