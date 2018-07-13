var poolData = {
  UserPoolId : '...', // your user pool id here
  ClientId : '...' // your app client id here
};
var userPool = 
new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
  Username : '...', // your username here
  Pool : userPool
};
