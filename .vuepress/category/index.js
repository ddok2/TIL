const architecture = require('./architecture')
const hyperledger = require('./hyperledger')
const blockchain = require('./blockchain')
const golang = require('./golang')
const docker = require('./docker')
const java = require('./java')
const kafka = require('./kafka')
const linux = require('./linux')
const nodejs = require('./nodejs')

module.exports = [
  '/',
  architecture,
  hyperledger,
  blockchain,
  golang,
  docker,
  java,
  kafka,
  linux,
  nodejs,
]
