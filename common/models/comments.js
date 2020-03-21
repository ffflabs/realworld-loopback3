
module.exports = function(Comments) {

/**
 * Get the comments for an article. Auth is optional
 * @param {string} slug Slug of the article that you want to get comments for
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {MultipleCommentsResponse} result Result object
 */
Comments.getArticleComments = function(slug, callback) {

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
 * Create a comment for an article. Auth is required
 * @param {string} slug Slug of the article that you want to create a comment for
 * @param {NewCommentRequest} comment Comment you want to create
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {SingleCommentResponse} result Result object
 */
Comments.createArticleComment = function(slug, comment, callback) {

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
 * Delete a comment for an article. Auth is required
 * @param {string} slug Slug of the article that you want to delete a comment for
 * @param {number} id ID of the comment you want to delete
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Comments.deleteArticleComment = function(slug, id, callback) {

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




Comments.remoteMethod('getArticleComments',
  { isStatic: true,
  accepts:
   [ { arg: 'slug',
       type: 'string',
       description: 'Slug of the article that you want to get comments for',
       required: true,
       http: { source: 'path' } } ],
  returns:
   [ { description: 'OK',
       type: 'MultipleCommentsResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/articles/:slug/comments' },
  description: 'Get the comments for an article. Auth is optional' }
);

Comments.remoteMethod('createArticleComment',
  { isStatic: true,
  accepts:
   [ { arg: 'slug',
       type: 'string',
       description: 'Slug of the article that you want to create a comment for',
       required: true,
       http: { source: 'path' } },
     { arg: 'comment',
       type: 'NewCommentRequest',
       description: 'Comment you want to create',
       required: true,
       http: { source: 'body' } } ],
  returns:
   [ { description: 'OK',
       type: 'SingleCommentResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/articles/:slug/comments' },
  description: 'Create a comment for an article. Auth is required' }
);

Comments.remoteMethod('deleteArticleComment',
  { isStatic: true,
  accepts:
   [ { arg: 'slug',
       type: 'string',
       description: 'Slug of the article that you want to delete a comment for',
       required: true,
       http: { source: 'path' } },
     { arg: 'id',
       type: 'number',
       description: 'ID of the comment you want to delete',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'delete', path: '/articles/:slug/comments/:id' },
  description: 'Delete a comment for an article. Auth is required' }
);

}
