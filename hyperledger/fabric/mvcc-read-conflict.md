# MVCC READ CONFLICT 해결점 고찰

![](https://image.slidesharecdn.com/fabric-high-throughtput-190916161316/95/fabric-highthroughtput-19-1024.jpg?cb=1569051575)

## [high-throughput](https://github.com/hyperledger/fabric-samples/tree/master/high-throughput) 검토 결과
1. Delta Transactions
    => 토근거래에 부적합

2. Balance Transfer
polling the aggregate value regularly - this operation can be performed on a peer dedicated to this function that would not slow down or impact the performance of peers processing customer transactions.
breaking up the submission and verification steps of the balance transfer
    => 거래 로그로만 기록. 부적합.

## [How to prevent key collisions in Hyperledger Fabric](https://medium.com/@gatakka/how-to-prevent-key-collisions-in-hyperledger-fabric-chaincode-303700716733) 분석

1. No duplicated keys
    장점:
    - 구현하기 쉬움
    - 키 중복이 없음
    - Throughput ↑↑↑
    단점:
    - MVCC는 해결이 되나 Double Spending 문제 발생
    결과: remittance 에 부적합

2. Put requests in queue
    장점:
    - 구현하기 쉬움
    - 키 중복 없음
    - Throughput ↑↑
    단점:
    - Application Layer (e.g. TxBooster) 는 Chanincode에 종속됨
    - 스케일-아웃 안됨
    - Queue 관리하기 힘듬
    결과: remittance 에 부적합

3. Running total
    장점:
    - 구현하기 쉬움
    - Application Layer는 Chaincode에 종속되지 않음
    - 스케일 아웃 가능
    단점:
    - Double Spending 문제 발생
    - Objective 값은 응답 늦음
    - 금융에서는 부적합
    결과: remittance 에 부적합

4. Batching
    장점:
    - 키 중복 없음
    - Throughput ↑↑↑
    - 원장에는 최신값은 저장됨
    단점:
    - 구현 힘듬
    - Chaincode는 Multiple Tx 를 핸들링(Multiple Tx → Single Tx) 하게 개발되어야함
    - 멀티 스레드일때 MVCC 발생 (Pre-트랜잭션 응답후 다음 트랜잭션 수행해야함)
    결과:
    - Samsung SDS Nexledger 구현방식(멀티 스레드방식이므로 MVCC발생, MVCC발생시 Retry)
    - 현재 TxBooster(가칭) 구현방식 (멀티 스레드방식이므로 MVCC발생)
