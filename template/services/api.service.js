const ApiGatewayService = require('moleculer-web');
{{#sparqlEndpoint}}
const { Routes: SparqlEndpointRoutes } = require('@semapps/sparql-endpoint');
{{/sparqlEndpoint}}

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    server: true,
{{#sparqlEndpoint}}
    routes: [...SparqlEndpointRoutes],
{{/sparqlEndpoint}}
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