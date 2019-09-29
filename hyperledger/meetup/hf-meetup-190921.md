# Hyperledger Korea UserGroup Meetup 
## 2019년 09월 21일

## 주제
* 하이퍼레저 2.0과 이전 버전과의 비교
* 하이퍼레저 패브릭의 MSP 동작방식 확인 : 아쉬움. 
* Fabric high-throughput : 흥미로운 부분
* 쿠버네티스 기반 Hyperledger Fabric 30분만에 맛보기 : 시간이 없어서 거의 진행 안함.

## 하이퍼레저 2.0과 이전 버전과의 비교

### Token Cli 설정
`/tmp`에 `json`파일 생성

* `configorg1.json`
  ```json
  {
    "ChannelID":"",
    "MSPInfo":{
      "MSPConfigPath":"",
      "MSPID":"Org1MSP",
      "MSPType":"bccsp"
    },
    "Orderer":{
      "Address":"orderer.example.com:7050",
      "ConnectionTimeout":0,
      "TLSEnabled":true,
      "TLSRootCertFile":"/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem",
      "ServerNameOverride":""
    },
    "CommitterPeer":{
      "Address":"peer0.org1.example.com:7051",
      "ConnectionTimeout":0,
      "TLSEnabled":true,
      "TLSRootCertFile":"/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt",
      "ServerNameOverride":""
    },
    "ProverPeer":{
      "Address":"peer0.org1.example.com:7051",
      "ConnectionTimeout":0,
      "TLSEnabled":true,
      "TLSRootCertFile":"/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt",
      "ServerNameOverride":""
    }
  }
  ```

* `configorg2.json`
  ```json
  {
    "ChannelID":"",
    "MSPInfo":{
      "MSPConfigPath":"",
      "MSPID":"Org2MSP",
      "MSPType":"bccsp"
    },
    "Orderer":{
      "Address":"orderer.example.com:7050",
      "ConnectionTimeout":0,
      "TLSEnabled":true,
      "TLSRootCertFile":"/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem",
      "ServerNameOverride":""
    },
    "CommitterPeer":{
      "Address":"peer0.org2.example.com:9051",
      "ConnectionTimeout":0,
      "TLSEnabled":true,
      "TLSRootCertFile":"/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt",
      "ServerNameOverride":""
    },
    "ProverPeer":{
      "Address":"peer0.org2.example.com:9051",
      "ConnectionTimeout":0,
      "TLSEnabled":true,
      "TLSRootCertFile":"/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt",
      "ServerNameOverride":""
    }
  }
  ```

* `shares.json`
  ```json
  [
    {
    "recipient":"Org2MSP:/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/users/User1@org2.example.com/msp",
    "quantity":"50"
    }
  ]
  ```

### BYFN 구동
```shell
# FabToken 실습에서 사용할 설정 파일 확인
$ ls /tmp/*.json
/tmp/configorg1.json  /tmp/configorg2.json  /tmp/shares.json

# BYFN 구동
$ cd $HOME/meetup/1906/fabric-samples/first-network/
$ ./byfn.sh up
Starting for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...
LOCAL_VERSION=2.0.0
DOCKER_IMAGE_VERSION=2.0.0-alpha
=================== WARNING ===================
  Local fabric binaries and docker images are
  out of  sync. This may cause problems.
...
========= All GOOD, BYFN execution completed ===========
```

```shell
$ cp /tmp/*.json $HOME/meetup/1906/fabric-samples/first-network/crypto-config
$ cd $HOME/meetup/1906/fabric-samples/first-network/crypto-config
$ ls *.json
configorg1.json  configorg2.json  shares.json

```

### FabToken 실습
```shell
# CLI 컨테이너 접속
$ docker exec -it cli bash
bash-4.4# 
bash-4.4# ls
channel-artifacts/  crypto/             log.txt            mycc.tar.gz        mychannel.block    scripts/
bash-4.4# cd crypto/
# 설정 파일 확인
bash-4.4# ls
configorg1.json       configorg2.json       ordererOrganizations/  peerOrganizations/     shares.json
bash-4.4#

```

Issue
  - 토큰명: BYFNcoins
  - 수량: 100
  - 소유자: User1@org1.example.com
  ```shell
  bash-4.4# token issue \
  --config /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/configorg1.json \
  --mspPath /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp \
  --channel mychannel \
  --type BYFNcoins \
  --quantity 100 \
  --recipient Org1MSP:/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp
  
  Orderer Status [SUCCESS]
  Committed [true]
  
  ```

List
  ```shell
  bash-4.4# token list \
  --config /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/configorg1.json \
  --mspPath /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp \
  --channel mychannel
  
  {"tx_id":"0b6f347a438399c24c5aa00a78d58a20cd6a89c6700ad3ad0fdccf8f90ee1c54"}
  [BYFNcoins,100]
  
  ```

Transfer
  - Token ID: 목록 조회로 확인된 "tx_id"키를 포함하는 JSON
  - 수신자: User1@org2.example.com
  - 전송 수량: 50
  ```shell
  bash-4.4# token transfer \
  --config /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/configorg1.json \
  --mspPath /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp \
  --channel mychannel \
  --tokenIDs '[{"tx_id":"0b6f347a438399c24c5aa00a78d58a20cd6a89c6700ad3ad0fdccf8f90ee1c54"}]' \
  --shares /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/shares.json
  
  Orderer Status [SUCCESS]
  Committed [true]
  
  ```
  토큰수량 확인
  ```shell
  # User1@org1.example.com 토큰 조회
  bash-4.4# token list \
  --config /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/configorg1.json \
  --mspPath /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp \
  --channel mychannel
  
  {"tx_id":"14d97dac90a9acc68432abaad7192eafb46887a2cb8b469b7db43ad07d27e5d1","index":1}
  [BYFNcoins,50]
  
  # User1@org2.example.com 토큰 조회
  bash-4.4# token list \
  --config /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/configorg2.json \
  --mspPath /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/users/User1@org2.example.com/msp \
  --channel mychannel
  
  {"tx_id":"14d97dac90a9acc68432abaad7192eafb46887a2cb8b469b7db43ad07d27e5d1"}
  [BYFNcoins,50]
  ```

Redeem
  - Token ID: 목록 조회로 확인된 "tx_id"키를 포함하는 JSON
  - 소유자: User1@org1.example.com
  - 상환 수량: 25

  ```shell
  bash-4.4# token redeem \
  --config /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/configorg1.json \
  --mspPath /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp \
  --channel mychannel \
  --tokenIDs '[{"tx_id":"14d97dac90a9acc68432abaad7192eafb46887a2cb8b469b7db43ad07d27e5d1","index":1}]' \
  --quantity 25
  
  Orderer Status [SUCCESS]
  Committed [true]
  bash-4.4# token list \
  --config /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/configorg1.json \
  --mspPath /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp \
  --channel mychannel
  {"tx_id":"921e4e8efdd8ff8246a3d6d19828b4e2665db6bfaefc1ae6bc73066d75dee1e6","index":1}
  [BYFNcoins,25]
  ```

