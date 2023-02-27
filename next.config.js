/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination:
          'http://wonderland-env-admin.ap-northeast-2.elasticbeanstalk.com/graphql',
      },
    ];
  },
};
