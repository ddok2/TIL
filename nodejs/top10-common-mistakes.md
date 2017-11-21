# Node.js 개발시 주의사항 10가지 (3년전)

이글은 Need Node.js Help? Check These Top 10 Common Node.js Developer Mistakes 제목으로 MAHMUD RIDWAN 이란 개발자가 쓴 Node.js로 개발하면서 발생하는 10가지 실수들에 대한 내용입니다.

[원문](https://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes)에서 확인 하시면 됩니다.

## Mistake #1: 이벤트 루프의 블록킹

Node.js의 자바스크립트의 경우(브라우저와 마찬가지로) 싱글 쓰레드 방식의 환경입니다. 이 말은 우리가 어플리케이션을 만들면 두 개의 작업을 병렬로 진행하는 것이 불가능하다는 말입니다. 대신에 IO기반으로 비동기적으로 동시에 발생하는 여러 작업들을 다루고 있습니다.
예를들면 Node.js가 데이터베이스의 데이터를 가져오는 작업을 요청을 한다면 데이터를 가져오는 동안 어플리케이션의 다른 일에 집중 할 수 있다는 말입니다.
```javascript
db.User.get(userId, function(err, user) {

           // 여기에 실제로 데이터가 불러와 지는 동안은 다른 일을 합니다.

})
```
 

그런데 만약에 CPU 기반의 코드를 작성한다고 가정을 해보겠습니다. 예를 들어 엄청나게 큰 배열을 sorting 하는 작업이나 엄청나게 큰 loop를 도는 작업을 하는 작업들이 있을 수 있습니다.
```javascript
function sortUsersByAge(users) {

           users.sort(function(a, b) {

                     return a.age < b.age ? -1 : 1;

           });

}
```
이런 형태의 코드가 실제로 문제가 될 수 있습니다. 이 경우에는 적은 수의 사용자라면 별로 문제가 되지 않을 테지만 수천 수만 명이 동시에 접속해서 동일한 작업을 요청하게 된다면 다른 작업이 마칠 때까지 다른 사용자들은 결과를 기다릴 수 밖에 없는 문제가 발생합니다. 결국 callback을 통한 비 동기적인 코드의 효과가 전혀 없어지게 됩니다.

 

위와 같은 문제를 해결하는 가장 이상적인 해결책은 이미 sorting이 된 결과를 DB상에서 처리해서 내려주는 것입니다.

실제로 Nodejs에서는 이 문제를 해결할만한 명확한 해결책은 없습니다. DB에서 최대한 처리된 데이터를 내려다 준다 던지 하는 각 상황에 맞춰 해결하는 수밖에 없습니다.

우리는 오직 하나 그저 CPU에 지나치게 의존하는 작업들을 피하라는 것입니다.

 

## Mistake #2: 한번 이상의 Callback 함수의 실행

자바스크립트는 callback에 의존하고 있습니다. 브라우저상에서 이벤트를 처리하기 위해서 참조된 함수를 넘기거나 또는 익명의 함수를 선언하여 callback을 구현하고 있습니다.

Node.js 에서는 callback이 비동기적인 코드가 각각 통신하는 유일한 방법입니다. ES6의 promise 기법이 소개 되기 전까지는 말이지요. promise 기법에 대한 정보는 [이곳](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html?utm_source=javascriptweekly&utm_medium=email) 에서 얻으실 수 있습니다.

callback은 여전히 많은 수의 개발자들이 API를 설계할 때 callback을 기반으로 설계를 하고 있습니다. 여기서 문제는 바로 이 callback함수가 의도치 않게 한번 이상 호출이 되는 경우가 있다는 것입니다.

일반적으로 함수의 제일 마지막 매개변수에 비동기적으로 무언가를 하게 하기 위한 무언가를 전달하고 그 무언가는 해당 함수의 요청이 완료가 되면 실행이 되는 방식입니다. 일반적인 callback의 방식입니다.

아래의 코드를 보기겠습니다.
```javascript

module.exports.verifyPassword = function(user, password, done) {

           if(typeof password !== 'string') {

                     done(new Error('password should be a string'));

                     return;

           }

           computeHash(password, user.passwordHashOpts, function(err, hash) {

                     if(err) {
                                done(err);
                     }

                     done(null, hash === user.passwordHash);

           });
}
```

```return``` 문이 마지막에는 매번 ```done```을 호출하는지 보시기 바랍니다. 이는 현재의 함수의 실행의 마지막 부분에 자동으로 callback 함수를 실행하지 않기 때문에 반드시 ```callback()```를 호출을 해줘야 합니다. 즉 해당 함수가 끝이 났다는 말입니다.

그런데 위의 코드의 경우에 password로 string이 아닌 값을 넘기게 된다면 “password should be a string” 라는 문구를 리턴하게 될 것입니다. 그리고 코드가 끝이 나야 합니다. 하지만 위의 함수는 computeHash라는 함수로 진입을 하게 됩니다.

즉, 함수가 끝이 났음을 인지하지 못하고 있습니다. 결국 ```callback()```가 두 번이나 호출이 되어 우리가 원하는 형태의 함수 로직을 구현할 수 가 없게 되었습니다.

위와 같은 Nodejs의 에러를 피하기 위해서 개발자들은 반드시 ```callback()``` 앞에 ```return```을 붙이는 습관이 필요합니다.
```javascript

if(err) {

           return done(err);

}
```
이런 형태로 말입니다. 많은 비동기적인 함수들의 return 값들은 대부분 의미를 가지지 않습니다. 반드시 return에 콜백함수를 넘겨

그래서 이러한 습관은 위에서 발생한 문제를 피하는 가장 쉬운 방법입니다.

 



## Mistake #3: 꼬리에 꼬리를 무는 Callback 함수

callback – hell 이라고 불리는 꼬리에 꼬리를 무든 callback 함수의 연결입니다. 이는 Nodejs 그 자체의 문제는 아니지만 자칫하다가는 코드의 흐름이 엉망이 되는 원인이 됩니다.
```javascript

function handleLogin(..., done) {

           db.User.get(..., function(..., user) {

                     if(!user) {
                                return done(null, 'failed to log in');

                     }

                     utils.verifyPassword(..., function(..., okay) {
                                if(okay) {

                                          return done(null, 'failed to log in');

                                }

                                session.login(..., function() {

                                          done(null, 'logged in');

                                });
                     });
           });
}
```
이런 코드는 유지보수는 물론 코드의 가독성 마저 낮춰버리는 경향이 있습니다. 이 문제를 해결하는 방법은 꽤나 간단합니다. 기능별로 함수를 정의 하여 함수끼리 연결을 시키는 것입니다.

하지만 무엇보다 가장 깔끔한 해결책 중에 하나는 Nodejs 패키지중에 자바스크립트의 비동기 패턴을 다뤄주는 유틸리리티인 Async.js 를 사용하는 것입니다.
```javascript

function handleLogin(done) {
           async.waterfall([
                     function(done) {
                                db.User.get(..., done);
                     },
                     function(user, done) {
                                if(!user) {
                                return done(null, 'failed to log in');
                                }

                                utils.verifyPassword(..., function(..., okay) {
                                          done(null, user, okay);
                                });
                     },

                     function(user, okay, done) {
                                if(okay) {

                                          return done(null, 'failed to log in');
                                }

                                session.login(..., function() {
                                          done(null, 'logged in');

                                });
                     }
           ], function() {
                     // ...
           })
}
```
위의 코드는 하나의 예일뿐 다양한 패턴에 맞춰 다양한 메서드를 지원하니 사이트에 방문하셔서 더 많은 정보를 얻으시기 바랍니다.



## Mistake #4: Callback 함수가 동기적으로 동작하길 기대함

callback을 통한 비동기적인 프로그래밍은 자바스크립트와 Nodejs의 꽤나 특별한 방식입니다.  다른 프로그래밍 언어에서는 실행의 순서를 예측하는데 익숙합니다. 두개의 실행문이 있으면 하나가 실행이 되면 다른 하나가 다음에 실행이 되는 방식으로 별다른 지시가 없다면 문장을 건너뛰고 하는 일은 없을 것입니다.

만약 이런 뛰어 넘는 일이 발생하더라도 조건문, 반복문, 함수의 호출등 으로 제한이 있습니다.

하지만 자바스크립트에서는 콜백의 특정 기능이 해당 함수가 끝이 날 때까지 실행되지 않는 경우도 있을 수 있습니다. 현재 함수의 실행의 중단 없이 그냥 끝까지 실행이 됩니다. 예를 들면 아래와 같은 코드입니다.
```javascript

function testTimeout() {

           console.log(“Begin”);

           setTimeout(function() {

                     console.log(“Done!”);

           }, duration * 1000);

           console.log(“Waiting..”);

}
```
testTimeout이라는 함수가 실행이되면 우선 Begin이라는 글이 찍히고 다음으로는 Waiting.. 그리고 1초가 지난 후에애 Done! 이라는 글자가 찍히게 됩니다.

콜백이 실행되고 다음에 발생해야하는 무언가는 반드시 콜백함수 안에서 다뤄야만 합니다.



## Mistake #5: module.exports 대신에 exports를 선언함.

Node.js의 경우에는 각각의 파일을 고립된 작은 모듈로 취급을 합니다. 만약에 여러분의 패키지가 a.js와 b.js 라는 두개의 파일로 구성이 되어있다고 하겠습니다.  이때 b.js가 기능적으로 a.js에 접근을 해야하는 경우 a.js는 반드시 export 객체의 프로퍼티로 추가되어 있어야 합니다.

```javascript
// a.js

exports.verifyPassword = function(user, password, done) { ... }
```
이 코드를 통해서 누구든지 a.js를 require 만 시켜주면 객체의 프로퍼티 함수로 verifyPassword 를 사용하는 것이 가능합니다.

```javascript

// b.js

require('a.js') // { verifyPassword: function(user, password, done) { ... } }
```
하지만 만약에 verifyPassword 함수를 어떠한 객체의 프로퍼티가 아닌 직접적으로 export시키고 싶은 경우는 어떻게 해야 할까요?
```javascript
// a.js

module.exports = function(user, password, done) { ... }
```
exports를 모듈 객체의 프로퍼티로 다루고 있습니다. 여기서 우리는 exports와 module.exports를 구분하는 것이 매우 중요합니다.

간략히 요약을 하면 module.export를 사용하면 export객체에 선언된 모든 정보들은 무시하고 가장 우선적으로 정보가 선택이됩니다.



## Mistake #6: 함수의 에러를 Callback 함수 내부로 던져버림

자바스크립트는 예외처리의 개념이 존재합니다. 이는 거의 전통적인 언어 ,예를 들면 Java, C++ 같은 언어처럼 예외를 다루는 기능을 제공합니다. 자바스크립트는 try-catch 블록을 통해 에러를 throw하고 catch하는 것이 가능합니다.
```javascript
function slugifyUsername(username) {
           if(typeof username === 'string') {

                     throw new TypeError('expected a string username, got '+(typeof username));
           }
           // ...
}

try {
           var usernameSlug = slugifyUsername(username);

} catch(e) {
           console.error('Oh no!');
}
```

하지만 try-catch의 경우에는 비동기적인 상황에서는 여러분이 기대하는 대로 동작을 하지않을것입니다. 예를들어 비동기적인 기능을 가진 엄청나게 긴 코드를 하나의 큰 try-catch 구문에 묶어서 코드를 안정적으로 구현하고자 하지만 실제로는 기대한 대로 동작하지 않습니다.
```javascript
try {
           db.User.get(userId, function(err, user) {
                     if(err) {
                                throw err
                     }
                     // ...
                     usernameSlug = slugifyUsername(user.username);
                     // ...
           });

} catch(e) {
           console.log('Oh no!');
}
```
db.User.get 의 콜백이 비동기적으로 실행이 되면, 해당 콜백 함수의 스코프안의 try-catch문에서 에러를 처리하게 될 것입니다. 즉 에러가 발생했지만 그 에러를 콜백함수 내에서 처리한다는 말입니다. 즉, 에러를 처리하러 catch문으로 들어갈 일이 없다는 말입니다.
이게 Node.js가 에러를 다루는 조금은 다른 방식입니다. 그래서 반드시 콜백함수는 (err, …) 과 같은 패턴으로 인자를 다룹니다. 첫 번째 인자는 반드시 에러가 발생하면 에러를 다루는 인자가 전달되어야 합니다.



## Mistake #7: 모든 숫자가 정수형이라는 착각
자바스크립트에서의 숫자는 소수점을 가진 숫자입니다. 실제도 정수형 데이터 타입은 존재하지 않습니다. 여러분은 이게 어떤 문제가 되는 것을 원치 않을 것입니다.
우리가 보는 숫자는 실제로 정수부분만을 우리가 보는 것이고 뒤에는 우리가 보지 못하는 소수부분을 감추고 있습니다. 그러다 보니 숫자를 계산하다 보면 우리가 원치 않은 결과를 만들어 내는 경우가 있습니다.
```
Math.pow(2, 53)+1 === Math.pow(2, 53)
```
실제 논리적으로는 말이 안되지만 Node.js(자바스크립트) 상에서는 true 로 리턴이 됩니다. 못 믿으시겠다면 당장 브라우저의 콘솔창을 띄우시고 확인해보시기 바랍니다.
이런 자바스크립트가 숫자를 다루는 부분에 있어서의 문제는 여기서 끝이 아닙니다. 심지어 부동소숫점을 가진 숫자라도 정수를 다루던 연산자가 동일하게 동작을 합니다.
```
5 % 2 === 1 // true

5 >> 1 === 2 // true
```
하지만 산수를 하던 연산자와는 달리 비트단위를 다루는 연산자나 시프트를 다루는 연산자의 경우에는 매우 큰 정수에 대해서 오직 마지막의 32bit까지만 인지하고 동작을 합니다. 예를들면
```Math.pow(2, 53)``` 를 1만큼 시프트시키는 연산을 진행하면 결과는 항상 0입니다. 그리고 or 로 비트단위 연산자를 시행하면 항상 1을 결과값으로 내놓습니다.

```javascript
Math.pow(2, 53) / 2 === Math.pow(2, 52) // true

Math.pow(2, 53) >> 1 === 0 // true

Math.pow(2, 53) | 1 === 1 // true
```
즉, 큰 정수를 다룰 때는 우리가 생각하는 정수가 아닌 수가 된다는 말입니다. 실제로 이렇게 큰 수들을 다룰 일은 거의 없지만 그래도 큰 수를 다루게 된다면 많은 수의 라이브러리들이 큰수를 문제없이 동작하게 만들어 주고 있습니다. 예를들면 bignum 같은 라이브러리들이 있습니다.

## Mistake #8: Streaming APIs의 장점을 무시함
우선 작은 프록시 서버를 만들기로 하죠. 서버는 간단하게 요청이 오면 다른 웹 서버의 컨텐츠를 가져오는 역할을 할 것입니다. 예제는 Gravatar 서버로부터 아바타 이미지를 가져오는 작업을 합니다.
```javascript
var http = require('http');
var crypto = require('crypto');

http.createServer()

.on('request', function(req, res) {
           var email = req.url.substr(req.url.lastIndexOf('/')+1);

           if(!email) {
                     res.writeHead(404);
                     return res.end();
           }

           var buf = new Buffer(1024*1024);

           http.get('http://www.gravatar.com/avatar/'+crypto.createHash('md5').update(email).digest('hex'), function(resp) {
                     var size = 0;

                     resp.on('data', function(chunk) {
                                chunk.copy(buf, size);
                                size += chunk.length;
                     })
                     .on('end', function() {
                                res.write(buf.slice(0, size));
                                res.end();
                     });
           });
}).listen(8080);
```
우리는 이미지를 Gravatar를 통해서 가져오고 이를 buffer에 담아서 읽습니다. 그리고 요청에 대한 응답을 진행합니다. 이 경우에는 이미지의 사이즈가 그다지 크지가 않습니다. 그런데 만약에 사이즈가 수천 메가바이트 정도가 된다고 하면 또 다른 문제입니다. 코드를 수정해 보겠습니다.
```javascript
http.createServer()
.on('request', function(req, res) {
           var email = req.url.substr(req.url.lastIndexOf('/')+1);
           if(!email) {
                     res.writeHead(404);

                     return res.end();
           }

           http.get('http://www.gravatar.com/avatar/'+crypto.createHash('md5').update(email).digest('hex'), function(resp) {
                     resp.pipe(res);
           });

}).listen(8080);
```

우리는 이미지를 가져와 간단한 pipe를 통해서 사용자에게 응답을 해줍니다. 이렇게 구현을 하면 전체데이터를 다 받은 후에 응답을 해줄 필요가 없습니다.



## Mistake #9: ```Console.log```를 디버깅 용으로 사용함

Node.js에서의 ```console.log```의 경우는 거의 모든 것들을 콘솔창에 프린트 해줍니다. 객체를 넘기면 자바스크립트 객체로 프린트 해줍니다. 그리고 대부분의 것들을 잘 정돈된 형태로 콘솔창에 띄워줍니다. 하지만 정말로 실제 코드에서는 console.log가 사용되지 않도록 해야 합니다.
대신에 더 많은 기능을 담고 있는 라이브러리를 사용하세요. 예를들면 [debug](https://www.npmjs.com/package/debug) 같은 것이 좋은 수단이 될것같습니다. 사용법도 매우 간단합니다. 사이트에 방문해서 더많은 정보를 얻으세요.

## Mistake #10: 관리용 프로그램 사용하지 않음

여러분의 Node.js 코드가 실제 제품으로 돌고 있던지 여러분의 데스크탑에서 돌고 있던지 반드시 [Supervisor Programe](https://en.wikipedia.org/wiki/Supervisory_program )을 사용하세요. 여러분의 프로그램을 전체적으로 관리하고 관찰할수 있는 매우 유용한 방법입니다.
예상치 못한 에러가 발생하면 이것을 해결하려 들지말고 여러분의 프로그램이 망가지도록 그냥 두고 보세요. 몇초 내로 여러분의 Supervisor가 프로그램을 재실행 시킬것입니다.
이 Supervisor프로그램은 여러분의 프로그램이 망가지거나 , 파일의 변화가 있다면 언제든 서버를 재시작 시켜 줍니다. 이는 개발자로 하여금 굉장한 이점을 가져다 줍니다.

[nodemon](https://www.npmjs.com/package/nodemon)

[forever](https://www.npmjs.com/package/forever)

[pm2](https://www.npmjs.com/package/pm2)

[supervisor](https://www.npmjs.com/package/supervisor)

여기 몇 가지 Node.js환경에서 사용가능한 Supervisor 프로그램이 있습니다. 각각의 툴은 장단점을 가지고 있습니다. 원하시는 툴을 선택해서 실제로 적용시켜 보시기 바랍니다.


##### 출처: [Yuby's Lab.](http://yubylab.tistory.com/entry/Nodejs-개발시-주의사항-10가지-Top-10-Common-Mistakes)