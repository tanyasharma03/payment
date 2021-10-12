const { createProxyMiddleware } = require('http-proxy-middleware'​);


module.exports = function(app) {
  app.use(
    '​/api'​,
    createProxyMiddleware({
      target: 'https://sandboxsecure.payu.in/_payment'​,
      changeOrigin: true,
  })
);
};
