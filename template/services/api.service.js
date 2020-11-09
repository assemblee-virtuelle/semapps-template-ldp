const ApiGatewayService = require('moleculer-web');
{{#sparqlEndpoint}}
const { Routes: SparqlEndpointRoutes } = require('@semapps/sparql-endpoint');
{{/sparqlEndpoint}}

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    server: true,
    routes: [
      {
        path: new URL(process.env.SEMAPPS_HOME_URL).pathname +'context.json',
        use: [
          ApiGatewayService.serveStatic('./public/context.json', {
            setHeaders: res => {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Content-Type', 'application/ld+json; charset=utf-8');
            }
          })
        ]
      }
    ],
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
