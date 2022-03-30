const title = 'nodejs'
const url = `/${title}`

const v4Title = 'v4.x'
const v4Url = `${url}/${v4Title}`

const children = [
  'mongoose-schema-es6',
  'node-gyp-error',
  'nodejs-https',
  'nodejs-security-overview',
  'nvm-version-control',
  'top10-common-mistakes',
  'npm-config-set',
].map(p => `${url}/${p}`)

const v4Child = [
  'add-job-into-eventemitter',
].map(p => `${v4Url}/${p}`)

module.exports = {
  title,
  children: [
    {
      title: v4Title,
      children: v4Child,
    },
    ...children,
  ],
}
