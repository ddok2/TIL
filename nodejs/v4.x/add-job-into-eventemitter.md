# 이벤트 큐에 작업을 추가

## nextTick을 사용한 작업 스케줄링
이벤트 큐의 job을 스케줄링하기 위한 유용한 방법으로 ```process.nextTick(callback)``` 함수가 있다. 
이 함수는 이벤트 루프의 다음 사이클에서 작업을 수행하도록 스케줄링을 한다.

## 이벤트 이미터와 리스너 구현하기

### 자바스크립트 객체에 커스텀 이벤트 추가
이벤트는 ```events``` 모듈에 포함된 ```EventEmitter``` 객체를 사용해 발생시킬 수 있다. 
```emit(eventName, [args])``` 함수는 ```eventName``` 이벤트를 유발시키고 제공된 전달인자를 포함한다. 
다음 코드는 간단한 이벤트 이미터를 모듈로 구현하는 방법을 보여준다.

```javascript
var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit("simpleEvent");
```
자바스크립트 객체에 직접 이벤트를 추가하려면 객체 초기화 시 ```events.EventEmitter.call(this)```를 호출해 
```EventEmitter``` 기능을 상속 받고 객체 프로토타입에 ```events.EventEmitter.prototype```을 추가한다.

```javascript
Function MyObj(){
    Events.EventEmitter.call(this);
}
MyObj.prototype.__proto__ = events.EventEmitter.prototype;

```
위 작업을 수행한 후에 아래와 같이 객체 인스턴스에서 직접 이벤트를 발생시킨다.

```javascript
var myObj = new MyObj();
myObj.emit("someEvent");
```

### 이벤트 리스너를 객체에 추가
이벤트를 발생시키는 객체 인스턴스는 관심 있는 이벤트에 대한 리스너를 추가할 수 있다. 아래와 같이 ```EventEmitter``` 객체에 리스너 함수를 추가한다.
- ```addListener(eventName, callback)``` : 객체 리스너에 콜백 함수를 추가한다. 
```eventName``` 이벤트가 호출될 때 마다 콜백 함수가 실행을 위한 이벤트 큐에 추가된다.
- ```.on(eventName, callback)``` : ```addListener()```와 동일하다.
- ```.once(eventName, callback)``` : ```eventName```가 트리거되면 단 한 번 콜백 함수가 실행을 위해 이벤트 큐에 추가된다.

앞에서 정의한 ```MyObject EventEmitter``` 클래스의 객체에 리스너를 추가하려면 다음과 같이 한다.

```javascript
function myCallback(){
    ...
}
var myObject = new MyObj();
myObject.on("someEvent", myCallback);
```


