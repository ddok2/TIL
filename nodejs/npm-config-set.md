# NPM (또는 Yarn) 으로 패키지 설치 시 인증서 관련 오류

회사에서 네트워크 감시를 위해 프록시 설정과 인증서 설정을 한다.
그리고 나서 `npm` 또는 `yarn`으로 설치 시 다음과 같은 오류가 나타날 수 있다.

## 인증서 관련 오류
```shell
$ npm install
...
13 152.5 gyp ERR! stack Error: self signed certificate in certificate chain
...

# 또는
$ npm install
...
node-pre-gyp ERR! install error
node-pre-gyp ERR! stack Error: unable to get local issuer certificate
...
```

## 해결 방법
### `npm` 또는 `yarn` config 설정 하기

- 인증서 관련 설정
    ```shell
    npm config set cafile pem_path 
    # yarn config set cafile pem_path
    ```
- http proxy 관련 설정
    ```shell
    npm config set http-proxy server_addr
    # yarn config set http-proxy server_addr
    ```

### 명령어 없이 바로 `.npmrc` 또는 `.yarnrc` 파일에 설정 하기

- 인증서 경로 설정
    ```dotenv
    # edit .npmrc or .yarnrc
    cafile=pem_path
    ```
- http proxy 관련 설정
    ```dotenv
    # edit .npmrc or .yarnrc
    https-proxy=server_addr
    ```
### 만일 위 방법들이 안 된다면
```shell
# 추천하지 않지만 ...
npm config set strict-ssl false
# yarn config set "strict-ssl" false
# 또는
set NODE_TLS_REJECT_UNAUTHORIZED=0
```
