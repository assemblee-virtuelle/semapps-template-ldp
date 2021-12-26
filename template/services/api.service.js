const ApiGatewayService = require('moleculer-web');
const CONFIG = require('../config');

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    port: CONFIG.PORT,
    cors: {
      origin: '*',
      methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
      exposedHeaders: '*'
    }
  },
  methods: {
    authenticate(ctx, route, req, res) {
{{#webAcl}}  
      return ctx.call('auth.authenticate', { route, req, res });
{{/webAcl}}
    },
    authorize(ctx, route, req, res) {
{{#webAcl}}
      return ctx.call('auth.authorize', { route, req, res });
{{/webAcl}}
    }
  }
};
