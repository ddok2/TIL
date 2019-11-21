# node-gyp 에러: gyp: No Xcode or CLT version detected

- OS: Mac OS Catalina 10.15.1
- Node Version: v8.16.2
- NPM Version: 6.13.1

### 오류 메시지:
```bash
$ npm i
> pkcs11js@1.0.19 install /Users/sung/Development/02.study/fabric-samples/fabcar/javascript/node_modules/pkcs11js
> node-gyp rebuild

No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/Users/sung/.nvm/versions/node/v8.16.2/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at emitTwo (events.js:126:13)
gyp ERR! stack     at ChildProcess.emit (events.js:214:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)
gyp ERR! System Darwin 19.0.0
gyp ERR! command "/Users/sung/.nvm/versions/node/v8.16.2/bin/node" "/Users/sung/.nvm/versions/node/v8.16.2/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/sung/Development/02.study/fabric-samples/fabcar/javascript/node_modules/pkcs11js
gyp ERR! node -v v8.16.2
gyp ERR! node-gyp -v v5.0.5
gyp ERR! not ok
npm WARN fabcar@1.0.0 No repository field.

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! pkcs11js@1.0.19 install: `node-gyp rebuild`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the pkcs11js@1.0.19 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/sung/.npm/_logs/2019-11-21T01_51_46_073Z-debug.log
```

### 해결
Xcode Full Install 하면 해결된다고 하지만 Full Install 하고 싶지 않았다.

[Xcode tools를 재 설치하면 된다는 글](https://github.com/schnerd/d3-scale-cluster/issues/7)을 확인해서 시도해봤다.

```bash
$ sudo rm -rf $(xcode-select -print-path)
$ xcode-select --install
```

위 명령어를 실행후 다시 `npm install`하니 잘된다. 끗.
