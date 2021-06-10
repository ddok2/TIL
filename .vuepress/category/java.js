const title = 'java'
const url = `/${title}`

const children = [
  'iso8601-with-milliseconds-in-json-using-jackson',
  'jackson-ignore-field',
  'java8-foreach-examples',
  'parse-url-querystring',
].map(p => `${url}/${p}`)

module.exports = {
  title,
  children,
}
