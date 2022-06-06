module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn2.thecatapi.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/18',
        permanent: false,
      },
    ]
  }, 
}
