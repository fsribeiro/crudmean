const proxy = [
    {
      context: '/api',
      target: 'http://localhost:3000/pessoas/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;