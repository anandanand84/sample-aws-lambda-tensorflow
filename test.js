'use strict';
var       aws = require('aws-sdk');
var       Promise = require('bluebird');
var       co      = require('co');
var lambda = new aws.Lambda({
  region: 'ap-southeast-2' //change to your region
});

Promise.promisifyAll(Object.getPrototypeOf(lambda) , {suffix: "WithPromise"});

co(function *(){
    try{
        let data = yield lambda.invokeWithPromise({
                  FunctionName: 'addtensorflow',
                  Payload: JSON.stringify({
                   a : 10,
                   b : 20
                  })
            });
            console.log('complete');
            console.log(data);
    }catch(err) {
        console.error(err);
    }
})