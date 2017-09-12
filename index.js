'use strict'

const aws = require('aws-sdk');
const fs = require("fs");

// provide your access id, key and region.
aws.config.update({
    accessKeyId: '<keyid>', 
    secretAccessKey: '<accesskey>', 
    region:'<region>'
});

var lambda = new aws.Lambda();

// lambda function input, shall set events object.
var jsonPayload = {};

var lambdaDefination = {
  FunctionName: '<arn>',    // required
  Payload: jsonPayload      // optional, base on lambda implementation.
};

// calling lambda now
lambda.invoke(lambdaDefination, (err, result)=>{
    if (err) 
        console.log("Failed");
        // do something
    else
        console.log("Success");
        // do something
});
