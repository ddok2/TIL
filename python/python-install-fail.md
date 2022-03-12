# macOS 12.x ↑에서 `pyenv`로 Python 3.7.x 설치 시 Build Failed 해결 방법

### pyenv로 파이썬 설치 시 `BUILD FAILED (OS X 12.2 using python-build ...)` 해결 방법

```shell
# Install python 3.7.5
export CFLAGS="-I$(brew --prefix openssl)/include -I$(brew --prefix readline)/include -I$(xcrun --show-sdk-path)/usr/include"
export LDFLAGS="-L$(brew --prefix openssl)/lib -L$(brew --prefix readline)/lib -L$(xcrun --show-sdk-path)/usr/lib -L/usr/local/opt/zlib/lib"

pyenv install --patch 3.7.5 < <(curl -sSL https://github.com/python/cpython/commit/8ea6353.patch)

```

### 참조:
- https://github.com/pyenv/pyenv/issues/1746#issuecomment-736750003
- https://github.com/pyenv/pyenv/issues/1746#issuecomment-736754241
- https://github.com/pyenv/pyenv/issues/1643#issuecomment-684933052
