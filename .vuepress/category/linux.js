const title = 'linux'
const url = `/${title}`

const children = [
  'aws-disk-resize',
].map(p => `${url}/${p}`)

const ubuntuTitle = 'ubuntu'
const ubuntuUrl = `${url}/${ubuntuTitle}`
const ubuntuChild = [
  'apt-get-command',
  'access-ubuntu18.04-via-VNC-from-mac',
].map(p => `${ubuntuUrl}/${p}`)

module.exports = {
  title,
  children: [
    ...children,
    {
      title: ubuntuTitle,
      children: ubuntuChild,
    },
  ],
}
