# Hyperledger Korea UserGroup Meetup 
## 2019년 07월 31일

## 주제
* RAFT 맛보기

## 자료
* 발표 자료 - http://thesecretlivesofdata.com/raft
* 실습 자료 - https://github.com/hlkug/meetup/blob/master/201907/핸즈온%20랩.md

## Raft 맛보기
### Generate cryptographic material
```shell
$ ./byfn.sh generate -o etcdraft
Generating certs and genesis block for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...

##########################################################
##### Generate certificates using cryptogen tool #########
##########################################################
+ cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
+ res=0
+ set +x

...
```

```shell
$ ./byfn.sh up -o etcdraft -l node
Starting for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...

...

Querying chaincode on peer0.org1...
===================== Querying on peer0.org1 on channel 'mychannel'... ===================== 
+ peer chaincode query -C mychannel -n fabcar -c '{"Args":["queryCar","CAR1"]}'
Attempting to Query peer0.org1 ...3 secs
+ res=0
+ set +x

{"color":"red","make":"Ford","model":"Mustang","owner":"Brad","docType":"car"}
===================== Query successful on peer0.org1 on channel 'mychannel' ===================== 

========= All GOOD, BYFN execution completed =========== 
```
