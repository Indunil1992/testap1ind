let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_k1hHHeTr4",
            AttributesToGet: ['sub', 'name', 'given_name', 'family_name', 'middle_name', 'nickname', 'preferred_username', 'profile', 'picture', 'website', 'email', 'email_verified', 'gender', 'birthdate', 'zoneinfo', 'locale', 'phone_number', 'phone_number_verified', 'address', 'updated_at'],
            Limit: 100
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