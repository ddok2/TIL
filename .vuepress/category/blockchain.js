const title = 'blockchain'
const url = `/${title}`

const path = [
  '01.Thingking-in-Layers&Aspects',
  '02.seeing-the-big-picture',
  '03.recognizing-the-potential',
  '04.misson-of-blockchain',
  '05.what-is-blockchain',
  '06.understanding-the-nature-of-ownership',
]

module.exports = {
  title,
  children: path.map(p => `${url}/${p}`),
}
