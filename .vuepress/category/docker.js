const title = 'docker'
const url = '/docker'

const children = [
  'docker-command',
  'install-kubeadm',
  'micro-k8s-monitoring',
].map(p => `${url}/${p}`)

module.exports = {
  title,
  children,
}
