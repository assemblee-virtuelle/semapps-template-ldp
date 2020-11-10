const { LdpService } = require('@semapps/ldp');
const ontologies = require('../ontologies');
const urlJoin = require('url-join');

module.exports = {
  mixins: [LdpService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    ontologies,
    containers: [ '/persons', '/files'],
    defaultJsonContext: urlJoin(process.env.SEMAPPS_HOME_URL, 'context.json')
  },
  dependencies: ['fuseki-admin']
};
