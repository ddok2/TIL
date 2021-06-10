const moment = require('moment')
const sidebar = require('./category')

const logo = 'https://avatars.githubusercontent.com/' +
  'u/7994231?s=400&u=f96731a6bf1792683b6438798d1421cb57999654&v=4'
const tilUrl = 'https://github.com/ddok2/TIL'

module.exports = {
  title: `SUNG.TIL`,
  description: 'Today I learned',
  themeConfig: {
    logo,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Repository', link: tilUrl },
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
    [
      '@vuepress/last-updated', {
      transformer: (timestamp) => {
        moment.locale('ko')
        return moment(timestamp).fromNow()
      },
    }],
    '@vuepress/back-to-top',
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],
    ['sitemap', { hostname: tilUrl }],
  ],
}
