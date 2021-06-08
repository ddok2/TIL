# Hyperledger Korea UserGroup Meetup
## 2019년 03월 21일

# 주제
* 멀티 노드에서 하이퍼레저 패브릭 네트워크 구성하기

# 사전 작업
## 1. Virtual Box & Ubuntu 설치

## 1.1. Virtual Box 다운로드 및 설치

아래 사이트에서 Virtual Box를 다운로드한 후 설치합니다.

* https://www.virtualbox.org/wiki/Downloads
* 설치 동영상 - https://www.youtube.com/watch?v=4ZI7Z8S4d0Y



## 1.2. Ubuntu 16.04(Server) 설치

### 1.2.1 다운로드

아래 사이트에서 Ubuntu 16.04 Server ISO파일을 다운로드 합니다.

* http://ftp.kaist.ac.kr/ubuntu-cd/16.04/ubuntu-16.04.6-server-amd64.iso



### 1.2.2 Virtual Box에 VM(Virtual Machine) 생성

아래 사이트를 참조해서 VM을 생성합니다.

- https://moomini.tistory.com/10
  - VM 갯수: 2개
  - VM 명: node1, node2
  - CPU: 2개
  - Memory: 1~2GB
  - Disk: 15GB~



생성한 후 정상적으로 인터넷이 되는 지 확인합니다.

```shell
$ curl http://google.com
```



### 1.2.3 호스트 전용 어댑터 설정

VM간 통신을 위해 **어댑터 2**에 호스트 전용 어댑터를 설정합니다.

* 참고 문서 - http://blog.hkwon.me/virtualbox-hoseuteu-jeonyong-eodaebteo-seoljeong-2/



#### 1.2.3.1 호스트 네트워크 관리자 설정

![파일_호스트 네트워크 관리자](https://github.com/hlkug/meetup/raw/master/201903/images/파일_호스트%20네트워크%20관리자.png)

호스트 네트워크 관리자의 정보는 아래와 같이 설정하면 됩니다. 호스트 전용 어댑터가 이미 있는 경우는 기존 정보를 아래와 같이 설정하고 없는 경우는 **생성(Create)**버튼을 통해 생성하면 됩니다.

* IP 주소: 192.168.56.1
* IP 서브넷 마스크: 255.255.255.0

![image-20190305001411040](https://github.com/hlkug/meetup/raw/master/201903/images/Host%20Network%20Manager.png)



#### 1.2.3.2 VM에 호스트 전용 어댑터 추가

VM 설정의 네트워크 항목에서 아래와 같이 **어댑터 2**를 추가합니다. 참고로 **어댑터 1**은 NAT가 설정되어 있습니다.

![VM Network](https://github.com/hlkug/meetup/raw/master/201903/images/VM%20Network.png)



#### 1.2.3.3 Ubuntu 네트워크 어댑터 추가

Ubuntu에 로그인한 후 **ifconfig** 명령어를 실행하면 **enp0s8** 어댑터가 추가된 것을 볼 수 있습니다.

```shell
$ ifconfig
docker0   Link encap:Ethernet  HWaddr 02:42:98:05:5c:67
          inet addr:172.17.0.1  Bcast:172.17.255.255  Mask:255.255.0.0
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

enp0s3    Link encap:Ethernet  HWaddr 08:00:27:57:ca:06
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe57:ca06/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:352 errors:0 dropped:0 overruns:0 frame:0
          TX packets:96 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:428882 (428.8 KB)  TX bytes:8090 (8.0 KB)

enp0s8    Link encap:Ethernet  HWaddr 08:00:27:4b:89:26
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:127 errors:0 dropped:0 overruns:0 frame:0
          TX packets:110 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:11397 (11.3 KB)  TX bytes:15267 (15.2 KB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:172 errors:0 dropped:0 overruns:0 frame:0
          TX packets:172 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1
          RX bytes:12560 (12.5 KB)  TX bytes:12560 (12.5 KB)
```



아래와 같이 **enp0s8** 어댑터에 네트워크 정보를 설정합니다.

* node1 VM - 192.168.56.2
* node2 VM - 192.168.56.3

```shell
$ sudo vi /etc/network/interfaces
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp0s3
iface enp0s3 inet dhcp

auto enp0s8
iface enp0s8 inet static
address 192.168.56.2
netmask 255.255.255.0
network 192.168.56.0
```



네트워크 어댑터 정보 추가한 후 네트워크 서비스를 재시작합니다.

```shell
$ sudo systemctl restart networking
```



정상적으로 네트워크 서비스가 재시작된 후 각 VM에서 다른 VM으로 **ping** 프로그램을 사용하여 네트워크 접속을 확인합니다.

* node1(192.168.56.2) VM에서 node2(192.168.56.3) VM 접속 확인

```shell
yhchung@node1:~$ ping 192.168.56.3
PING 192.168.56.3 (192.168.56.3) 56(84) bytes of data.
64 bytes from 192.168.56.3: icmp_seq=1 ttl=64 time=0.024 ms
64 bytes from 192.168.56.3: icmp_seq=2 ttl=64 time=0.038 ms
^C
--- 192.168.56.3 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 999ms
rtt min/avg/max/mdev = 0.024/0.031/0.038/0.007 ms
```

- node2(192.168.56.3) VM에서 node1(192.168.56.2) VM 접속 확인

```shell
yhchung@node2:~$ ping 192.168.56.2
PING 192.168.56.2 (192.168.56.2) 56(84) bytes of data.
64 bytes from 192.168.56.2: icmp_seq=1 ttl=64 time=0.024 ms
64 bytes from 192.168.56.2: icmp_seq=2 ttl=64 time=0.038 ms
^C
--- 192.168.56.2 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 999ms
rtt min/avg/max/mdev = 0.024/0.031/0.038/0.007 ms
```

* 호스트(Mac, Windows)에서 ssh 또는 putty를 이용하여 접속 확인

```shell
$ ssh yhchung@192.168.56.2
yhchung@192.168.56.2's password:
Welcome to Ubuntu 16.04.6 LTS (GNU/Linux 4.4.0-142-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

11 packages can be updated.
3 updates are security updates.

New release '18.04.2 LTS' available.
Run 'do-release-upgrade' to upgrade to it.


Last login: Mon Feb 25 21:58:32 2019 from 192.168.56.1
yhchung@node1:~$
```



# 2. Docker 설치

기존에 설치된 Docker 엔진을 먼저 삭제합니다.

```shell
$ sudo apt-get remove docker docker-engine docker.i
```



의존성(depedencies) 패키지를 먼저 설치합니다.

```shell
$ sudo apt-get install \
apt-transport-https \
ca-certificates \
curl \
software-properties-common
```



Docker 레포지토리 GPG 키를 추가합니다.

```shell
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

$ sudo add-apt-repository \
 "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
 $(lsb_release -cs) \
 stable"
```



Docker를 설치합니다.

```shell
$ sudo apt-get update
$ sudo apt-get install docker-ce
```



현재 사용자에게 Docker엔진 제어 권한을 부여하기 위해 docker 그룹에 포함시킵니다.

```shell
$ sudo usermod -a -G docker $USER
```



터미널/콘솔 재 로그인 후 도커가 정상적으로 설치되었는 지 확인합니다.

```shell
$ docker version
Client:
 Version:           18.09.2
 API version:       1.39
 Go version:        go1.10.6
 Git commit:        6247962
 Built:             Sun Feb 10 04:13:50 2019
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          18.09.2
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.10.6
  Git commit:       6247962
  Built:            Sun Feb 10 03:42:13 2019
  OS/Arch:          linux/amd64
  Experimental:     false
```



# 3. Docker Compose 설치

Docker Compose 파일을 /usr/local/bin 디렉토리에 다운로드 합니다.

```shell
$ sudo curl -L https://github.com/docker/compose/releases/download/1.23.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```



Docker Compose 파일(docker-compose)에 실행권한을 설정합니다.

```shell
$ sudo chmod +x /usr/local/bin/docker-compose
```



Docker Compose가 정상적으로 설치되었는 지 확인 합니다.

```shell
$ docker-compose --version
docker-compose version 1.23.2, build 1110ad01
```



# 4. First Network 구성하기

Hyperledger Fabric의 샘플 중에 **first-network** 을 사용하여 2개의 VM에 각각 구성해 봅니다

* 참고 문서 - https://hyperledger-fabric.readthedocs.io/en/latest/build_network.html



Github에서 fabric-samples 소스를 다운로드 받습니다.

```shell
$ git clone https://github.com/hyperledger/fabric-samples.git ~/fabric-samples
```



네트워크 구성에 필요한 바이너리 파일 및 Docker Image를 다운로드 받습니다.

```shell
$ cd ~/fabric-samples/scripts
$ ./bootstrap.sh 1.4.0

Installing Hyperledger Fabric binaries

===> Downloading version 1.4.0 platform specific fabric binaries
===> Downloading:  https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric/hyperledger-fabric/linux-amd64-1.4.0/hyperledger-fabric-linux-amd64-1.4.0.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 50.9M  100 50.9M    0     0  1334k      0  0:00:39  0:00:39 --:--:-- 1799k
==> Done.
===> Downloading version 1.4.0 platform specific fabric-ca-client binary
===> Downloading:  https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric-ca/hyperledger-fabric-ca/linux-amd64-1.4.0/hyperledger-fabric-ca-linux-amd64-1.4.0.tar.gz
==> Partial binary file found. Resuming download...
==> File downloaded. Verifying the md5sum...
==> Extracting hyperledger-fabric-ca-linux-amd64-1.4.0.tar.gz...
==> Done.

Installing Hyperledger Fabric docker images
```



샘플 소스중 first-network 디렉토리로 이동합니다.

```shell
$ cd ../first-network
```



## 4.1 Network Artifacts 생성

네트워크 구성에 필요한 MSP, Genesis Block, Channel Tx,…등을 생성합니다.

```shell
$ ./byfn.sh generate
./byfn.sh generate
Generating certs and genesis block for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...
/home/yhchung/fabric-samples/first-network/../bin/cryptogen

##########################################################
##### Generate certificates using cryptogen tool #########
##########################################################
+ cryptogen generate --config=./crypto-config.yaml
org1.example.com
org2.example.com
+ res=0
+ set +x

/home/yhchung/fabric-samples/first-network/../bin/configtxgen
##########################################################
#########  Generating Orderer Genesis block ##############
##########################################################
CONSENSUS_TYPE=solo
+ '[' solo == solo ']'
+ configtxgen -profile TwoOrgsOrdererGenesis -channelID byfn-sys-channel -outputBlock ./channel-artifacts/genesis.block
2019-03-06 23:50:10.048 KST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-03-06 23:50:10.076 KST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 002 orderer type: solo
2019-03-06 23:50:10.076 KST [common.tools.configtxgen.localconfig] Load -> INFO 003 Loaded configuration: /home/yhchung/fabric-samples/first-network/configtx.yaml
2019-03-06 23:50:10.101 KST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 004 orderer type: solo
2019-03-06 23:50:10.102 KST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 005 Loaded configuration: /home/yhchung/fabric-samples/first-network/configtx.yaml
2019-03-06 23:50:10.103 KST [common.tools.configtxgen] doOutputBlock -> INFO 006 Generating genesis block
2019-03-06 23:50:10.104 KST [common.tools.configtxgen] doOutputBlock -> INFO 007 Writing genesis block
+ res=0
+ set +x

#################################################################
### Generating channel configuration transaction 'channel.tx' ###
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel
2019-03-06 23:50:10.134 KST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-03-06 23:50:10.157 KST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /home/yhchung/fabric-samples/first-network/configtx.yaml
2019-03-06 23:50:10.181 KST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-03-06 23:50:10.181 KST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /home/yhchung/fabric-samples/first-network/configtx.yaml
2019-03-06 23:50:10.181 KST [common.tools.configtxgen] doOutputChannelCreateTx -> INFO 005 Generating new channel configtx
2019-03-06 23:50:10.184 KST [common.tools.configtxgen] doOutputChannelCreateTx -> INFO 006 Writing new channel tx
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org1MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org1MSPanchors.tx -channelID mychannel -asOrg Org1MSP
2019-03-06 23:50:10.212 KST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-03-06 23:50:10.234 KST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /home/yhchung/fabric-samples/first-network/configtx.yaml
2019-03-06 23:50:10.255 KST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-03-06 23:50:10.256 KST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /home/yhchung/fabric-samples/first-network/configtx.yaml
2019-03-06 23:50:10.256 KST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 005 Generating anchor peer update
2019-03-06 23:50:10.257 KST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 006 Writing anchor peer update
+ res=0
+ set +x

#################################################################
#######    Generating anchor peer update for Org2MSP   ##########
#################################################################
+ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/Org2MSPanchors.tx -channelID mychannel -asOrg Org2MSP
2019-03-06 23:50:10.279 KST [common.tools.configtxgen] main -> INFO 001 Loading configuration
2019-03-06 23:50:10.299 KST [common.tools.configtxgen.localconfig] Load -> INFO 002 Loaded configuration: /home/yhchung/fabric-samples/first-network/configtx.yaml
2019-03-06 23:50:10.320 KST [common.tools.configtxgen.localconfig] completeInitialization -> INFO 003 orderer type: solo
2019-03-06 23:50:10.320 KST [common.tools.configtxgen.localconfig] LoadTopLevel -> INFO 004 Loaded configuration: /home/yhchung/fabric-samples/first-network/configtx.yaml
2019-03-06 23:50:10.320 KST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 005 Generating anchor peer update
2019-03-06 23:50:10.321 KST [common.tools.configtxgen] doOutputAnchorPeersUpdate -> INFO 006 Writing anchor peer update
+ res=0
+ set +x
```



## 4.2 Network 실행하기

2개 Org에 각 Org마다 2개의 Peer를 가진 네트워크를 구성합니다.

```shell
$ ./byfn.sh up
abric-samples/first-network$ ./byfn.sh up
Starting for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...
LOCAL_VERSION=1.4.0
DOCKER_IMAGE_VERSION=1.4.0
...
===================== Channel 'mychannel' created =====================
===================== peer0.org1 joined channel 'mychannel' =====================
===================== peer1.org1 joined channel 'mychannel' =====================
===================== peer0.org2 joined channel 'mychannel' =====================
===================== peer1.org2 joined channel 'mychannel' =====================
===================== Anchor peers updated for org 'Org1MSP' on channel 'mychannel' =====================
===================== Anchor peers updated for org 'Org2MSP' on channel 'mychannel' =====================
===================== Chaincode is installed on peer0.org1 =====================
===================== Chaincode is installed on peer0.org2 =====================
===================== Chaincode is instantiated on peer0.org2 on channel 'mychannel' =====================
===================== Querying on peer0.org1 on channel 'mychannel'... =====================
===================== Query successful on peer0.org1 on channel 'mychannel' =====================
===================== Invoke transaction successful on peer0.org1 peer0.org2 on channel 'mychannel' =====================
===================== Chaincode is installed on peer1.org2 =====================
===================== Querying on peer1.org2 on channel 'mychannel'... =====================
===================== Query successful on peer1.org2 on channel 'mychannel' =====================
========= All GOOD, BYFN execution completed ===========


 _____   _   _   ____
| ____| | \ | | |  _ \
|  _|   |  \| | | | | |
| |___  | |\  | | |_| |
|_____| |_| \_| |____/
```



## 4.3 Network 제거하기

Docker Container, Volume, Network을 제거합니다.

```shell
$ ./byfn.sh down
Stopping for channel 'mychannel' with CLI timeout of '10' seconds and CLI delay of '3' seconds
Continue? [Y/n] y
proceeding ...
Stopping cli                    ... done
Stopping peer1.org1.example.com ... done
Stopping peer0.org1.example.com ... done
Stopping peer0.org2.example.com ... done
Stopping peer1.org2.example.com ... done
Stopping orderer.example.com    ... done
Removing cli                    ... done
Removing peer1.org1.example.com ... done
Removing peer0.org1.example.com ... done
Removing peer0.org2.example.com ... done
Removing peer1.org2.example.com ... done
Removing orderer.example.com    ... done
Removing network net_byfn
Removing volume net_orderer.example.com
Removing volume net_peer0.org1.example.com
Removing volume net_peer1.org1.example.com
Removing volume net_peer0.org2.example.com
Removing volume net_peer1.org2.example.com
Removing volume net_peer0.org3.example.com
WARNING: Volume net_peer0.org3.example.com not found.
Removing volume net_peer1.org3.example.com
WARNING: Volume net_peer1.org3.example.com not found.
703fcdc93c08
456ec322278d
77f524ea6411
Untagged: dev-peer1.org2.example.com-mycc-1.0-26c2ef32838554aac4f7ad6f100aca865e87959c9a126e86d764c8d01f8346ab:latest
Deleted: sha256:132bd63a89b8300197b48de8639a1c06cff85a19892ed44e5733ff09fbf5148e
Deleted: sha256:d6196392dca7b9ebdead839d7fee516841a4f06e0255ca2cd60ff161bbbffba4
Deleted: sha256:ed0413b7ce7d8aa11145d3cea9b928ed4d8422b3dec94ae0b78c826ee4b32b7a
Deleted: sha256:afbd0d836f4c62d76d8bc77e361053a4c4d4f3aa12b51e26e0bae355a9645c1e
Untagged: dev-peer0.org1.example.com-mycc-1.0-384f11f484b9302df90b453200cfb25174305fce8f53f4e94d45ee3b6cab0ce9:latest
Deleted: sha256:7bed5469204c52cb54c1ff27385ed0832686aa55a352b9e5684d6d76778d9274
Deleted: sha256:2de292838ce06c80d465beaf547e412ac9f99d204412263b8914357e3d55689c
Deleted: sha256:53af16e7907c24cd67051b00590bd54d86e8e413a43c2989e024211f4496230a
Deleted: sha256:20b361d49f8d77522b9ce03fa7e3956f6f6fde13a36dbb02d79d9952f186ebee
Untagged: dev-peer0.org2.example.com-mycc-1.0-15b571b3ce849066b7ec74497da3b27e54e0df1345daff3951b94245ce09c42b:latest
Deleted: sha256:3ce1da383ac2cfa767cdb2d84e50e3260c2ec5a1dbbf5c47b530471a2b7a7c99
Deleted: sha256:d11d98c0c6ccc3425a290e0b04519f9d040874d6204724dab728f11c2885be53
Deleted: sha256:f606190cd2099fd4123357645f149822ad9b4b62cbbe7ac982be535881ce229e
Deleted: sha256:272a490801e173030a8f4bfd552d3da2f4c56a7896b646a589f24efc12ee17db
```


## 느낀점
아쉽다.
