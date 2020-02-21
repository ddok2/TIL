# Chaincode Upgrade

## peer chaincode upgrade
```shell

$ peer chaincode upgrade

Upgrade an existing chaincode with the specified one. The new chaincode will immediately replace the existing chaincode upon the transaction committed.

Usage:
  peer chaincode upgrade [flags]

Flags:
  -C, --channelID string               The channel on which this command should be executed
      --collections-config string      The fully qualified path to the collection JSON file including the file name
      --connectionProfile string       Connection profile that provides the necessary connection information for the network. Note: currently only supported for providing peer connection information
  -c, --ctor string                    Constructor message for the chaincode in JSON format (default "{}")
  -E, --escc string                    The name of the endorsement system chaincode to be used for this chaincode
  -h, --help                           help for upgrade
  -l, --lang string                    Language the chaincode is written in (default "golang")
  -n, --name string                    Name of the chaincode
  -p, --path string                    Path to chaincode
      --peerAddresses stringArray      The addresses of the peers to connect to
  -P, --policy string                  The endorsement policy associated to this chaincode
      --tlsRootCertFiles stringArray   If TLS is enabled, the paths to the TLS root cert files of the peers to connect to. The order and number of certs specified should match the --peerAddresses flag
  -v, --version string                 Version of the chaincode specified in install/instantiate/upgrade commands
  -V, --vscc string                    The name of the verification system chaincode to be used for this chaincode

Global Flags:
      --cafile string                       Path to file containing PEM-encoded trusted certificate(s) for the ordering endpoint
      --certfile string                     Path to file containing PEM-encoded X509 public key to use for mutual TLS communication with the orderer endpoint
      --clientauth                          Use mutual TLS when communicating with the orderer endpoint
      --connTimeout duration                Timeout for client to connect (default 3s)
      --keyfile string                      Path to file containing PEM-encoded private key to use for mutual TLS communication with the orderer endpoint
  -o, --orderer string                      Ordering service endpoint
      --ordererTLSHostnameOverride string   The hostname override to use when validating the TLS connection to the orderer
      --tls                                 Use TLS when communicating with the orderer endpoint
      --tlsHandshakeTimeShift duration      The amount of time to shift backwards for certificate expiration checks during TLS handshakes with the orderer endpoint
      --transient string                    Transient map of arguments in JSON encoding

```

### Upgrade Example
```shell
$ export ORDERER_CA=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
$ peer chaincode upgrade -o orderer.example.com:7050 --tls --cafile $ORDERER_CA -C mychannel -n mycc -v 1.2 -c '{"Args":["init","a","100","b","200","c","300"]}' -P "AND ('Org1MSP.peer','Org2MSP.peer')"
.
.
.
2018-02-22 18:26:31.433 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 003 Using default escc
2018-02-22 18:26:31.434 UTC [chaincodeCmd] checkChaincodeCmdParams -> INFO 004 Using default vscc
2018-02-22 18:26:31.435 UTC [chaincodeCmd] getChaincodeSpec -> DEBU 005 java chaincode enabled
2018-02-22 18:26:31.435 UTC [chaincodeCmd] upgrade -> DEBU 006 Get upgrade proposal for chaincode <name:"mycc" version:"1.1" >
.
.
.
2018-02-22 18:26:46.687 UTC [chaincodeCmd] upgrade -> DEBU 009 endorse upgrade proposal, get response <status:200 message:"OK" payload:"\n\004mycc\022\0031.1\032\004escc\"\004vscc*,\022\014\022\n\010\001\022\002\010\000\022\002\010\001\032\r\022\013\n\007Org1MSP\020\003\032\r\022\013\n\007Org2MSP\020\0032f\n \261g(^v\021\220\240\332\251\014\204V\210P\310o\231\271\036\301\022\032\205fC[|=\215\372\223\022 \311b\025?\323N\343\325\032\005\365\236\001XKj\004E\351\007\247\265fu\305j\367\331\275\253\307R\032 \014H#\014\272!#\345\306s\323\371\350\364\006.\000\356\230\353\270\263\215\217\303\256\220i^\277\305\214: \375\200zY\275\203}\375\244\205\035\340\226]l!uE\334\273\214\214\020\303\3474\360\014\234-\006\315B\031\022\010\022\006\010\001\022\002\010\000\032\r\022\013\n\007Org1MSP\020\001" >
.
.
.
2018-02-22 18:26:46.693 UTC [chaincodeCmd] upgrade -> DEBU 00c Get Signed envelope
2018-02-22 18:26:46.693 UTC [chaincodeCmd] chaincodeUpgrade -> DEBU 00d Send signed envelope to orderer
2018-02-22 18:26:46.908 UTC [main] main -> INFO 00e Exiting.....


```

### Upgrade Example2
```shell
$ CORE_PEER_TLS_KEY_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/nuriorg.exchange.com/peers/peer0.nuriorg.exchange.com/tls/server.key
$ CORE_PEER_LOCALMSPID=NuriOrgMSP
$ CORE_PEER_TLS_ENABLED=true
$ CORE_PEER_TLS_CERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/nuriorg.exchange.com/peers/peer0.nuriorg.exchange.com/tls/server.crt
$ CORE_PEER_ID=cli
$ CORE_VM_DOCKER_HOSTCOFIG_NETWORKMODE=exchange-net
$ CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/nuriorg.exchange.com/users/Admin@nuriorg.exchange.com/msp
$ CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/nuriorg.exchange.com/peers/peer0.nuriorg.exchange.com/tls/ca.crt
$ CORE_PEER_ADDRESS=peer0.nuriorg.exchange.com:7051
$ CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock

$ peer chaincode upgrade -o orderer0.exchange.com:7050 \
 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/exchange.com/orderers/orderer0.exchange.com/msp/tlscacerts/tlsca.exchange.com-cert.pem \
 -C exchange-channel -n exchange -l golang -v $CC_VER -c '{"Args":["initLedger"]}' -P 'OR ('\''NuriOrgMSP.peer'\'','\''NFlexOrgMSP.peer'\'')'
 
```

