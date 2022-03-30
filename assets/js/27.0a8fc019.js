(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{450:function(s,a,e){"use strict";e.r(a);var t=e(36),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-명령어-정리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-명령어-정리"}},[s._v("#")]),s._v(" Docker 명령어 정리")]),s._v(" "),e("h3",{attrs:{id:"docker-hub에서-이미지-검색"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub에서-이미지-검색"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),e("OutboundLink")],1),s._v("에서 이미지 검색")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker search ubuntu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"docker-hub에서-이미지-받기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub에서-이미지-받기"}},[s._v("#")]),s._v(" Docker Hub에서 이미지 받기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker pull ubuntu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"docker-이미지-목록-확인"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-이미지-목록-확인"}},[s._v("#")]),s._v(" Docker 이미지 목록 확인")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"이미지로-컨테이너-실행-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이미지로-컨테이너-실행-run"}},[s._v("#")]),s._v(" 이미지로 컨테이너 실행(Run)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker run -t -i --name sung-something ubuntu:lastest bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("-i : 컨테이너와 상호작용")]),s._v(" "),e("li",[s._v("-t : tty(터미널)을 사용")]),s._v(" "),e("li",[s._v("-d : -i 옵션의 반대. 컨테이너를 백그라운드 실행")]),s._v(" "),e("li",[s._v("-p [외부포트]:[내부포트] : 포트포워딩 설정 ex) -p 80:8080 -> 외부에서 들어온 80포트 요청을 컨테이너의 8080 포트로 포워딩시킨다. 포트를 여러개 열고 싶으면 -p 80:8080 -p 8088:8088 -p 27017:27017 이런식으로 이어서 쓰면 된다.")]),s._v(" "),e("li",[s._v("-v : [외부절대경로]:[내부절대경로] : 컨테이너 외부(호스트) 볼륨과 컨테이너 내부 볼륨을 바인딩시킨다.")]),s._v(" "),e("li",[s._v("-c : cpu 스케줄링 점유율 (기본값 1024)")]),s._v(" "),e("li",[s._v("-m : 메모리")]),s._v(" "),e("li",[s._v("-rm : 컨테이너가 종료되면 삭제")]),s._v(" "),e("li",[s._v("/bin/bash: 리눅스의 경우 컨테이너에서 bash 쉘을 이용")])]),s._v(" "),e("h3",{attrs:{id:"컨테이너-목록-확인"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-목록-확인"}},[s._v("#")]),s._v(" 컨테이너 목록 확인")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker ps\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("-a : 정지된 컨테이너까지 출력")]),s._v(" "),e("li",[s._v("-q : 컨테이너 ID만 출력")])]),s._v(" "),e("h3",{attrs:{id:"실행중인-컨테이너-shell에서-빠져나오기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#실행중인-컨테이너-shell에서-빠져나오기"}},[s._v("#")]),s._v(" 실행중인 컨테이너 shell에서 빠져나오기")]),s._v(" "),e("ul",[e("li",[s._v("exit : 쉘을 빠져나오면서 컨테이너를 종료")]),s._v(" "),e("li",[s._v("ctrl + p  + q 입력 : 컨테이너를 종료하지 않고 쉘만 빠져나옴")])]),s._v(" "),e("h3",{attrs:{id:"실행중인-컨테이너로-접속하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#실행중인-컨테이너로-접속하기"}},[s._v("#")]),s._v(" 실행중인 컨테이너로 접속하기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker attach sung-something\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"실행중인-컨테이너-정지하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#실행중인-컨테이너-정지하기"}},[s._v("#")]),s._v(" 실행중인 컨테이너 정지하기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker stop sung-something\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"컨테이너-삭제하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-삭제하기"}},[s._v("#")]),s._v(" 컨테이너 삭제하기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker rm sung-something\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("-f : 실행중인 컨테이너도 강제로 정지하고 삭제")])]),s._v(" "),e("h3",{attrs:{id:"컨테이너-모두-삭제하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-모두-삭제하기"}},[s._v("#")]),s._v(" 컨테이너 모두 삭제하기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## Linux\n$ docker rm $(docker ps -a -q)\n\n## Windows\n> FOR /f \"tokens=*\" %i IN ('docker ps -a -q') DO docker rm %i\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"이미지-삭제하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이미지-삭제하기"}},[s._v("#")]),s._v(" 이미지 삭제하기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker rmi ubuntu:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("[이미지 이름]:[태그] 형식을 사용해도 되고 이미지 ID를 사용해도 된다.")]),s._v(" "),e("li",[s._v("이미지 이름만 입력할 경우 태그에 관계없이 이미지 이름만 같으면 모두 삭제된다.")])]),s._v(" "),e("h3",{attrs:{id:"이미지-모두-삭제하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이미지-모두-삭제하기"}},[s._v("#")]),s._v(" 이미지 모두 삭제하기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('## Linux\n$ docker rmi $(docker images -q)\n\n## Windows\n> FOR /f "tokens=*" %i IN (\'docker images -q -f "dangling=true"\') DO docker rmi %i\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"컨테이너-변경사항-확인하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-변경사항-확인하기"}},[s._v("#")]),s._v(" 컨테이너 변경사항 확인하기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker diff [컨테이너 ID or NAME]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("어떤 이미지로 실행된 컨테이너 안의 내용의 변경되었다면, 버전 관리 시스템처럼 diff 명령어로 어떤 점이 바뀌었는지 확인할 수 있다.")]),s._v(" "),e("h3",{attrs:{id:"컨테이너로-이미지-만들기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너로-이미지-만들기"}},[s._v("#")]),s._v(" 컨테이너로 이미지 만들기")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker commit [컨테이너 ID or NAME] [새로운 컨테이너 이름]:[태그]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("버전 관리 시스템처럼 commit 명령어로 변경된 컨테이너를 새로운 이미지로 만들 수 있다.")]),s._v(" "),e("h3",{attrs:{id:"dockerfile을-통한-이미지-빌드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile을-통한-이미지-빌드"}},[s._v("#")]),s._v(" Dockerfile을 통한 이미지 빌드")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker build -t [image name:tag] -f [Dockerfile 경로]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"이미지-파일-export"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이미지-파일-export"}},[s._v("#")]),s._v(" 이미지 파일 Export")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ sudo docker save -o [내보낼 경로]/[내보낼 이름] [내보낼 이미지 ID or NAME]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"이미지-파일-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이미지-파일-import"}},[s._v("#")]),s._v(" 이미지 파일 Import")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ sudo docker load -i [이미지 파일 경로]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"볼륨-관련-명령어"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#볼륨-관련-명령어"}},[s._v("#")]),s._v(" 볼륨 관련 명령어")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## 볼륨 만들기\n$ docker volume create [VOLUME NAME]\n\n## 볼륨 목록 보기\n$ docker volume ls\n\n## 특정 볼륨 상세정보 보기\n$ docker volume inspect [VOLUME ID or NAME]\n\n## 볼륨 삭제하기\n$ docker volume rm [VOLUME ID or NAME]\n\n## 사용하지 않는 볼륨 모두 삭제\n$ docker volume prune\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);