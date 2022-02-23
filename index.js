var AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  region: "us-west-2",
});

// AWS.config.getCredentials((err) => {
//     if (err) {
//         console.log(err.stack);
//     } else {
//         console.log("Access Key", AWS.config.credentials.accessKeyId);
//     }
// })
let s3 = new AWS.S3({ apiVersion: "latest" });
// s3.listBuckets(function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// });
var bucketParams = {
    Bucket: "hello-test-nodejs-playground"
}
// var bucketParams = {
//     Bucket: "hello-test-nodejs-playground",
//     Key: ''
// }
// var bucketParams = {
//   Bucket: "hello-test-nodejs-playground",
//   Key: "",
//   Body: "",
// };
// var file = "./test.txt"
// var fs = require("fs");
// var fileStream = fs.createReadStream(file);
// fileStream.on("error", function (err) {
//   console.log("File Error", err);
// });
// bucketParams.Body = fileStream;
// var path = require("path");
// bucketParams.Key = path.basename(file);

// call S3 to create the bucket
// s3.createBucket(bucketParams, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Location);
//   }
// });

// call S3 to retrieve upload file to specified bucket
// s3.upload(bucketParams, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   }
//   if (data) {
//     console.log("Upload Success", data.Location);
//   }
// });

// s3.listObjects(bucketParams, function(err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data);
//     }
//   });

s3.deleteBucket(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });

// s3.deleteObject(bucketParams, (err, data) => {
//     if (err) {
//         console.log("Error: ", err)
//     } else {
//         console.log("Success: ", data)
//     }
// })