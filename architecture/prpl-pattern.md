# PRPL

## PRPL 패턴이란

PRPL 은 다음의 약자입니다.

- `Push`: 초기 URL 에서 가장 중요한 리소스만 푸시합니다.
- `Render`: 초기 경로를 먼저 렌더링 합니다.
- `Pre-cache`: 남은 경로를 사전에 미리 캐시합니다.
- `Lazy-load`: 요청에 따라 필요 시 남은 경로를 로드하고 다음 루트를 만들어 보여줍니다.

PRPL은 PWA(Progressive Web App)의 목표와 표준을 추구하고 아래와 같은 경우에 최적화를 수행합니다.

* 최소 상호작용 시간(Time-to-Interactive)
    * 최초 사용 시(진입점과 무관)
    * 우리가 사용하는 휴대기기(핸드폰)에서
* 업데이트가 릴리즈되는 동안 최대한의 캐싱 효율성
* 개발 및 배포의 단순성

PRPL은 기술이나 기법보단 모바일 웹의 성능을 개선하려는 비전에 가깝습니다. Polymer 팀이 그 틀을 짜고 이름을 정한 후 [Google I/O 2016](https://www.youtube.com/watch?v=J4i0xJnQUzU)에 공개했습니다.

공개한 Polymer [Shop](https://shop.polymer-project.org/) E-커머셜 데모는 PRPL을 사용한 좋은 예시입니다. 이 데모는 실제 휴대기기에서 각 경로의 상호작용을 통해 놀라운 속도가 실현됩니다.


1.75초만에 나타나는 Polymer Shop 데모
![](https://developers.google.com/web/fundamentals/performance/prpl-pattern/images/app-build-prpl-shop.jpg)


대부분의 프로젝트에서 PRPL 을 완전한 형태로 실현하기는 솔직히 말해 너무 이릅니다. 
그러나 그러한 마음가짐을 갖거나 다양한 관점에서 비전을 추구하는 것은 절대로 너무 이른 것이 아닙니다. 
오늘날 PRPL 를 구현하기 위해 앱 개발자, 도구 개발자 및 브라우저 공급업체가 따를 수 있는 유용한 단계들이 많이 있습니다.

## PRPL 을 가능하게 만드는 기술들
* HTTP/2 Server-push 지원 Web Server
* Web Components 지원 플랫폼
* Service Woker 지원 Web Browser


### 참조

-  PRPL 패턴 : https://developers.google.com/web/fundamentals/performance/prpl-pattern/