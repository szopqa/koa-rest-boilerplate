const fs = require('fs');
const Router = require('koa-router');

const REST_MODULES_DIR = `${__dirname}/resources`;

const log = msg => console.log(msg);

const registerEndpoint = router => (resourceEndpoint) => {
  const {
    method, path, handler,
  } = resourceEndpoint;

  log(`Registering method ${method} at path ${path}`);

  router[method](path, handler);
};

const setupRest = (service) => {
  const registeredRouters = fs.readdirSync(REST_MODULES_DIR).map((restFile) => {
    const { resourceName, prefix, resourceEndpoints } = require(`${REST_MODULES_DIR}/${restFile}`);

    log(`Loading rest for ${resourceName} with prefix ${prefix}`);

    const resourceRouter = new Router({ prefix });

    resourceEndpoints.forEach(registerEndpoint(resourceRouter, prefix || ''));

    return resourceRouter;
  });

  registeredRouters.forEach((registeredRouter) => {
    service.use(registeredRouter.routes());
    service.use(registeredRouter.allowedMethods());
  });
};

module.exports = { setupRest };
