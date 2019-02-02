# Hyperledger Korea UserGroup Meetup 
## 2019년 01월 28일

## 주제
* Hyperledger Fabric v1.3, v1.4 새로운 기능
* Hyperledger Fabric Kafka 기술 관련

## Hyperledger Fabric v1.3, v1.4 새로운 기능
### Hyperledger Fabric v1.3 New Features 
- Identity Mixer for anonymous transactions
  Idemix MSP(key, Cert) 생성 
  ```shell
    # --id.affiliation 옵션을 통해 Organizational Unit(OU) 설정, 
    # --id.attrs role=2 1(Member), 2(Admin) 
    $ fabric-ca-client register -u "http://localhost:7054" \
      --id.name "idemix.org1.hlkug" --id.secret "org1pw" --id.type "idemix" \
      --id.affiliation org1.department1 --id.attrs role=2 
  
    $ fabric-ca-client enroll -u "http://idemix.org1.hlkug:org1pw@localhost:7054" \
      --csr.cn "idemix.org1.hlkug" --csr.names="C=KR,O=hlkug,L=Seoul" --csr.hosts="idemix.org1.hlkug" \
      -M out/idemix.org1.hlkug/msp
  ```

- State-base endorsement 
- Java chaincode support 
  
### Hyperledger Fabric v1.4 New Features 
- Operational metrics for Fabric components 
- Health check endpoint 
    1. path: `/healthz`
      * request: GET /healthz
      * res: 
        - 200 OK, `{status: 'OK', time: '2019-01-21....'}`
        - 503, Service Unavailable, `{status: 'Service Unavailable', ...}`
    2. path: `/metrics`
      * request: GET /healthz
       
  쓸만한듯.

- Dynamic log levels 
- Private data reconciliation 
- Private data client access control 
  
Ref. - https://hyperledger- fabric.readthedocs.io/en/release-1.4

## Hyperledger Fabric Kafka 기술 관련
### 대표적인 설정
![](./images/190128.png)
