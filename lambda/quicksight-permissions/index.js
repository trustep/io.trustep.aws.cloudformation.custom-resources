// var https = require("https");
// var url = require("url");
import https from "https";
import url from "url";

function sendResponse(event, context, responseStatus, responseData) {
 
    var responseBody = JSON.stringify({
        Status: responseStatus,
        Reason: "See the details in CloudWatch Log Stream: " + context.logStreamName,
        PhysicalResourceId: context.logStreamName,
        StackId: event.StackId,
        RequestId: event.RequestId,
        LogicalResourceId: event.LogicalResourceId,
        Data: responseData
    });
 
    console.log("RESPONSE BODY:\n", responseBody);
 
    var parsedUrl = url.parse(event.ResponseURL);
    var options = {
        hostname: parsedUrl.hostname,
        port: 443,
        path: parsedUrl.path,
        method: "PUT",
        headers: {
            "content-type": "",
            "content-length": responseBody.length
        }
    };
 
    console.log("SENDING RESPONSE...\n");
 
    var request = https.request(options, function(response) {
        console.log("STATUS: " + response.statusCode);
        console.log("HEADERS: " + JSON.stringify(response.headers));
        // Tell AWS Lambda that the function execution is done  
        context.done();
    });
 
    request.on("error", function(error) {
        console.log("sendResponse Error:" + error);
        // Tell AWS Lambda that the function execution is done  
        context.done();
    });
  
    // write data to request body
    request.write(responseBody);
    request.end();
}

export async function handler(event, context) {
    console.log("REQUEST RECEIVED:\n" + JSON.stringify(event));
    console.log("CONTEXT RECEIVED:\n" + JSON.stringify(context));

    var responseStatus = "FAILED";
    
    // For Delete requests, immediately send a SUCCESS response.
    if (event.RequestType == "Create") {
        sendResponse(event, context, "SUCCESS");
        return;
    } else if (event.RequestType == "Update") {
        sendResponse(event, context, "SUCCESS");
        return;
    } else if (event.RequestType == "Delete") {
        sendResponse(event, context, "SUCCESS");
        return;
    }
 
    var responseData = {
        Status: responseStatus,
        Reason: "Impossible to process request"
    };

    sendResponse(event, context, responseStatus, responseData);
}

// var context = {
//     logStreamName: "logStreamName",
//     done: function (param) {
//         console.log("Done!")
//         return param;
//     }
// }
// var event = {
//     RequestType: "Delete",
//     ResponseURL: "https://www.trustep.io"
// }
// await handler(event, context);