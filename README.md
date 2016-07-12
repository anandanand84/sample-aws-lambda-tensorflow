# sample-aws-lambda-tensorflow

## Prerequisite

This sample assumes you have aws cli installed and configured to use ap-southeast-2 (Update gulp file [here](https://github.com/anandanand84/sample-aws-lambda-tensorflow/blob/master/gulpfile.js#L20-L25) if different region). Create a role for the lambda function and update it [here](https://github.com/anandanand84/sample-aws-lambda-tensorflow/blob/master/gulpfile.js#L15)

## Install

Clone the project.

```
npm install
```

## Uploading the function.

```
gulp
```

By default it will upload simple_add.py to the aws lambda with the required lambda tensorflow dependency. If you want to upload your own function. Add file and update the gulpfile.js

## Testing the uploaded function.

```
node test.js
```

By default it will execute the lambda function simple_add.py with required inputs. For your custom test or input data, edit the test.js
