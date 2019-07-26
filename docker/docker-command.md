# Docker 명령어 정리

### [Docker Hub](https://hub.docker.com/)에서 이미지 검색
```
$ docker search ubuntu
```
### Docker Hub에서 이미지 받기
```
$ docker pull ubuntu
```

### Docker 이미지 목록 확인
```
$ docker images
```

### 이미지로 컨테이너 실행(Run)
```
$ docker run -t -i --name sung-something ubuntu:lastest bin/bash
```
- -i : 컨테이너와 상호작용
- -t : tty(터미널)을 사용
- -d : -i 옵션의 반대. 컨테이너를 백그라운드 실행
- -p [외부포트]:[내부포트] : 포트포워딩 설정 ex) -p 80:8080 -> 외부에서 들어온 80포트 요청을 컨테이너의 8080 포트로 포워딩시킨다. 포트를 여러개 열고 싶으면 -p 80:8080 -p 8088:8088 -p 27017:27017 이런식으로 이어서 쓰면 된다.
- -v : [외부절대경로]:[내부절대경로] : 컨테이너 외부(호스트) 볼륨과 컨테이너 내부 볼륨을 바인딩시킨다.
- -c : cpu 스케줄링 점유율 (기본값 1024)
- -m : 메모리
- -rm : 컨테이너가 종료되면 삭제
- /bin/bash: 리눅스의 경우 컨테이너에서 bash 쉘을 이용

### 컨테이너 목록 확인
```
$ docker ps
```
- -a : 정지된 컨테이너까지 출력
- -q : 컨테이너 ID만 출력

### 실행중인 컨테이너 shell에서 빠져나오기
- exit : 쉘을 빠져나오면서 컨테이너를 종료
- ctrl + p  + q 입력 : 컨테이너를 종료하지 않고 쉘만 빠져나옴

### 실행중인 컨테이너로 접속하기
```
$ docker attach sung-something
```

### 실행중인 컨테이너 정지하기
```
$ docker stop sung-something
```
 
### 컨테이너 삭제하기
```
$ docker rm sung-something
```
- -f : 실행중인 컨테이너도 강제로 정지하고 삭제

### 컨테이너 모두 삭제하기
```
## Linux
$ docker rm $(docker ps -a -q)

## Windows
> FOR /f "tokens=*" %i IN ('docker ps -a -q') DO docker rm %i
```

### 이미지 삭제하기
```
$ docker rmi ubuntu:latest
```
- [이미지 이름]:[태그] 형식을 사용해도 되고 이미지 ID를 사용해도 된다.
- 이미지 이름만 입력할 경우 태그에 관계없이 이미지 이름만 같으면 모두 삭제된다.

### 이미지 모두 삭제하기
```
## Linux
$ docker rmi $(docker images -q)

## Windows
> FOR /f "tokens=*" %i IN ('docker images -q -f "dangling=true"') DO docker rmi %i
```

### 컨테이너 변경사항 확인하기
```
$ docker diff [컨테이너 ID or NAME]
```
어떤 이미지로 실행된 컨테이너 안의 내용의 변경되었다면, 버전 관리 시스템처럼 diff 명령어로 어떤 점이 바뀌었는지 확인할 수 있다.
 
### 컨테이너로 이미지 만들기
```
$ docker commit [컨테이너 ID or NAME] [새로운 컨테이너 이름]:[태그]
```
버전 관리 시스템처럼 commit 명령어로 변경된 컨테이너를 새로운 이미지로 만들 수 있다.
 
### Dockerfile을 통한 이미지 빌드
```
$ docker build -t [image name:tag] -f [Dockerfile 경로]
```
 
### 이미지 파일 Export
```
$ sudo docker save -o [내보낼 경로]/[내보낼 이름] [내보낼 이미지 ID or NAME]
```
 
### 이미지 파일 Import
```
$ sudo docker load -i [이미지 파일 경로]
```

### 볼륨 관련 명령어
```
## 볼륨 만들기
$ docker volume create [VOLUME NAME]

## 볼륨 목록 보기
$ docker volume ls

## 특정 볼륨 상세정보 보기
$ docker volume inspect [VOLUME ID or NAME]

## 볼륨 삭제하기
$ docker volume rm [VOLUME ID or NAME]

## 사용하지 않는 볼륨 모두 삭제
$ docker volume prune
```
