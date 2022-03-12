# LMDB

### What is LMDB
LMDB 는 Sysmas Lightning Memory-mapped DataBase 준말이며 Synas OpenLDAP Project를 위해 개발 한 매우 빠른 메모리급 효율의 데이터베이스이다.

### 기능
- 정렬된 맵 인터페이스
  → 범위 검색 지원

- MVCC를 사용한 트랜잭션 기능, ACID 개념 가능

- 읽기/쓰기 트랜잭션
  → 읽기는 쓰기를 블록하지 않고, 쓰기는 읽기를 블록하지 않는다

- Fully serialized 쓰기 기능
  → 쓰기는 교착상태 발생하지 않음

- Extremely cheap read(매우 저렴한) 읽기 트랜잭션
  → 블락이 되는 호출이나 메모리 할당 없이 실행 가능

- 다중 스레드, 다중 프로세스 동시 지원

- 메모리매핑으로, 검색이나 반복 작업에 Zero-Copy 가능

- 유지보수 필요 없음

- 충돌 방지
  → No 로그, No 충돌 복구 프로시져

- 응용 프로그램 수준 캐싱 불필요
  → LMDB는 운영 체제의 버퍼 캐시를 완전히 활용함

- 32K 크기의 Object 파일, C코드로 6천라인(KLOC)


### Reference
#### What is
- https://www.symas.com/lmdb
- https://lmdb.readthedocs.io/en/release/#
- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=tosemfaos&logNo=220919092977

#### Download
- https://git.openldap.org/openldap/openldap/-/tree/mdb.master/libraries/liblmdb
- https://github.com/LMDB/lmdb/tree/mdb.master/libraries/liblmdb

#### Benchmarks
- https://www.symas.com/symas-lmdb-tech-info#Benchmarks
- https://github.com/lmdbjava/benchmarks/blob/master/results/20160710/README.md
- https://github.com/LMDB/dbbench
- https://github.com/ktmud/multilevel-bench#results
- https://www.gushiciku.cn/pl/2cBB
