const title = 'hyperledger'
const url = `/${title}`

const fabricTitle = 'fabric'
const fabricUrl = `${url}/${fabricTitle}`
const fabricChild = [
  '01.what-is-blockchain',
  'about-docker-images',
  'about-v2.2',
  'batchTimeout-performance-test',
  'chaincode-upgrade',
  'couchdb-vs-leveldb',
  'execute-order-validate-vs-raft',
  'mvcc-read-conflict',
  'v1.4-vs-v2.2',
].map(p => `${fabricUrl}/${p}`)

const meetupTitle = 'meetup'
const meetupUrl = `${url}/${meetupTitle}`
const meetupChild = [
  'hf-meetup-190128',
  'hf-meetup-190219',
  'hf-meetup-190321',
  'hf-meetup-190417',
  'hf-meetup-190524',
  'hf-meetup-190627',
  'hf-meetup-190731',
  'hf-meetup-190822',
  'hf-meetup-190921',
  'hf-meetup-191017',
  'hf-meetup-200122',
  'hf-meetup-200423',
  'hf-meetup-200820',
].map(p => `${meetupUrl}/${p}`)

module.exports = {
  title,
  children: [
    {
      title: fabricTitle,
      children: fabricChild,
    },
    {
      title: meetupTitle,
      path: meetupUrl,
      children: meetupChild,
    },
  ],
}
