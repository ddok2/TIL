
## 1. SSL 인증서, Letsencrypt

SSL 인증서는 보통 유료로 구매를 해야합니다. 그러나 무료 인증서를 주는 곳이 몇몇 있습니다.

1. [Let's Encrypt](https://letsencrypt.org/) : 유료기간이 90일.
2. [Comodo Free SSL](https://www.gogetssl.com/domain-validation/comodo-free-ssl/) : 코모도에서 출시한 무료 인증서.
3. [CloudFlare One-Click SSL](https://www.cloudflare.com/ssl/) : CloudFlare CDN과 함께 사용 가능함.
4. [AWS Certificate Manager](https://aws.amazon.com/ko/certificate-manager/) 유효기간 자동 갱신.

그외 더 있지만 여기서는 Let's Encrypt를 이용해서 인증서를 받았습니다.

윈도우 서버에서 테스트를 할 예정이라 [letsencrypt-win-simple](https://github.com/Lone-Coder/win-acme) 이용하여 인증서를 받았습니다.
[letsencrypt-win-simple](https://github.com/Lone-Coder/win-acme) 의 자세한 내용은 [wiki](https://github.com/Lone-Coder/win-acme/wiki) 를 참고하세요.


## 2. HTTPS 서버 구현

[Node.js HTTPS Documentation](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener)를 참고하세요.

예제는 아래와 같습니다.

방법 1:
```javascript
// curl -k https://localhost:8000/
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);

```

방법 2:
```javascript
const https = require('https');
const fs = require('fs');

const options = {
  pfx: fs.readFileSync('test/fixtures/test_cert.pfx'),
  passphrase: 'sample'
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
```

만일 [Express](http://expressjs.com/)를 이용하여 구현한다면 다음과 같이 구현하면 됩니다.

with Express:
```javascript
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.cert')
};

// Create a service (the app object is just a callback).
const app = express();

// Create an HTTP service.
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);
```
