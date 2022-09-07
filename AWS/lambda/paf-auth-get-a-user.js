const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const params = {
        TableName : 'paf-user',
        Key: { 
            UserId : event.UserId 
        },
    };

    dynamodb.get(params, (err, data) => {
    if (err) console.log(err);
    const fillGivingListParams = data.Item.givingList ? data.Item.givingList.map(id => { return { CardId: id}}) : [];
    const fillReceiveListParams = data.Item.receivingList ? data.Item.receivingList.map(id => { return { CardId: id}}) : [];
    const fillReceivingPendingList = data.Item.receivingPendingList ? data.Item.receivingPendingList.map(id => { return { CardId: id}}) : [];
    const cardParams = {
        RequestItems: {
            'paf-card': {Keys: fillGivingListParams.concat(fillReceiveListParams).concat(fillReceivingPendingList)}
        }
    };

    const shopStoreList = (data.Item.shopStoreList !== undefined) ? data.Item.shopStoreList : [];
    const shoppingList = (data.Item.shoppingList !== undefined) ? data.Item.shoppingList : [];
    dynamodb.batchGet(cardParams, function(error, fulldata) {
            if (error) console.log(error);
            else {
                const fullCardData = fulldata.Responses["paf-card"];
                const giving = (data.Item.givingList ) ? fullCardData.filter(list => (data.Item.givingList).includes(list.CardId)) : [];
                const receiving = (data.Item.receivingList) ? fullCardData.filter(list => (data.Item.receivingList).includes(list.CardId)) : [];
                const receivingPending = (data.Item.receivingPendingList) ? fullCardData.filter(list => (data.Item.receivingPendingList).includes(list.CardId)) : [];

                callback(null, {
                    UserId: data.Item.UserId,
                    userName: data.Item.userName, 
                    givingList: giving, 
                    receivingList: receiving, 
                    receivingPendingList: receivingPending,
                    shopStoreList,
                    shoppingList
                });
            }
        });

    });
};