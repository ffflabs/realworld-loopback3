// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback'),
  boot = require('loopback-boot'),
  app = loopback(),
  debug = require('debug')('realworld-loopback3:server'),
  chalk = require('chalk'),
  auth = require('./middlewares/jwt_auth.js')(
    app,
    {
      model: 'user',
      key: 'username',
      unless: req => {
        let {method, path, originalUrl} = req || {};
        debug({unless: {method, path, originalUrl}});

        let isallowed =
          method === 'GET' ||
          //originalUrl.test(/api\/users/) ||
          (method === 'POST' && /users/.test(originalUrl));
        debug({isallowed: isallowed});

        return isallowed;
      },

      password: 'realworld_secret_so_secure',
      secretKey: 'realworld_secret_so_secure'
    },
    {
      secret: () => {
        return 'realworld_secret_so_secure';
      },
      algorithms: ['RS256'],
      getToken: function fromHeaderOrQuerystring(req) {
        if (
          req.headers.authorization &&
          req.headers.authorization.split(' ')[0] === 'Token'
        ) {
          return req.headers.authorization.split(' ')[1];
        }
        return null;
      }
    }
  ),
  {authenticated} = auth,
  [checkJwt, mapUser] = authenticated;
debug(chalk.red('WHAAA'));
//debug({checkJwt: checkJwt.toString(), mapUser: mapUser.toString()});
app.use('/api/users', function(req, res, next) {
  let {body = {}, headers, path, route, originalUrl} = req || {},
    {user} = body || {},
    {username, email, password} = user || {};
  req.body = {email, password, ...body};
  if (username) {
    req.body.username = username;
  }
  debug('before login or register', {body: req.body});
  next();
});

app.use('/', auth.authenticated, function(req, res, next) {
  debug('has valid token', req.user);
  next();
});

// catch error
app.use(function(err, req, res, next) {
  let {body, headers, path, route, originalUrl} = req;
  debug('FAIL', {body, headers, path, route, originalUrl});
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token, or no token supplied');
  } else {
    res.status(401).send(err);
  }
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    debug('Web server listening at: %s', chalk.bold.green(baseUrl));
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      debug(
        'Browse your REST API at %s%s',
        baseUrl,
        chalk.bold.green(explorerPath)
      );
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) {
    throw err;
  }

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});
module.exports = app;
