const title = 'golang'
const url = '/golang'

const path = [
  'go-test-cover',
  'patterns-in-golang-select',
]

module.exports = {
  title,
  children: path.map(p => `${url}/${p}`),
}
