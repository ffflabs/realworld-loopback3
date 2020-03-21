
module.exports = function(user_and_Authentication) {

/**
 * Login for existing user
 * @param {LoginUserRequest} body Credentials to use
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {UserResponse} result Result object
 */
user_and_Authentication.login = function(body, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Unauthorized');
  err0.statusCode = 401;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Unexpected error');
  err1.statusCode = 422;
  return cb(err1);
  */ 
}


/**
 * Register a new user
 * @param {NewUserRequest} body Details of the new user to register
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {UserResponse} result Result object
 */
user_and_Authentication.createUser = function(body, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Unexpected error');
  err0.statusCode = 422;
  return cb(err0);
  */ 
}


/**
 * Gets the currently logged-in user

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {UserResponse} result Result object
 */
user_and_Authentication.getCurrentUser = function(callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Unauthorized');
  err0.statusCode = 401;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Unexpected error');
  err1.statusCode = 422;
  return cb(err1);
  */ 
}


/**
 * Updated user information for current user
 * @param {UpdateUserRequest} body user details to update. At least **one** field is required.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {UserResponse} result Result object
 */
user_and_Authentication.updateCurrentUser = function(body, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Unauthorized');
  err0.statusCode = 401;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Unexpected error');
  err1.statusCode = 422;
  return cb(err1);
  */ 
}




user_and_Authentication.remoteMethod('login',
  { isStatic: true,
  accepts:
   [ { arg: 'body',
       type: 'LoginUserRequest',
       description: 'Credentials to use',
       required: true,
       http: { source: 'body' } } ],
  returns:
   [ { description: 'OK',
       type: 'UserResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/users/login' },
  description: 'Login for existing user' }
);

user_and_Authentication.remoteMethod('createUser',
  { isStatic: true,
  accepts:
   [ { arg: 'body',
       type: 'NewUserRequest',
       description: 'Details of the new user to register',
       required: true,
       http: { source: 'body' } } ],
  returns:
   [ { description: 'OK',
       type: 'UserResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/users' },
  description: 'Register a new user' }
);

user_and_Authentication.remoteMethod('getCurrentUser',
  { isStatic: true,
  accepts: [],
  returns:
   [ { description: 'OK',
       type: 'UserResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/users' },
  description: 'Gets the currently logged-in user' }
);

user_and_Authentication.remoteMethod('updateCurrentUser',
  { isStatic: true,
  accepts:
   [ { arg: 'body',
       type: 'UpdateUserRequest',
       description:
        'user details to update. At least **one** field is required.',
       required: true,
       http: { source: 'body' } } ],
  returns:
   [ { description: 'OK',
       type: 'UserResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'put', path: '/users' },
  description: 'Updated user information for current user' }
);

}
