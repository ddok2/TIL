# NVM으로 노드 버전 관리하기

[NVM](https://github.com/creationix/nvm)은 로컬에 다양한 버전의 노드를 설치할 수 있게 해주는 툴이다.

## 설치
[NVM 문서](https://github.com/creationix/nvm#install-script)에 있는 설치 스크립트로 설치한다.

cURL:
```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```
or Wget:
```
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

설치하고 나면 profile(```~/.bash_profile```, ```~/.zshrc```, ```~/.profile```, ```~/.bashrc```) 에 아래를 등록한다.

~/.bash_profile:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

Mac 같은 경우 ```brew```로 설치한 경우:
```
export NVM_DIR="$HOME/.nvm"
. "/usr/local/opt/nvm/nvm.sh" # This loads nvm
```

그리고 ```~/.nvm``` 폴더를 생성한다.(만일 없으면 말이다.)

마지막으로:
```
$ source ~/.bash_profile
```

잘 설치되었는지 확인:
```
$ command -v nvm
```

## 명령어

NVM 에서 지원하는 노드 버전 확인:
```
$ nvm ls-remote
```


로컬에 설치된 노드 확인:
```
$ nvm ls

         v4.8.7
         v6.12.2
->       v8.9.3
         system
default -> v8.9.3
node -> stable (-> v8.9.3) (default)
stable -> 8.9 (-> v8.9.3) (default)
iojs -> N/A (default)
lts/* -> lts/carbon (-> v8.9.3)
lts/argon -> v4.8.7
lts/boron -> v6.12.2
lts/carbon -> v8.9.3
```


해당 버전으로 변경:
```
$ nvm use v6.12.2
```


해당 버전을 기본으로 변경:
```
$ nvm alias default system
default -> system
```

## WebStorm 에서 이용하기

링크 생성:
```
$ cd ~/.nvm/versions/node
$ ln -s v6.12.2 default
$ ls -ld default

default@ -> v6.12.2
```

WebStorm 노드 경로 설정:
```
~/.nvm/version/node/default/bin/node
```

node_modules 경로:
```
~/.nvm/version/node/default/lib/node_modules
```


새로운 노드 버전 설치 후:
```
$ nvm install v6.12.3
$ cd ~/.nvm/versions/node
$ rm default
$ ln -s v6.12.3 default
```