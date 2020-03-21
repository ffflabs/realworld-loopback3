
module.exports = function(SwaggerModel) {

/**
 * Get tags. Auth not required

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {TagsResponse} result Result object
 */
SwaggerModel.getTags = function(callback) {

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




SwaggerModel.remoteMethod('getTags',
  { isStatic: true,
  accepts: [],
  returns:
   [ { description: 'OK',
       type: 'TagsResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/tags' },
  description: 'Get tags. Auth not required' }
);

}
