/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0ad04f30a831bc82ede8646094d89ac9"
  },
  {
    "url": "architecture/oauth2-overview.html",
    "revision": "4b2ccf99efe3dace65885680d897f3ac"
  },
  {
    "url": "architecture/prpl-pattern.html",
    "revision": "9b5ee88ae15cf27eb3a1b64098e32cb7"
  },
  {
    "url": "assets/css/0.styles.8be3c028.css",
    "revision": "9ccb473a1b5441abc7b03763dbfa9f02"
  },
  {
    "url": "assets/img/190128.44b9bce4.png",
    "revision": "44b9bce4b0dc55916ca5cea8ffa99f0d"
  },
  {
    "url": "assets/img/190219.43dfe97d.png",
    "revision": "43dfe97df530d76e1905c368caa9574e"
  },
  {
    "url": "assets/img/190524.5c9efe87.png",
    "revision": "5c9efe87078a0bc80fb73fc3e8a342b5"
  },
  {
    "url": "assets/img/190822.53497b4a.png",
    "revision": "53497b4a30ba53cac0033f75dd9f3e5a"
  },
  {
    "url": "assets/img/191017-1.f97e802e.png",
    "revision": "f97e802ef78c5ffc40a4f39077485cc5"
  },
  {
    "url": "assets/img/191017-3.555cc44e.png",
    "revision": "555cc44ea4d6fe8d7899ebcb70da0540"
  },
  {
    "url": "assets/img/1s_fabric_sdk_console_results.82818e4e.png",
    "revision": "82818e4e3014956be099fc4c5041ed17"
  },
  {
    "url": "assets/img/210506-1.85d0c912.png",
    "revision": "85d0c91265b9842c903e82fb795f1820"
  },
  {
    "url": "assets/img/210506-2.126b5f13.png",
    "revision": "126b5f1306d9d25950fd47429d6a11c8"
  },
  {
    "url": "assets/img/250ms_fabric_sdk_console_results.19f33eb2.png",
    "revision": "19f33eb23f0b49790930b29c6c43b187"
  },
  {
    "url": "assets/img/2s_fabric_sdk_console_results.8a0cb610.png",
    "revision": "8a0cb610c113ed9e1b0c5f8163f976bd"
  },
  {
    "url": "assets/img/500ms_fabric_sdk_console_results.d3c6498f.png",
    "revision": "d3c6498fbdfd6a2da0d9df9229186e7a"
  },
  {
    "url": "assets/img/c-vs-l01.c65c3038.png",
    "revision": "c65c3038340c7977abaf55e6e1380332"
  },
  {
    "url": "assets/img/image2020-6-9_14-38-20.dad31b18.png",
    "revision": "dad31b18a67089c3c7a75d8f69d726fb"
  },
  {
    "url": "assets/img/image2020-6-9_14-38-37.e09a820d.png",
    "revision": "e09a820d8b798abd7f5a6f5342bb49a3"
  },
  {
    "url": "assets/img/image2020-6-9_15-13-12.abcc6918.png",
    "revision": "abcc6918b1976bc24879f7b2bb38eeb4"
  },
  {
    "url": "assets/img/image2020-6-9_15-6-28.fbb07443.png",
    "revision": "fbb0744350f4638ce1f6852452646bcd"
  },
  {
    "url": "assets/img/kafka_vs_raft_1.ba52def1.png",
    "revision": "ba52def1a0d68edac966e35c5a04526f"
  },
  {
    "url": "assets/img/kafka_vs_raft_2.d1e60209.png",
    "revision": "d1e60209b8fbe2fe14dd8b3e66c400af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c0f429db.js",
    "revision": "a17ff7ed03664999d31078878172969e"
  },
  {
    "url": "assets/js/11.64694bce.js",
    "revision": "bc14cfe6aa8dd7baada6e6070b2887b7"
  },
  {
    "url": "assets/js/12.d46c80ec.js",
    "revision": "bb88e6c2ee46de834796cde1be0e9dbd"
  },
  {
    "url": "assets/js/13.85b9affa.js",
    "revision": "aa28a3b43e5fca57fd20d2a7dedadece"
  },
  {
    "url": "assets/js/14.047d2656.js",
    "revision": "d2f4601b25b2507e88acd007efac982c"
  },
  {
    "url": "assets/js/15.60fe969c.js",
    "revision": "470130f062d4e5574500c3db9daee8d7"
  },
  {
    "url": "assets/js/16.2c67b97b.js",
    "revision": "27a918cdb341511981df40efc96d284b"
  },
  {
    "url": "assets/js/17.c5e1e5c2.js",
    "revision": "849f00773b25ee421603ac71ee5304cf"
  },
  {
    "url": "assets/js/18.9453e1b6.js",
    "revision": "4d1ea4d3cfdc735174330e140115cff3"
  },
  {
    "url": "assets/js/19.54fb7c8d.js",
    "revision": "c22eef8c3ef1686324329f59f74cab61"
  },
  {
    "url": "assets/js/2.9115f16e.js",
    "revision": "0b8a0c2cffc7317eafa4dfb679e44d11"
  },
  {
    "url": "assets/js/20.efc4d22f.js",
    "revision": "54e9d475847336d740873c87df485754"
  },
  {
    "url": "assets/js/21.28344926.js",
    "revision": "8621ebb4cbb106fffcb801efe34a9652"
  },
  {
    "url": "assets/js/22.e8567537.js",
    "revision": "b8c4c56ac327abf75028c60c33ef30c6"
  },
  {
    "url": "assets/js/23.65110134.js",
    "revision": "2e013de3fab9f6e46352aafc4e4e23d3"
  },
  {
    "url": "assets/js/24.fbcd1f5c.js",
    "revision": "1fa8572b53e7b495ea5fd590c15e51aa"
  },
  {
    "url": "assets/js/25.257dccb8.js",
    "revision": "3ddbdba67a24b6fb25b01763d13ba461"
  },
  {
    "url": "assets/js/26.aae6cd74.js",
    "revision": "695396d5b5375e81dbc9f8eab3817cbc"
  },
  {
    "url": "assets/js/27.0a8fc019.js",
    "revision": "d51f0cb9b6f9d8f231b6315151de6df3"
  },
  {
    "url": "assets/js/28.d6da3190.js",
    "revision": "f11f38db8b779e445a9c8357c7891241"
  },
  {
    "url": "assets/js/29.517d466d.js",
    "revision": "9cd6bc13c55557d3294cb4272b19793d"
  },
  {
    "url": "assets/js/3.08f76ec8.js",
    "revision": "3785048dc339640b9b46f793be2af3c6"
  },
  {
    "url": "assets/js/30.22c7d497.js",
    "revision": "0cf3be2086b1529f6eccf4b74713f779"
  },
  {
    "url": "assets/js/31.ed8d2458.js",
    "revision": "2015f9ec56116ffdb6ca18ecc8e45e36"
  },
  {
    "url": "assets/js/32.6d0b506e.js",
    "revision": "c1fdf0e1fcf71bdff5b8872f6fae2e62"
  },
  {
    "url": "assets/js/33.f4c0d84a.js",
    "revision": "17b1677ebe8b106b2f06c641bae9ad3e"
  },
  {
    "url": "assets/js/34.c617d655.js",
    "revision": "450542510150890cf11f0c6d094ffaf7"
  },
  {
    "url": "assets/js/35.2d57abba.js",
    "revision": "c1a4322140dcaa3928e79ec5c06967ea"
  },
  {
    "url": "assets/js/36.aee820ad.js",
    "revision": "73519b89856f9958df4d347005283d75"
  },
  {
    "url": "assets/js/37.2699894f.js",
    "revision": "3dc403904c5fe6a92f35d720b2325d0c"
  },
  {
    "url": "assets/js/38.e99ac8d0.js",
    "revision": "d4532e88c44eba7a344bfa33332a8720"
  },
  {
    "url": "assets/js/39.ef8422f5.js",
    "revision": "2bd15df0ea9a0eae0265d0cdb5313498"
  },
  {
    "url": "assets/js/4.459b579b.js",
    "revision": "06ecef4dc68b40b400e48afb5ce8fea6"
  },
  {
    "url": "assets/js/40.176644d6.js",
    "revision": "eeb8772b4653cb3a48eeb0fcb8e6ea6a"
  },
  {
    "url": "assets/js/41.cd4ebc1e.js",
    "revision": "04088633267bb96822ddf6f494997c07"
  },
  {
    "url": "assets/js/42.9eea1987.js",
    "revision": "17a6c75d29420a714883cb6730d06c8b"
  },
  {
    "url": "assets/js/43.a71a7429.js",
    "revision": "2178798da22df7e27d98448ec3e0ad16"
  },
  {
    "url": "assets/js/44.77102074.js",
    "revision": "62d7e0b19a29d19ec23320773834b837"
  },
  {
    "url": "assets/js/45.76909bfa.js",
    "revision": "afd62d0ccf8939a9d3a3e30f4d9875cc"
  },
  {
    "url": "assets/js/46.bcdeeb2b.js",
    "revision": "b9eb7f69e1acdffcc99b222e066ef1dc"
  },
  {
    "url": "assets/js/47.ba5927dc.js",
    "revision": "91c8edf1b1c139bd2793d18eb95a2f49"
  },
  {
    "url": "assets/js/48.b0215841.js",
    "revision": "cb4d8501b47615edc82b5312ef857abc"
  },
  {
    "url": "assets/js/49.a499afe5.js",
    "revision": "07c8e01f1b24af69276f41e9ca4d1926"
  },
  {
    "url": "assets/js/5.10b62102.js",
    "revision": "97d0eddfabc1fc832d8c32d4f3cfc499"
  },
  {
    "url": "assets/js/50.bcb212e3.js",
    "revision": "57425c29bd232439cc6b9e68e682a99b"
  },
  {
    "url": "assets/js/51.96c72c2c.js",
    "revision": "7ba69d9a4a3f36e230b60c1d413f651c"
  },
  {
    "url": "assets/js/52.f1a4de87.js",
    "revision": "fa3fd64e9c9ad493cd12de2a67575dd3"
  },
  {
    "url": "assets/js/53.5d4b2a68.js",
    "revision": "bdc4826667d0a0ae6e6b9e6154879905"
  },
  {
    "url": "assets/js/54.0173408c.js",
    "revision": "eb664aade408f3ed9bd9c43951277998"
  },
  {
    "url": "assets/js/55.c1602343.js",
    "revision": "28dd5407530f1e1462b30a2b42589dbb"
  },
  {
    "url": "assets/js/56.d5c45899.js",
    "revision": "692b833d4a54a6573d4c3752d8fc1cf9"
  },
  {
    "url": "assets/js/57.c1b8b798.js",
    "revision": "73a1b37eb432d09f6fcda55e0adb700b"
  },
  {
    "url": "assets/js/58.2f9adfd9.js",
    "revision": "a35a4bbccd73e47b7ede6f9230ff7c7c"
  },
  {
    "url": "assets/js/59.f2bb3b43.js",
    "revision": "662594cb15b874269c0114ae1231197a"
  },
  {
    "url": "assets/js/6.d38a8538.js",
    "revision": "734e9d13d26e427dc203da02431f4b93"
  },
  {
    "url": "assets/js/60.b421a529.js",
    "revision": "fc2ae540d78bb7c9652e17c6cb03de0e"
  },
  {
    "url": "assets/js/61.66596efa.js",
    "revision": "d9f78612b35ca8415efc641e966e252f"
  },
  {
    "url": "assets/js/62.dd5df38d.js",
    "revision": "75923e6dda257303a708564d51238e0a"
  },
  {
    "url": "assets/js/63.7ac09ec2.js",
    "revision": "e251b6e0bb20dcea583d27e681b16a6c"
  },
  {
    "url": "assets/js/7.aba6acd4.js",
    "revision": "c097f00db4aef9814986d638f6849a31"
  },
  {
    "url": "assets/js/8.812fa4f9.js",
    "revision": "286df8508f1e64a1c12b4d6e0dd02f77"
  },
  {
    "url": "assets/js/9.5d745967.js",
    "revision": "ff4613e71d1f829531a8fbf97ea8d02e"
  },
  {
    "url": "assets/js/app.c35cbdb2.js",
    "revision": "72666ca16db03ad813bf0503bdde8b7a"
  },
  {
    "url": "blockchain/01.Thingking-in-Layers&Aspects.html",
    "revision": "982afb52e86b6638b85315d3f08ba73b"
  },
  {
    "url": "blockchain/02.seeing-the-big-picture.html",
    "revision": "14f57e8865e1c19384377a0cf9a083ca"
  },
  {
    "url": "blockchain/03.recognizing-the-potential.html",
    "revision": "3677113c49a51775823af4009552fd4f"
  },
  {
    "url": "blockchain/04.misson-of-blockchain.html",
    "revision": "f3fca0db9cc3166412c3e7c8c21c6c91"
  },
  {
    "url": "blockchain/05.what-is-blockchain.html",
    "revision": "c869d3347da51f3a91d165d75a39c4e5"
  },
  {
    "url": "blockchain/06.understanding-the-nature-of-ownership.html",
    "revision": "7c193ab1e1fbc1c60ea6e0bea1621080"
  },
  {
    "url": "db/lmdb/what-is-lmdb.html",
    "revision": "57cdb3cb404b84063c833bab3476c770"
  },
  {
    "url": "docker/docker-command.html",
    "revision": "f6e1d26c31387dd83c4cc376639d2f72"
  },
  {
    "url": "docker/install-kubeadm.html",
    "revision": "dea1905c7699cebaaad177590c1d1333"
  },
  {
    "url": "docker/micro-k8s-monitoring.html",
    "revision": "eaccbdd9d6120e39f6dddf0d516d5d5c"
  },
  {
    "url": "golang/go-test-cover.html",
    "revision": "4c4b5c136cbde7b155117e3e897f33b7"
  },
  {
    "url": "golang/patterns-in-golang-select.html",
    "revision": "9c7b8bb8fa4393b9171728ee1d0463c4"
  },
  {
    "url": "hyperledger/fabric/01.what-is-blockchain.html",
    "revision": "a072652c92634078055258ebd5d7a977"
  },
  {
    "url": "hyperledger/fabric/about-docker-images.html",
    "revision": "d419133a2ac5e33b05db4f45a86f0f01"
  },
  {
    "url": "hyperledger/fabric/about-v2.2.html",
    "revision": "6485d54ac88cc4de8918a4b09815b7fe"
  },
  {
    "url": "hyperledger/fabric/batchTimeout-performance-test.html",
    "revision": "899f6fe0257b6b02ef4e88bab90b171a"
  },
  {
    "url": "hyperledger/fabric/chaincode-upgrade.html",
    "revision": "8d129a4444dc9bad245f89e22bc742e7"
  },
  {
    "url": "hyperledger/fabric/couchdb-vs-leveldb.html",
    "revision": "e017b37640a74a897bce89f04b2b6106"
  },
  {
    "url": "hyperledger/fabric/execute-order-validate-vs-raft.html",
    "revision": "21993166c51b0b4052c4dee1c69c55a3"
  },
  {
    "url": "hyperledger/fabric/mvcc-read-conflict.html",
    "revision": "df676448e64710fd37a1c665559e3552"
  },
  {
    "url": "hyperledger/fabric/v1.4-vs-v2.2.html",
    "revision": "b3d8e4ba0d3e896b8ccda9089bf5d630"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190128.html",
    "revision": "72fef72845c285ccec1b359609cc29c9"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190219.html",
    "revision": "734ae042442accfda669da60a010b048"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190321.html",
    "revision": "f01b13070717ae5e98fcef5ca520fcd9"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190417.html",
    "revision": "1f70b0466a54130fdf2ca7a05244b250"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190524.html",
    "revision": "8ce71290828b56ca81f05ed75d8e38d4"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190627.html",
    "revision": "cfa32bf3dcba769967a68a358a3b5286"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190731.html",
    "revision": "88ae4c7147f99579c60becb7581242b5"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190822.html",
    "revision": "0eb93be46fd507e874048f15b44876f2"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-190921.html",
    "revision": "0174cd58c676f16d075f89df0fa4856f"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-191017.html",
    "revision": "b3dab4376f9719b7eb1ba334bad6a49f"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-200122.html",
    "revision": "9f2580ef6231081d920633a22b945e46"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-200423.html",
    "revision": "f8f8082cfb2cf7b16e00c0fb7093ead1"
  },
  {
    "url": "hyperledger/meetup/hf-meetup-200820.html",
    "revision": "ffd56882643ac251e8f5d7a7b6da2ce0"
  },
  {
    "url": "hyperledger/meetup/index.html",
    "revision": "d5173cba7b8267859eefe9acea89f206"
  },
  {
    "url": "images/favicon.png",
    "revision": "9f40bd49cbdef6c3b05a8014ab0b5a39"
  },
  {
    "url": "images/sung-opengraph-image.png",
    "revision": "074ec3c51830e846e39d5453ed039708"
  },
  {
    "url": "index.html",
    "revision": "f9078c0113cc986802c95f007e33b34b"
  },
  {
    "url": "java/iso8601-with-milliseconds-in-json-using-jackson.html",
    "revision": "bc55cb557575f42219bd574dc5181930"
  },
  {
    "url": "java/jackson-ignore-field.html",
    "revision": "52ead20791373aed85d9f29a5b1810f0"
  },
  {
    "url": "java/java8-foreach-examples.html",
    "revision": "4ba210b2a64bd327cbb9ae51d6086f9a"
  },
  {
    "url": "java/parse-url-querystring.html",
    "revision": "67a18022d96e4cb5f8c059adb6164cb3"
  },
  {
    "url": "kafka/what-is-kafka.html",
    "revision": "a67e92c2cee960c1928f7c364ff9e43c"
  },
  {
    "url": "linux/aws-disk-resize.html",
    "revision": "01eb2e1a57da03cf8b9214eb85deeccc"
  },
  {
    "url": "linux/ubuntu/access-ubuntu18.04-via-VNC-from-mac.html",
    "revision": "2850ad80aed98959872f4cda2dc94513"
  },
  {
    "url": "linux/ubuntu/apt-get-command.html",
    "revision": "1c220ae489e52d55b6a6b2a7af95074f"
  },
  {
    "url": "nodejs/mongoose-schema-es6.html",
    "revision": "6b1e40a1526e9f65bc20ad74d504eda4"
  },
  {
    "url": "nodejs/node-gyp-error.html",
    "revision": "172013b51b1f64aa137b6b0f93cf40a9"
  },
  {
    "url": "nodejs/nodejs-https.html",
    "revision": "dbbd8dcadd920e7e1ac201986a05c8e7"
  },
  {
    "url": "nodejs/nodejs-security-overview.html",
    "revision": "93b3b1c2784a4c65b33372e15c48ad07"
  },
  {
    "url": "nodejs/npm-config-set.html",
    "revision": "bfc424a4887eb7f4e51f9c3060d9e884"
  },
  {
    "url": "nodejs/nvm-version-control.html",
    "revision": "55419e6fb63d8e2ef9e207506364d989"
  },
  {
    "url": "nodejs/top10-common-mistakes.html",
    "revision": "d47f1af86e5a73adc0459b355be7fd29"
  },
  {
    "url": "nodejs/v4.x/add-job-into-eventemitter.html",
    "revision": "5885ca47a0eadc67560d592a952726d9"
  },
  {
    "url": "python/python-install-fail.html",
    "revision": "cf6490a19e255b851861d8f9671d3354"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
