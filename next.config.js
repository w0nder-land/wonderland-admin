module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: 'https://admin.w0nderland.co.kr/graphql',
      },
    ];
  },
};
