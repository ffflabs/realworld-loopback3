'use strict';
const debug = require('debug')('realworld-loopback3:server'),
  chalk = require('chalk'),
  password = 'realworld_secret_so_secure',
  jwt = require('jsonwebtoken');

// https://github.com/auth0/node-jsonwebtoken
module.exports = function(User) {
  User.beforeRemote('login', async function(ctx) {
    let { req } = ctx || {},
      { body } = req || {},
      { email, password } = body || {};

    req.body = { email, password, ...body };

    return;
  });

  User.beforeRemote('create', async function(ctx) {
    let { req } = ctx || {},
      { body } = req || {},
      { username, email, password } = body.user,
      bio = `This is the bio for ${username}`;
    req.body = { email, password, username, bio, ...body };

    return;
  });
  User.afterRemote('login', async function(ctx) {
    let { result } = ctx,
      user = await result.user.get();
    //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    result = { user, ...result };
    debug({ result, user });
    return result;
  });
};
