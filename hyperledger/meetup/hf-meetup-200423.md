# Hyperledger Korea UserGroup Meetup
## 2020년 04월 23일

## 주제
* Hyperledger Fabric v2.0: What's New?

## 자료
- 2020 Q1Hyperledger Update - https://docs.google.com/presentation/d/1-7Zu1CrekZcbLS1GyxyPQGChb3FZZxn5sY8HjIQx6o4/edit#slide=id.g59475fd5ec_0_115
- Hyperledger Fabric v2.0: What's New? - https://www.slideshare.net/hlkug/hyperledger-fabric-v20
- [핸즈온 랩](https://github.com/hlkug/meetup/blob/master/202004/핸즈온%20랩.md)

## Hyperledger Fabric v2.0: What's New?

## BYFN 구동 및 SACC 실습
### 체인코드 패키징
    ```shell
    # 체인코드 빌드
    $ cd ~/fabric-samples/chaincode/sacc
    $ GO111MODULE=on go mod vendor
    
    # 체인코드 패키지 생성
    $ docker exec cli peer lifecycle chaincode package sacc.tar.gz --path github.com/hyperledger/fabric-samples/chaincode/sacc/ --label sacc_1
    ```

### 체인코드 설치
    ```shell
    # peer0.org1
    $ docker exec cli peer lifecycle chaincode install sacc.tar.gz
    
    2020-04-19 14:30:44.051 UTC [cli.lifecycle.chaincode] submitInstallProposal -> INFO 001 Installed remotely: response:<status:200 payload:"\nGsacc_1:1bfe84738f826868c2a15b7165faafe9172204bc447b0d8e0ac5ae925264a514\022\006sacc_1" >
    2020-04-19 14:30:44.052 UTC [cli.lifecycle.chaincode] submitInstallProposal -> INFO 002 Chaincode code package identifier: sacc_1:1bfe84738f826868c2a15b7165faafe9172204bc447b0d8e0ac5ae925264a514
    ## 패키지 ID - sacc_1:1bfe84738f826868c2a15b7165faafe9172204bc447b0d8e0ac5ae925264a514
    
    # peer0.org2
    $ docker exec \
    -e CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp \
    -e CORE_PEER_ADDRESS=peer0.org2.example.com:9051 \
    -e CORE_PEER_LOCALMSPID="Org2MSP" \
    -e CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt \
    cli peer lifecycle chaincode install sacc.tar.gz
    
    2020-04-19 14:31:17.137 UTC [cli.lifecycle.chaincode] submitInstallProposal -> INFO 001 Installed remotely: response:<status:200 payload:"\nGsacc_1:1bfe84738f826868c2a15b7165faafe9172204bc447b0d8e0ac5ae925264a514\022\006sacc_1" >
    2020-04-19 14:31:17.138 UTC [cli.lifecycle.chaincode] submitInstallProposal -> INFO 002 Chaincode code package identifier: sacc_1:1bfe84738f826868c2a15b7165faafe9172204bc447b0d8e0ac5ae925264a514
    ## 패키지 ID - sacc_1:1bfe84738f826868c2a15b7165faafe9172204bc447b0d8e0ac5ae925264a514
    
    # Peer에 설치된 Chaincode 확인하기
    $ docker exec cli peer lifecycle chaincode queryinstalled
    
    Installed chaincodes on peer:
    Package ID: sacc_1:1bfe84738f826868c2a15b7165faafe9172204bc447b0d8e0ac5ae925264a514, Label: sacc_1
    ```

### 체인코드 Approve
체인코드를 채널에서 사용하기 위해서는 채널에 포함된 Org의 승인이 필요함. 

승인에 필요한 정족수는 MAJORITY의 과반수 이상 (ex. 2개의 Org인 경우 2개의 Org의 승인 필요)
    ```shell
    
    # peer0.org1
    $ docker exec cli peer lifecycle chaincode approveformyorg \
    --tls \
    --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem \
    --channelID mychannel \
    --name mycc --version 1 \
    --init-required --sequence 1 --waitForEvent \
    --package-id ${PACKAGE_ID}
    
    # peer0.org2
    $ docker exec \
    -e CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp \
    -e CORE_PEER_ADDRESS=peer0.org2.example.com:9051 \
    -e CORE_PEER_LOCALMSPID="Org2MSP" \
    -e CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt \
    cli peer lifecycle chaincode approveformyorg \
    --tls \
    --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem \
    --channelID mychannel --name mycc --version 1 \
    --init-required --sequence 1 --waitForEvent \
    --package-id ${PACKAGE_ID}
    ```

### 체인코드 Commit
체인코드를 활성화하기 위해 채널에 참여하고 있는 Peer 중 한개의 Peer에서 커밋
    ```shell
    # 승인 상태 확인
    $ docker exec cli peer lifecycle chaincode checkcommitreadiness \
    --channelID mychannel --name mycc \
    --init-required --version 1 --sequence 1 \
    --output json
    
    {
        "approvals": {
            "Org1MSP": true,
            "Org2MSP": true
        }
    }
    
    # 체인코드 커밋(instantiate)
    $ docker exec cli peer lifecycle chaincode commit \
    -o orderer.example.com:7050 \
    --tls \
    --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem \
    --peerAddresses peer0.org1.example.com:7051 \
    --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt \
    --peerAddresses peer0.org2.example.com:9051 \
    --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt \
    --channelID mychannel --name mycc --version 1 --sequence 1 \
    --init-required
    
    2020-04-19 14:58:25.807 UTC [chaincodeCmd] ClientWait -> INFO 001 txid [e98348e2febd3cccc76ce30a1a47d58d5b4b0a28ab47f6b0b4804852a64a71db] committed with status (VALID) at peer0.org2.example.com:9051
    2020-04-19 14:58:25.820 UTC [chaincodeCmd] ClientWait -> INFO 002 txid [e98348e2febd3cccc76ce30a1a47d58d5b4b0a28ab47f6b0b4804852a64a71db] committed with status (VALID) at peer0.org1.example.com:7051
    
    # 체인코드 커밋 상태 확인
    $ docker exec cli peer lifecycle chaincode querycommitted \
    --channelID mychannel --name mycc
    
    Committed chaincode definition for chaincode 'mycc' on channel 'mychannel':
    Version: 1, Sequence: 1, Endorsement Plugin: escc, Validation Plugin: vscc, Approvals: [Org1MSP: true, Org2MSP: true]
    
    ```
