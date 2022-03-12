const title = 'python'
const url = `/${title}`

const children = [
  'python-install-fail',
].map(p => `${url}/${p}`)

module.exports = {
  title,
  children,
}
