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
        destination: 'https://admin.w0nderland.co.kr/graphql',
        // 'https://api.github.com/graphql',
        // 'https://swapi-graphql.netlify.app/.netlify/functions/index',
      },
    ];
  },
};
