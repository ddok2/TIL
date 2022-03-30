(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{457:function(a,t,r){"use strict";r.r(t);var s=r(36),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"hyperledger-fabric-2-x-새로운-기능"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyperledger-fabric-2-x-새로운-기능"}},[a._v("#")]),a._v(" Hyperledger Fabric 2.x 새로운 기능")]),a._v(" "),r("h3",{attrs:{id:"체인코드를-배포시-여러-조직이-체인-코드-배포에-동의해아함"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#체인코드를-배포시-여러-조직이-체인-코드-배포에-동의해아함"}},[a._v("#")]),a._v(" 체인코드를 배포시 여러 조직이 체인 코드 배포에 동의해아함.")]),a._v(" "),r("p",[a._v("Fabric의 릴리스 1.x 버전에서 한 조직이 체인 코드 설치를 거부하거나\n체인코드를 호출하는 트랜잭션을 수행에 참여하지 않는 다른 모든 채널 구성원에 대해\n체인코드 매개변수(ex: 보증정책)를 설정할 수 있었다."),r("br"),a._v("\n새로운 체인코드 라이프 사이클은 체인 코드가 활성화되기 전에\n여러 조직들이 승인 정책 및 기타 세부 사항에 동의해야하는 분산형 모델뿐만 아니라\n이전 라이프 사이클 모델을 모두 지원하므로 더 유연하다.")]),a._v(" "),r("h3",{attrs:{id:"보다-신중한-체인코드-업그레이드-프로세스"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보다-신중한-체인코드-업그레이드-프로세스"}},[a._v("#")]),a._v(" 보다 신중한 체인코드 업그레이드 프로세스")]),a._v(" "),r("p",[a._v("이전 체인코드 라이프 사이클에서 체인코드 업그레이드를 단일 조직할 수 있었다. 그러나\n새 모델에서는 충분한 수의 조직이 업그레이드를 승인한 후에 만 체인 코드를 업그레이드 할 수 있다.")]),a._v(" "),r("h3",{attrs:{id:"더-간단한-보증-정책-및-개인-데이터-수집-기능-업데이트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#더-간단한-보증-정책-및-개인-데이터-수집-기능-업데이트"}},[a._v("#")]),a._v(" 더 간단한 보증 정책 및 개인 데이터 수집 기능 업데이트")]),a._v(" "),r("h3",{attrs:{id:"검사-가능한-체인코드-패키지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#검사-가능한-체인코드-패키지"}},[a._v("#")]),a._v(" 검사 가능한 체인코드 패키지")]),a._v(" "),r("p",[a._v("Fabric 라이프 사이클은 쉽게 읽을 수있는 tar 파일로 체인 코드를 패키지한다. 이를 통해 체인 코드 패키지를보다 쉽게 검사하고 여러 조직에서 설치를 조정할 수 있다.")]),a._v(" "),r("h3",{attrs:{id:"하나의-패키지를-사용하여-채널에서-여러-체인코드-수행"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#하나의-패키지를-사용하여-채널에서-여러-체인코드-수행"}},[a._v("#")]),a._v(" 하나의 패키지를 사용하여 채널에서 여러 체인코드 수행")]),a._v(" "),r("p",[a._v("이전 라이프 사이클은 체인 코드 패키지가 설치 될 때\n지정된 이름과 버전을 사용하여 채널의 각 체인코드를 정의했음.\n이제 단일 체인 코드 패키지를 사용하고 동일한 채널 또는 다른 채널에 다른 이름으로 여러 번 배포할 수 있음.")]),a._v(" "),r("h3",{attrs:{id:"체인코드-패키지는-채널-구성원간에-동일-할-필요가-없습니다"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#체인코드-패키지는-채널-구성원간에-동일-할-필요가-없습니다"}},[a._v("#")]),a._v(" 체인코드 패키지는 채널 구성원간에 동일 할 필요가 없습니다")]),a._v(" "),r("h3",{attrs:{id:"새로운-체인코드-라이프-사이클-사용"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#새로운-체인코드-라이프-사이클-사용"}},[a._v("#")]),a._v(" 새로운 체인코드 라이프 사이클 사용")]),a._v(" "),r("h3",{attrs:{id:"협업-및-합의를-위한-새로운-체인코드-애플리케이션-패턴"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#협업-및-합의를-위한-새로운-체인코드-애플리케이션-패턴"}},[a._v("#")]),a._v(" 협업 및 합의를 위한 새로운 체인코드 애플리케이션 패턴")]),a._v(" "),r("h3",{attrs:{id:"private-data의-개선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#private-data의-개선"}},[a._v("#")]),a._v(" Private data의 개선")]),a._v(" "),r("p",[a._v("Fabric v2.x은 모든 조합의 채널 구성원이 원하는 거래를 하기 위해, private data 콜렉션을 작성하지 않고도, private data 작업 및 공유를 위해 새로운 패턴의 가능이 추가되었다.\nFabric v2.x의 몇 가지 향상된 기능으로 다음과 같은 새로운 개인 데이터 패턴이 가능하다.")]),a._v(" "),r("ul",[r("li",[a._v("개인 데이터 공유 및 확인")]),a._v(" "),r("li",[a._v("컬렉션 수준 보증 정책")]),a._v(" "),r("li",[a._v("조직별 암시적 컬렉션")])]),a._v(" "),r("h3",{attrs:{id:"couchdb에서-성능-향상을위한-상태-데이터베이스-캐시"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#couchdb에서-성능-향상을위한-상태-데이터베이스-캐시"}},[a._v("#")]),a._v(" CouchDB에서 성능 향상을위한 상태 데이터베이스 캐시")]),a._v(" "),r("h3",{attrs:{id:"alpine-기반-도커-이미지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alpine-기반-도커-이미지"}},[a._v("#")]),a._v(" Alpine 기반 도커 이미지")])])}),[],!1,null,null,null);t.default=e.exports}}]);