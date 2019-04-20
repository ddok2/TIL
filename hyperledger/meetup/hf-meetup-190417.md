# Hyperledger Korea UserGroup Meetup 
## 2019년 04월 17일

## 주제
* 쿠버네티스 기반 하이퍼레저 패브릭 네트워크 구축하기

## 쿠버네티스 기반 하이퍼레저 패브릭 네트워크 구축하기
* 사전 작업 자료 - https://github.com/hlkug/meetup/blob/master/201904/사전%20작업.md
* 핸즈온 랩 자료 - https://github.com/mjkong/mymarket
* 발표 자료 - https://www.slideshare.net/secret/w2d8vifOIl8icw

### k8s?
* 컨테이너 오케스트레이터 (실행 및 관리) 
* 다양한 클라우드 및 베어 메탈 환경 지원 
* Google Borg에서 시작되어 오픈소스화 됨 
* 100% Go 언어로 작성 
* 2015년 7월 V1.0이 CNCF ( Cloud Native Computing Foundation )에 기부 
* 2018년 3월 6일 CNCF에서 졸업한 첫 번째 프로젝트

### k8s 특징
* Automatic binpacking 
* Self-healing 
* Horizontal scaling 
* Service discovery and Load balancing 
* Automatic rollouts and rollbacks 
* Secret and configuration management 
* Storage orchestration 
* Batch execution

### k8s 가치
* 전 계층 가용성
  - 데이터 센터, 서버, 등 장애에 영향 없는 무중단 서비스 구현
  - 계층별 오류/고장에 대한 Fault Tolerant 방법 확인
* 워크로드 이식성
  - 특정 데이터 센터, H/W에 종속되지 않는 App 실행
  - 동적 물리 서버 자원 증설하여 용량 확대
* 자동화
  - 서비스 중지 없이 변경사항 적용 자동화
  - App 배포 중 무중단 서비스 제공
  
### 느낀점
k8s 대해서 배웠음. HF 구축은 못함.
