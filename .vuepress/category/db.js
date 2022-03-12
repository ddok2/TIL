const title = 'db'
const url = `/${title}`

const lmdbTitle = 'lmdb'
const lmdbUrl = `${url}/${lmdbTitle}`
const lmdbChild = [
  'what-is-lmdb',
].map(p => `${lmdbUrl}/${p}`)

module.exports = {
  title,
  children: [
    {
      title: lmdbTitle,
      children: lmdbChild,
    },
  ],
}
