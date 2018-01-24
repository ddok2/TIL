# OAuth 2

API를 통해 특정 시스템의 보호된 자원에 접근하기 위해서는 해당 시스템의 사용자 인증 정보(아이디, 패스워드)를 알고 있어야 합니다. 시스템 차원에서 다른 시스템의 보호된 자원에 접근하기 위해 그 시스템의 사용자 인증 정보를 관리하고 이 정보를 사용하는 것은 보안상 많은 문제들을 유발할 수 있습니다. 이런 문제들이 발생하지 않도록 API 접근을 위임하여 인증을 처리하는 방법을 사용할 수 있습니다.

많은 서비스 제공자(Google, Yahoo, AOL 등)들이 이런 인증 방식을 별도로 구현하여 사용하였습니다. 이렇게 구현된 결과들은 서로 조금씩 다르고 서로 호환되지 않았는데 이를 통일하기 위해 OAuth 1.0 표준안을 만들었습니다.

OAuth 1.0 발표 이후 몇 년 동안 사용하면서 커뮤니티는 아래와 같은 단점들에 대해 고민하였고 그 결과 OAuth 2(이후 ‘OAuth’로 명명)를 표준으로 정리하였습니다.

## OAuth 1.0의 특징

기존의 다른 인증방식(OpenID)과 구분되는 특징은 크게 두 가지입니다.

1. API 인증 시, 써드파티 어플리케이션에게 사용자의 비번을 노출하지 않고 인증할 수 있다는 점
2. 인증(Authentication)과 API 권한(Authorization) 부여를 동시에 할 수 있다는 점

## OAuth 1.0 동작원리

![](https://i.stack.imgur.com/UmvA7.png)

## OAuth 2.0

### 개선된 부분

1. 용어변경 : 
    - Resource Owner : 사용자
    - Resource Server : API 서버
    - Authorization Server : 인증서버 (API 서버와 같을 수도 있음)
    - Client : 써드파티 어플리케이션

2. 간단하다 :

    OAuth 1.0에서는 https 가 필수가 아니었기 때문에 API를 호출할 때 signature를 생성해서 호출해야 했습니다. 
    때문에 OAuth 1.0 API를 테스트 하려면 curl등을 사용하기 힘들고 별도의 API 콘솔등을 사용해서 테스트 해야 했습니다. 
    
    OAuth 2.0의 Bearer 토큰 인증 방식을 쓰면 더 이상 signature 가 필요 없기 때문에 API를 테스트하거나 예제를 만들 때 간단하게 개발할 수 있게 되었습니다.
    
3. 대형 서비스로의 확장성 지원 : 
    
    - 커다란 서비스는 인증 서버를 분리하거나 다중화 할 수 있어야 합니다.
    - Authorization Server의 역할을 명확히 하여 이에 대한 고려가 되었습니다.
    
4. 더 많은 인증 방법 지원 : 
    
    - 이전에는 HMAC을 이용한 암호화 인증만 지원했습니다.
    - OAuth 2.0은 여러 인증 방식을 통해 웹 & 모바일 등 다양한 시나리오에 대응 가능합니다.
    - Access Token의 Life-time을 지정하여 만료일 설정 가능합니다.
    
## OAuth 2.0 동작원리

![](https://i.stack.imgur.com/Xn4c0.png)


### 참조

- http://d2.naver.com/helloworld/24942
- http://earlybird.kr/1584
- http://bcho.tistory.com/942
- https://stackoverflow.com/questions/4113934/how-is-oauth-2-different-from-oauth-1
- http://www.nextree.co.kr/oauth-2reul-iyonghan-sso-hwangyeong-gucug-1-2/
