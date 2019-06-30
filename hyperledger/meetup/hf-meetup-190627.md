# Hyperledger Korea UserGroup Meetup 
## 2019년 06월 27일

## 주제
* Hyperledger FabToken Overview 및 실습

## 자료
* 발표 자료 - https://www.slideshare.net/secret/mOK4nVBWIFKBOR
* 실습 자료 - https://github.com/hlkug/meetup/blob/master/201906/핸즈온%20랩.md

## Hyperledger Fabric v2.0 Alpha - FabToken Overview, Hands-On Lab

## Enterprise Blockchain - Token 부분
* R3 Corda – Tokens SDK 
* JP Morgan Quorum – JPM Coin 
  - https://www.jpmorgan.com/global/news/digital-coin-payments 
* Hyperledger Fabric v2 – FabToken 
  - Token Management Enablement in Hyperledger Fabric 
    * http://bit.ly/2KvVKb4 
  - Token (base support) - Support Issue, Transfer, and Redeem Token Operations 
    * https://jira.hyperledger.org/browse/FAB-11144 
  - Using FabToken 
    * https://hyperledger-fabric.readthedocs.io/en/latest/token/FabToken.html

## FabToken
* Hyperledger Fabric v2.0
  ->  https://github.com/hyperledger/fabric/tree/master/token
* Token Management System 
* Unspent Transaction Output (UTXO) 모델 
* 합의, 검증을 위해 Orderer, Peer 사용 
* 토큰 생성, 관리를 위해 체인코드를 사용하지 않음.(Endorsement Policy X) 
* s송/수신자 식별 – MSP 
* Token Lifecycle: Issue, Transfer, Redeem, List

## UTXO
* 패브릭에서는 상태(State)는 Key-Value 형태로 저장 
  - Key : Namespace + TokenPrefix + Owner + TransactionId + Index Value: Quantity 
* Unspent Transaction(Output)은 Ledger(State DB)에 저장되고 Spent Transaction(Input)은 Ledger(State DB)에서 삭제됨


### 느낀점
fabtoken hands-on 통해 실제 토큰 issue-transfer-redeem 절차 눈으로 확인해서 좋음.
사진에 또 나왔네.

![](https://github.com/hlkug/meetup/blob/master/201906/images/meetup.jpg?raw=true)
