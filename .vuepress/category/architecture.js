const title = 'architecture'
const url = '/architecture'

const path = [
  'oauth2-overview',
  'prpl-pattern',
]

module.exports = {
  title,
  children: path.map(p => `${url}/${p}`),
}
