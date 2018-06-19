module.exports = {
  root: './www',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /\/$/,
    handler: 'networkFirst'
  }]
};
