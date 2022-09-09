const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const params = {
        Item: {
            "itemId": `shopItem-${context.awsRequestId}`,
            "itemDescription": event.itemDescription,
            "itemName": event.itemName,
            "points": event.points,
            "image": event.image
        },
        TableName: "paf-card"
    };
    dynamodb.put(params, function(err, data){
        if(err){
            console.log(err);
            callback(err);
        } else {
            callback(null, { status: 200, upload_status: 'success' });
        }
    });
};
