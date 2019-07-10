const postCreate = (ctx, next) => {
  ctx.body = 'postCreate handler';
  return next();
};

const getSingle = (ctx, next) => {
  ctx.body = 'getSingle handler';
  return next();
};

const getSingleCustom = (ctx, next) => {
  ctx.body = 'getSingleCustom handler';
  return next();
};

const deleteSingle = (ctx, next) => {
  ctx.body = 'deleteSingle handler';
  return next();
};

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
      method: 'get', path: '/:id', handler: getSingleCustom,
    },
    {
      method: 'delete', path: '/:id', handler: deleteSingle,
    },
  ],
};
