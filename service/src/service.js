const Koa = require('koa');
const config = require('config');
const restLoader = require('./rest/restLoader');

const databaseClient = require('./database/databaseClient');

const create = () => {
  const service = new Koa();

  service.context.db = databaseClient.initialize(config.get('database'));

  restLoader.setupRest(service);

  service.listen(config.get('service.port'));
};

module.exports = { create };
