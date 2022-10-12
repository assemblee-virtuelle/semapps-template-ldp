const { TripleStoreService } = require('@semapps/triplestore');
const CONFIG = require('../config/config');

module.exports = {
  mixins: [TripleStoreService],
  settings: {
    url: CONFIG.SPARQL_ENDPOINT,
    mainDataset: CONFIG.MAIN_DATASET,
    user: CONFIG.JENA_USER,
    password: CONFIG.JENA_PASSWORD
  },
  async started() {
    await this.broker.call('triplestore.dataset.create', {
      dataset: process.env.SEMAPPS_MAIN_DATASET,
{{#webAcl}}
      secure: true
{{/webAcl}}
{{^webAcl}}
      secure: false
{{/webAcl}}
    });
  }
};
