# 1. Hyperledger Fabric Docker Images

## 1.1 하이페레저 패브릭 관련 도커 이미지

- [hyperledger/fabric-ca](https://hub.docker.com/r/hyperledger/fabric-ca) 
  > CA 서버 이미지
  
- [hyperledger/fabric-zookeeper](https://hub.docker.com/r/hyperledger/fabric-zookeeper)
  > 멀티 Orderer를 지원 / MQ 환경을 구축하는데 필요한 Zookeeper

- [hyperledger/fabric-kafka](https://hub.docker.com/r/hyperledger/fabric-kafka)
  > 멀티 Orderer를 지원 / MQ 환경을 구축하는데 필요한 Kafka

- [hyperledger/fabric-nodeenv](https://hub.docker.com/r/hyperledger/fabric-nodeenv)
  > Node.js 용 Chaincode를 구동하기 위한 이미지
  
- [hyperledger/fabric-javaenv](https://hub.docker.com/r/hyperledger/fabric-javaenv)
  > Java 용 Chaincode를 구동하기 위한 이미지
  
- [hyperledger/fabric-ccenv](https://hub.docker.com/r/hyperledger/fabric-ccenv)
  > Go 용 Chaincode를 구동하기 위한 이미지
  
- [hyperledger/fabric-tools](https://hub.docker.com/r/hyperledger/fabric-tools)
  > Blockchain 네트워크를 관리하고 스마트컨트랜트 관리 설치하는 기능을 제공하는 이미지

- [hyperledger/fabric-orderer](https://hub.docker.com/r/hyperledger/fabric-orderer)
  > Hyperledger Fabric Orderer(블록 생성 담당) 이미지
  
- [hyperledger/fabric-peer](https://hub.docker.com/r/hyperledger/fabric-peer)
  > Hyperledger Fabric Peer(트랜잭션을 발생시키고 Chaincode를 실행하며 원장을 가지는 녀석) 이미지
  
- [hyperledger/fabric-baseos](https://hub.docker.com/r/hyperledger/fabric-baseos)
  > Hyperledger Fabric 기본 이미지로 Chaincode 구동할때 사용