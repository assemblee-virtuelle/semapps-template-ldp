const { VoidService } = require('@semapps/void');
const CONFIG = require('../config/config');
const ontologies = require('../config/ontologies.json');

module.exports = {
  mixins: [VoidService],
  settings: {
    baseUrl: CONFIG.HOME_URL,
    ontologies
  }
};
