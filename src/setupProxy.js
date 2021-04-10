const createProxyMiddleware = require('http-proxy-middleware');

const twitterApiBaseUrl = 'https://api.twitter.com';
const twitterApiToken = process.env.REACT_APP_TWITTER_API_TOKEN;

module.exports = (app) => {
  app.use(
    '/twitterapi',
    createProxyMiddleware({
      target: twitterApiBaseUrl,
      changeOrigin: true,
      headers: {
        Authorization: 'Bearer none'
      },
      pathRewrite: {
        '^/twitterapi': ''
      },
      onProxyReq: (proxyReq, req) => {
        proxyReq.setHeader('Authorization', `Bearer ${twitterApiToken}`)
      }
    }),
  );
};
