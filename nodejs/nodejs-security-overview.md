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

```npm
npm i helmet -S
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

계속 추가 예정..