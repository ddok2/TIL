# Ubuntu의 apt-get 명령어 정리

apt-get(Advanced Packaging Tool)은 우분투(Ubuntu)를 포함안 데비안(Debian)계열의 리눅스에서 쓰이는 팩키지 관리 명령어 도구이다고 한다.
근데 자꾸 기본적인 명령어를 잊어버린다. 이 기회에 정리한다.

## 패키지 인덱스 정보 업데이트
apt-get은 인덱스를 가지고 있는 디 이 인덱스는 ```/etc/apt/sources.list```에 있다.
```
$ sudo apt-get update
```

## 설치된 패키지 업그래이드
```
$ sudo apt-get upgrade
```

의존성 검사하면 설치하기
```
$ sudo apt-get dist-upgrade
```

## 패키지 설치
```
$ sudo apt-get install [패키지 이름]
```

## 패키지 재 설치
```
$ sudo apt-get --reinstall install [패키지 이름]
```

## 패키지 삭제
설정 파일은 지우지 않음
```
$ sudo apt-get remove [패키지 이름]
```

설정 파일까지 모두 지움
```
$ sudo apt-get --purge remove [패키지 이름]
```

## 패키지 소스코드 다운로드
```
$ sudo apt-get source [패키지 이름]
```

위에서 받은 소스코드를 의존성 있게 빌드
```
$ sudo apt-get build-dep [패키지 이름]
```

## 패키지 검색
```
$ sudo apt-cache search [패키지 이름]
```

## 패키지 정보 보기
```
$ sudo apt-cache show [패키지 이름]
```

### apt를 이용해서 설치된 deb패키지는 ```/var/cache/apt/archive``` 에 설치된다.