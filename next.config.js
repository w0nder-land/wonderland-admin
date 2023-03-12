module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination:
          'http://wonderland-env-admin.ap-northeast-2.elasticbeanstalk.com/graphql',
        // 'https://api.github.com/graphql',
        // 'https://swapi-graphql.netlify.app/.netlify/functions/index',
      },
    ];
  },
};
