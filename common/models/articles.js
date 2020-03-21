
module.exports = function(Articles) {

/**
 * Get most recent articles from users you follow. Use query parameters to limit. Auth is required
 * @param {number} limit Limit number of articles returned (default is 20)
 * @param {number} offset Offset/skip number of articles (default is 0)
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {MultipleArticlesResponse} result Result object
 */
Articles.getArticlesFeed = function(limit, offset, callback) {

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
 * Get most recent articles globally. Use query parameters to filter results. Auth is optional
 * @param {string} tag Filter by tag
 * @param {string} author Filter by author (username)
 * @param {string} favorited Filter by favorites of a user (username)
 * @param {number} limit Limit number of articles returned (default is 20)
 * @param {number} offset Offset/skip number of articles (default is 0)
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {MultipleArticlesResponse} result Result object
 */
Articles.getArticles = function(tag, author, favorited, limit, offset, callback) {

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
 * Create an article. Auth is required
 * @param {NewArticleRequest} article Article to create
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {SingleArticleResponse} result Result object
 */
Articles.createArticle = function(article, callback) {

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
 * Get an article. Auth not required
 * @param {string} slug Slug of the article to get
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {SingleArticleResponse} result Result object
 */
Articles.getArticle = function(slug, callback) {

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
 * Update an article. Auth is required
 * @param {string} slug Slug of the article to update
 * @param {UpdateArticleRequest} article Article to update
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {SingleArticleResponse} result Result object
 */
Articles.updateArticle = function(slug, article, callback) {

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
 * Delete an article. Auth is required
 * @param {string} slug Slug of the article to delete
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
Articles.deleteArticle = function(slug, callback) {

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




Articles.remoteMethod('getArticlesFeed',
  { isStatic: true,
  accepts:
   [ { arg: 'limit',
       type: 'number',
       description: 'Limit number of articles returned (default is 20)',
       required: false,
       http: { source: 'query' } },
     { arg: 'offset',
       type: 'number',
       description: 'Offset/skip number of articles (default is 0)',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: 'MultipleArticlesResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/feed' },
  description:
   'Get most recent articles from users you follow. Use query parameters to limit. Auth is required' }
);

Articles.remoteMethod('getArticles',
  { isStatic: true,
  accepts:
   [ { arg: 'tag',
       type: 'string',
       description: 'Filter by tag',
       required: false,
       http: { source: 'query' } },
     { arg: 'author',
       type: 'string',
       description: 'Filter by author (username)',
       required: false,
       http: { source: 'query' } },
     { arg: 'favorited',
       type: 'string',
       description: 'Filter by favorites of a user (username)',
       required: false,
       http: { source: 'query' } },
     { arg: 'limit',
       type: 'number',
       description: 'Limit number of articles returned (default is 20)',
       required: false,
       http: { source: 'query' } },
     { arg: 'offset',
       type: 'number',
       description: 'Offset/skip number of articles (default is 0)',
       required: false,
       http: { source: 'query' } } ],
  returns:
   [ { description: 'OK',
       type: 'MultipleArticlesResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '' },
  description:
   'Get most recent articles globally. Use query parameters to filter results. Auth is optional' }
);

Articles.remoteMethod('createArticle',
  { isStatic: true,
  accepts:
   [ { arg: 'article',
       type: 'NewArticleRequest',
       description: 'Article to create',
       required: true,
       http: { source: 'body' } } ],
  returns:
   [ { description: 'OK',
       type: 'SingleArticleResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '' },
  description: 'Create an article. Auth is required' }
);

Articles.remoteMethod('getArticle',
  { isStatic: true,
  accepts:
   [ { arg: 'slug',
       type: 'string',
       description: 'Slug of the article to get',
       required: true,
       http: { source: 'path' } } ],
  returns:
   [ { description: 'OK',
       type: 'SingleArticleResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/:slug' },
  description: 'Get an article. Auth not required' }
);

Articles.remoteMethod('updateArticle',
  { isStatic: true,
  accepts:
   [ { arg: 'slug',
       type: 'string',
       description: 'Slug of the article to update',
       required: true,
       http: { source: 'path' } },
     { arg: 'article',
       type: 'UpdateArticleRequest',
       description: 'Article to update',
       required: true,
       http: { source: 'body' } } ],
  returns:
   [ { description: 'OK',
       type: 'SingleArticleResponse',
       arg: 'data',
       root: true } ],
  http: { verb: 'put', path: '/:slug' },
  description: 'Update an article. Auth is required' }
);

Articles.remoteMethod('deleteArticle',
  { isStatic: true,
  accepts:
   [ { arg: 'slug',
       type: 'string',
       description: 'Slug of the article to delete',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'delete', path: '/:slug' },
  description: 'Delete an article. Auth is required' }
);

}
