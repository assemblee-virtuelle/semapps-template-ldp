const ApiGatewayService = require('moleculer-web');

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    server: true,
    cors: {
      origin: '*',
      exposedHeaders: '*'
    }
  },
  dependencies: ['ldp'],
  async started() {
    [
      ...(await this.broker.call('ldp.getApiRoutes')),
    ].forEach(route => this.addRoute(route));
  }
};