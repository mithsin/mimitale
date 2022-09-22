const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();


exports.handler = (event, context, callback) => {
    var params = {
        TableName : 'paf-card',
        Key: { 
            CardId : event.CardId 
        },
      };
      dynamodb.get(params, function(err, data) {
        if (err) console.log("err-lambda-paf-card-get-a-card", err);
        else {
            if(data.Item.cardSetting.linkPrivate === true){
                callback(null, {warning: "This card is set private"});
            } else callback(null, { 
                receiverGender: data.Item.receiverGender,
                giverNickName: data.Item.giverNickName,
                nickName: data.Item.nickName,
                link: data.Item.CardId,
                points: data.Item.points,
                pendingRewardPoints: data.Item.pendingRewardPoints,
                pendingTradePoints: data.Item.pendingTradePoints,
                completePending: data.Item.completePending,
                historyList: data.Item.historyList,
                tradePending: data.Item.tradePending,
                requestItem: data.Item.requestItem,
                shopItemList: data.Item.shopItemList,
                questItemList: data.Item.questItemList,
                cardSetting: data.Item.cardSetting,
                dailyQuestItemList:data.Item.dailyQuestItemList
            });
        }
      });
};