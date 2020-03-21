
module.exports = function(Profile) {

/**
 * Get a profile of a user of the system. Auth is optional
 * @param {string} username Username of the profile to get
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ProfileResponse} result Result object
 */
Profile.getProfileByUsername = function(username, callback) {

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
 * Follow a user by username
 * @param {string} username Username of the profile you want to follow
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ProfileResponse} result Result object
 */
Profile.followUserByUsername = function(username, callback) {

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
 * Unfollow a user by username
 * @param {string} username Username of the profile you want to unfollow
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ProfileResponse} result Result object
 */
Profile.unfollowUserByUsername = function(username, callback) {

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




Profile.remoteMethod('getProfileByUsername',
  { isStatic: true,
  accepts:
   [ { arg: 'username',
       type: 'string',
       description: 'Username of the profile to get',
       required: true,
       http: { source: 'path' } } ],
  returns:
   [ { description: 'OK',
       type: 'ProfileResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/profiles/:username' },
  description: 'Get a profile of a user of the system. Auth is optional' }
);

Profile.remoteMethod('followUserByUsername',
  { isStatic: true,
  accepts:
   [ { arg: 'username',
       type: 'string',
       description: 'Username of the profile you want to follow',
       required: true,
       http: { source: 'path' } } ],
  returns:
   [ { description: 'OK',
       type: 'ProfileResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/profiles/:username/follow' },
  description: 'Follow a user by username' }
);

Profile.remoteMethod('unfollowUserByUsername',
  { isStatic: true,
  accepts:
   [ { arg: 'username',
       type: 'string',
       description: 'Username of the profile you want to unfollow',
       required: true,
       http: { source: 'path' } } ],
  returns:
   [ { description: 'OK',
       type: 'ProfileResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'delete', path: '/profiles/:username/follow' },
  description: 'Unfollow a user by username' }
);

}
