const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://my-django-app.herokuapp.com', // Zmień na swój backend!
      changeOrigin: true,
    })
  );
};
