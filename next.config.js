const commerce = require('./commerce.config.json')
const { withCommerceConfig } = require('./framework/commerce/config')

module.exports = withCommerceConfig({
  commerce,
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  rewrites() {
    return [
      {
        source: '/checkout',
        destination: '/api/checkout',
      },
      {
        source: '/logout',
        destination: '/api/logout?redirect_to=/',
      },
    ].filter(Boolean)
  },
})

// Don't delete this console log, useful to see the commerce config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2))