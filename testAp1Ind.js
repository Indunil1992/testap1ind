let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_k1hHHeTr4",
            Limit: 10
        }).promise();
console.log("dataa")
console.log(data)
    } catch (err) {
        console.log("errrrrrrr")
console.log(err)
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};