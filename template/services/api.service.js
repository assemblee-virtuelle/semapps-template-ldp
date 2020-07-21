const ApiGatewayService = require('moleculer-web');
{{#sparqlEndpoint}}
const { Routes: SparqlEndpointRoutes } = require('@semapps/sparql-endpoint');
{{/sparqlEndpoint}}

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    server: true,
    routes: [],
    cors: {
      origin: '*',
      exposedHeaders: '*'
    }
  },
  dependencies: [
    'ldp',
{{#sparqlEndpoint}}
    'sparqlEndpoint',
{{/sparqlEndpoint}}
  ],
  async started() {
    [
      ...(await this.broker.call('ldp.getApiRoutes')),
{{#sparqlEndpoint}}
      ...(await this.broker.call('sparqlEndpoint.getApiRoutes')),
{{/sparqlEndpoint}}
    ].forEach(route => this.addRoute(route));
  }
};
