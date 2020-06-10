module.exports = {
    experimental: {
      async rewrites() {
        return [
            { source: '/detail/:id', destination: '/detail' }         
        ];
      },
    }
  };