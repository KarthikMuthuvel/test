// dependencies
var fs = require('fs');
//var async = require('async');
var AWS = require('aws-sdk');
var util = require('util');

// get reference to S3 client 
var s3 = new AWS.S3();
 
exports.handler = function(event) {
    // Read options from the event.
    //console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));
    var srcBucket = event.Records[0].s3.bucket.name;
    // Object key may have spaces or unicode non-ASCII characters.
    var srcKey    =
    decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " ")); 
    
    var params = {
  Bucket: srcBucket, 
  Key: srcKey
 };
  
  s3.getObject(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);
   fs.writeFile('/tmp/filename', data.Body, function(err){
    if(err)
      console.log(err.code, "-", err.message);

  }); 
  
},

 function getItem(response, next){
    //s3(response.event).data(function(err,data){
        var params ={
            TableName : "customerOrderTable",
            Key:{
                customerOrderObjId: "111"
            }
        }
    try{
        DDB.getItem(params).promise();
        console.log(data);
    } catch(err){
        console.log(err);
    }
    }

);}
