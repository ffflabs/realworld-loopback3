module.export = {
  auth: {
    'loopback#token': {
      params: {
        currentUserLiteral: 'me',
        model: 'token'
      }
    }
  },
  'final:after': {
    'strong-error-handler': {
      params: {
        debug: true,
        log: true
      }
    }
  }
};
