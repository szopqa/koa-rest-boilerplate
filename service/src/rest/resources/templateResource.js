const postCreate = (ctx, next) => {
  ctx.body = 'postCreate handler';
  return next();
};

const getSingle = (ctx, next) => {
  ctx.body = 'getSingle handler';
  return next();
};

const deleteSingle = (ctx, next) => {
  ctx.body = 'deleteSingle handler';
  return next();
};

/**
 * Module interface for every future resource
 */
module.exports = {
  resourceName: 'Template Resource',
  prefix: '/templateResource',
  resourceEndpoints: [
    {
      method: 'post', path: '/', handler: postCreate,
    },
    {
      method: 'get', path: '/:id', handler: getSingle,
    },
    {
      method: 'delete', path: '/:id', handler: deleteSingle,
    },
  ],
};
