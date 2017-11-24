# Node.js Security Overview

## Security in the NPM ecosystem
- [Moving the whole traffic of the registry to HTTPS](http://blog.npmjs.org/post/142077474335/npm-registry-is-now-fully-https)
- [Protect your npm account with two-factor authentication and read-only tokens](http://blog.npmjs.org/post/166039777883/protect-your-npm-account-with-two-factor)
- [Using Two-Factor Authentication](https://docs.npmjs.com/getting-started/using-two-factor-authentication)

## Securing your Node.js applications
### [Using the Helmet module](https://www.npmjs.com/package/helmet)
[Helmet](https://www.npmjs.com/package/helmet)을 이용하면 웹 취약성으로부터 앱을 보호할 수 있다.
- [csp](https://github.com/helmetjs/csp)는 Content-Security-Policy 헤더를 설정하여 XSS(Cross-site scripting) 공격 및 기타 교차 사이트 인젝션을 예방한다.
- [hidePoweredBy](https://github.com/helmetjs/hide-powered-by)는 X-Powered-By 헤더를 제거한다.
- [hpkp](https://github.com/helmetjs/hpkp)는 Public Key Pinning 헤더를 추가하여, 위조된 인증서를 이용한 중간자 공격을 방지한다.
- [hsts](https://github.com/helmetjs/hsts)는 서버에 대한 안전한(SSL/TLS를 통한 HTTP) 연결을 적용하는 Strict-Transport-Security 헤더를 설정한다.
- [ieNoOpen](https://github.com/helmetjs/ienoopen)은 IE8 이상에 대해 X-Download-Options를 설정한다.
- [noCache](noCache)는 Cache-Control 및 Pragma 헤더를 설정하여 클라이언트 측에서 캐싱을 사용하지 않도록 한다.
- [noSniff](https://github.com/helmetjs/dont-sniff-mimetype)는 X-Content-Type-Options 를 설정하여, 선언된 콘텐츠 유형으로부터 벗어난 응답에 대한 브라우저의 MIME 가로채기를 방지한다.
- [frameguard](https://github.com/helmetjs/frameguard)는 X-Frame-Options 헤더를 설정하여 clickjacking에 대한 보호를 제공한다.
- [xssFilter](https://github.com/helmetjs/x-xss-protection)는 X-XSS-Protection을 설정하여 대부분의 최신 웹 브라우저에서 XSS(Cross-site scripting) 필터를 사용하도록 한다.

```
$ npm i helmet -S
```
이후 코드에서 Helmet을 사용하는 방법은 다음과 같다.
```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
```
X-Powered-By헤더를 사용하지 않기
```javascript
app.disabled('x-powered-by');
```
물론 Helmet를 이용하면 자동으로 위의 작업을 한다.

### Validating user input
- command injection
- SQL injection
- stored cross-site scripting

위 항목을 피하기 위해서 사용자 입력을 유효성검사를 해야한다.
사용자 유효성 검사하기에 좋은 라이브러리는 [Joi](https://www.npmjs.com/package/joi)이다.

사용방법은 다음과 같다.
```javascript
const Joi = require('joi');
 
const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email()
}).with('username', 'birthyear').without('password', 'access_token');
 
// Return result.
const result = Joi.validate({ 
        username: 'abc', 
        birthyear: 1994 
    }, schema);
// result.error === null -> valid
 
// You can also pass a callback which will be called synchronously with the validation result.
Joi.validate({ 
        username: 'abc', 
        birthyear: 1994 
    }, schema, function (err, value) { });  // err === null -> valid
```

## Secure Coding Style
### Do not use ```eval()```

Eval은 애플리케이션에 코드 인젝션 공격을 가능하게 한다. 이를 사용하려고 하지마라.

```eval()```뿐만 아니라 아래의 표현도 피해야한다. 아래의 표현은 백그라운드로 ```eval()```를 사용한다.

- ```setInterval(String, 2)```
- ```setTimeout(String, 2)```
- ```new Function(String)```

### Always use ```use strict;```
```use strict;```를 사용하면 자바스크립트의 "변종"을 허용하지 않게 한다. 또한 몇몇 암묵적인 에러들을 제거해주고 에러로그를 throw한다.
```javascript
'use strict';

const sung = {a: 1, b: 2};
```

### Set cookie scope
쿠키로 인해 앱이 악용에 노출되지 않도록 하기 위해 기본 세션 쿠키 이름을 사용하지 말고 쿠키 보안 옵션을 적절히 설정한다.

#### 기본 세션 쿠키 이름을 사용하지 않음
기본 세션 쿠키 이름을 사용하면 앱을 공격에 노출시킬 수 있다. 

이로 인해 제기되는 보안 문제는 X-Powered-By와 유사하며, 잠재적인 공격자는 이를 이용해 서버의 지문을 채취한 후 이에 따라 공격 대상을 설정할 수 있다.

```javascript
const session = require('express-session');

app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 's3Cur3',
    name: 'sessionId'
}));

```

#### 쿠키 보안 옵션 설정
다음과 같은 쿠키 옵션을 설정하여 보안을 강화할 필요가 있다.

- secure - 브라우저가 HTTPS를 통해서만 쿠키를 전송하도록 한다.
- httpOnly - 쿠키가 클라이언트 JavaScript가 아닌 HTTP(S)를 통해서만 전송되도록 하며, 이를 통해 XSS(Cross-site scripting) 공격으로부터 보호할 수 있다.
- domain - 쿠키의 도메인을 표시하고 URL이 요청되고 있는 서버의 도메인에 대해 비교할 때 사용한다. 두 도메인이 일치하는 경우에는 그 다음으로 경로 속성을 확인해라.
- path - 쿠키의 경로를 표시한다. 요청 경로에 대해 비교할 때 사용하며 이 경로와 도메인이 일치하는 경우에는 요청되고 있는 쿠키를 전송한다.
- expires - 지속적 쿠키에 대한 만기 날짜를 설정하는 데 사용된다.

```javascript
const session = require('cookie-session');
const express = require('express');
const app = express();

const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: { 
        secure: true,
        httpOnly: true,
        domain: 'example.com',
        path: 'foo/bar',
        expires: expiryDate
          }
    })
);

```

### Audit your modules with the Node Security Platform 
[nsp](https://www.npmjs.com/package/nsp)는 Node Security Platform의 주요 커맨드라인 인터페이스이다. 
nsp는 취약한 모듈들을 점검하기 위해 package.json 파일 혹은 npm-shirnkwrap.json 파일을 NSP API를 통해 감시한다.

```
$ npm i nsp -g

# From inside your project directory

$ nsp check
```
유효성 검증을 위한 npm-shrinkwrap.json 파일을 [nodesecurity.io](https://nodesecurity.io/)에 제출하려면 다음과 같은 명령을 사용한다.
```
$ nsp audit-shrinkwrap
```
유효성 검증을 위한 package.json 파일을 [nodesecurity.io](https://nodesecurity.io/)에 제출하려면 다음과 같은 명령을 사용한다.
```
$ nsp audit-package
```

### Look for vulnerabilities with [Retire.js](https://github.com/RetireJS/retire.js)
[Retire.js](https://github.com/RetireJS/retire.js)는 사용하고 있는 모듈 버전들에 대해 알려진 취약점을 탐지해주기 위한 모듈이다.

```
$ npm i retire -g
```
retire 명령으로 실행하면 node_modules 디렉토리내의 모듈들의 취약점을 찾을 수 있다.

(또한 참고로 retire.js는 node_modules 외에 프론트엔드 라이브러리에서도 잘 작동한다.)



#### 출처
- [Node.js Security Overview (17.10.12)](https://nemethgergely.com/nodejs-security-overview/)
- [Production Best Practices: Security](http://expressjs.com/en/advanced/best-practice-security.html)
- [Node.js Security Tutorial](https://blog.risingstack.com/node-hero-node-js-security-tutorial/)