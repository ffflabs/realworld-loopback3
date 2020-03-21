
module.exports = function(Favorites) {

/**
 * Favorite an article. Auth is required
 * @param {string} slug Slug of the article that you want to favorite
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {SingleArticleResponse} result Result object
 */
Favorites.createArticleFavorite = function(slug, callback) {

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
 * Unfavorite an article. Auth is required
 * @param {string} slug Slug of the article that you want to unfavorite
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {SingleArticleResponse} result Result object
 */
Favorites.deleteArticleFavorite = function(slug, callback) {

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




Favorites.remoteMethod('createArticleFavorite',
  { isStatic: true,
  accepts:
   [ { arg: 'slug',
       type: 'string',
       description: 'Slug of the article that you want to favorite',
       required: true,
       http: { source: 'path' } } ],
  returns:
   [ { description: 'OK',
       type: 'SingleArticleResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/articles/:slug/favorite' },
  description: 'Favorite an article. Auth is required' }
);

Favorites.remoteMethod('deleteArticleFavorite',
  { isStatic: true,
  accepts:
   [ { arg: 'slug',
       type: 'string',
       description: 'Slug of the article that you want to unfavorite',
       required: true,
       http: { source: 'path' } } ],
  returns:
   [ { description: 'OK',
       type: 'SingleArticleResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'delete', path: '/articles/:slug/favorite' },
  description: 'Unfavorite an article. Auth is required' }
);

}
