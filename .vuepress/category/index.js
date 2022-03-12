const architecture = require('./architecture')
const hyperledger = require('./hyperledger')
const blockchain = require('./blockchain')
const golang = require('./golang')
const docker = require('./docker')
const java = require('./java')
const kafka = require('./kafka')
const linux = require('./linux')
const nodejs = require('./nodejs')
const python = require('./python')
const db = require('./db')

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
  python,
  db,
]
