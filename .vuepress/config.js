const moment = require('moment')
const sidebar = require('./category')

const logo = 'https://avatars.githubusercontent.com/' +
  'u/7994231?s=400&u=f96731a6bf1792683b6438798d1421cb57999654&v=4'

module.exports = {
  title: `SUNG.TIL`,
  description: 'Today I learned',
  themeConfig: {
    logo,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Repository', link: 'https://github.com/ddok2/TIL' },
    ],
    sidebar,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
  },
  base: '/TIL/',
  head: [
    ['link', { rel: 'icon', href: `/images/favicon.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],
    ['sitemap', { hostname: 'https://ddok2.github.io/TIL' }],
  ],
}
