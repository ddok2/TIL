const title = 'kafka'
const url = `/${title}`

const children = [
  'what-is-kafka',
].map(p => `${url}/${p}`)

module.exports = {
  title,
  children,
}
