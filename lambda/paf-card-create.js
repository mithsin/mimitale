const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const id = (context.awsRequestId).substring(0,7);
    const params = {
        Item: {
            "CardId": `card-${id}`,
            "giverId": event.giverId ? event.giverId : "",
            "giverNickName": event.giverNickName ? event.giverNickName : "",
            "receiverId": event.receiverId ? event.receiverId : "",
            "nickName": event.nickName ? event.nickName : "",
            "link": `card-${id}` ? `card-${id}` : "",
            "receiverGender": event.receiverGender ? event.receiverGender : '',
            "points": event.points ? event.points : 0,
            "pendingRewardPoints": event.pendingRewardPoints ? event.pendingRewardPoints : 0,
            "pendingTradePoints": event.pendingTradePoints ? event.pendingTradePoints : 0,
            "contributors": event.contributors ? event.contributors : [],
            "completePending": event.completePending ? event.completePending : [],
            "historyList": event.historyList ? event.historyList : [],
            "tradePending": event.tradePending ? event.tradePending : [],
            "requestItem": event.requestItem ? event.requestItem : [],
            "shopItemList": event.shopItemList ? event.shopItemList : [],
            "questItemList": event.questItemList ? event.questItemList : [],
            "cardSetting" : event.cardSetting ? event.cardSetting : {
                "profileImage": event.cardSetting.profileImage ? event.cardSetting.profileImage : '',
                "bgImageURL": event.cardSetting.bgImageURL ? event.cardSetting.bgImageURL : '',
                "linkPrivate": event.cardSetting.linkPrivate ? event.cardSetting.linkPrivate : false,
                "adaptStatus": event.cardSetting.adaptStatus ? event.cardSetting.adaptStatus : false
            }
        },
        TableName: "paf-card"
    };
    const givingListCheck = event.givingList ? event.givingList : [];
    const updateGivingList = [...givingListCheck].concat([`card-${id}`]);
    const authCardUpdateParam = {
        TableName: "paf-user",
        Key: { UserId : event.giverId },
        UpdateExpression: 'set #GI = :GI',
        ExpressionAttributeNames: {
            "#GI": "givingList"
        },
        ExpressionAttributeValues: {
            ":GI": updateGivingList
        }
    };
    dynamodb.put(params, function(err, newcarddata){
        if(err){
            console.log(err);
            callback(err);
        } else {
            // Update user giving list after it's created
            dynamodb.update(authCardUpdateParam, function(err, data){
                if(err){
                    callback(err);
                } else {
                    console.log(data);
                    callback(null, { 
                        status: 200, 
                        added: 'successful', 
                        link: `/public/card/${params.Item.CardId}`, 
                        newCardData: {
                            CardId: params.Item.CardId,
                            nickName: params.Item.nickName,
                            receiverGender: params.Item.receiverGender,
                            cardSetting: {...params.Item.cardSetting},
                            giverId: params.Item.giverId,
                            giverNickName: params.Item.giverNickName,
                            receiverId: params.Item.receiverId,
                            link: params.Item.link,
                            points: params.Item.points,
                            pendingRewardPoints: params.Item.pendingRewardPoints,
                            pendingTradePoints: params.Item.pendingTradePoints,
                            contributors: params.Item.contributors,
                            completePending: params.Item.completePending,
                            historyList: params.Item.historyList,
                            tradePending: params.Item.tradePending,
                            requestItem: params.Item.requestItem,
                            shopItemList: params.Item.shopItemList,
                            questItemList: params.Item.questItemList
                        }
                    });
                }
            });
        }
    });
};