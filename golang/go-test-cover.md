# Go 테스트 커버리지

테스트에 대한 품질은 `go test -cover`로 측정 가능하다.

### Go test coverage
```shell
$ go test -cover
PASS
coverage: 100.0% of statements
ok  	  github.com/ddok2/tdd/handler	 0.004s
```

### Test Coverage 레포트
```shell
$ go test -coverprofile=coverage.out
$ go tool cover -html=coverage.out
```

### `gocov`
`gocov` 툴이용해서 레포트 만들기
```shell
$ go get github.com/axw/gocov/gocov
$ go get github.com/matm/gocov-html
```
`gocov test` 이용해서 커버리지 데이터 파일 만들기
```shell
$ gocov test ./ > handler.json
ok  github.com/ddok2/tdd/handler 0.004s  coverage: 100.0% of statements 
```
`handler.json`을 html로 변환
```shell
$ gocov-html handler.json > handler.html
```
