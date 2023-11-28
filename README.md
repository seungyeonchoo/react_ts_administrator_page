## 프로젝트 실행방법

```
git clone https://github.com/seungyeonchoo/react_ts_administrator_page.git
cd react_ts_administrator_page

- json server 시작
cd server
npm run gen - mock db 생성
npm run start - run server

- 프로젝트 시작
npm run start

- 관리자 회원가입
로그인 페이지 내 회원가입 버튼 클릭시 관리자 로그인 정보로 자동 회원가입

<!-- * 관리자 로그인 정보 *  -->
{
  email: admin@gmail.com,
  password: admin1234!@#$
}

```

<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [기능별 설명](#기능별-설명)

<br>

> ## 프로젝트 개요

- 원티드 프리온보딩 코스 : december and company에서 제공한 json server을 활용한 admin 서비스 구현
- 권한 있는 사용자만 이용할 수 있는 서비스로 계좌 목록 데이터와 사용자 데이터를 활용해 계좌목록, 사용자 목록, 계좌 상세, 사용자 상세 정보를 확인할 수 있는 서비스 구현
- 웹페이지 전용 서비스

<br>

> ## 기술 Stack

- React
- Typescript
- tailwindcss
- react-query
- redux-toolkit

<br>

> ## 폴더 구조

```
src
├── App.tsx
├── AppRouter.tsx
├── Router.tsx
├── assets
├── component
│   ├── Common
│   ├── ErrorPage
│   ├── Footer
│   ├── Header
│   ├── LoadingPage
│   └── Side
├── fixture
├── hooks
│   ├── __test__
│   │   ├── useFetch.test.tsx
│   │   ├── useInput.test.tsx
│   │   ├── useMutate.test.tsx
│   │   └── useToggle.test.tsx
│   ├── useFetch.tsx
│   ├── useInput.tsx
│   ├── useMutate.tsx
│   └── useToggle.tsx
├── index.css
├── index.tsx
├── pages
│   ├── AccountDetail
│   ├── AccountList
│   ├── Auth
│   ├── UserDetail
│   └── UserList
├── react-app-env.d.ts
├── reportWebVitals.ts
├── service
├── setupTests.ts
├── store
├── tailwind.css
├── types
└── utils



```

> ## 기능별 설명

  <details>
    <summary>1. 로그인</summary>
    <p align="center">
    <img src="https://github.com/seungyeonchoo/react_ts_administrator_page/assets/100207630/104bbe65-67cc-4a91-aa58-47b875c763aa"/>
    </p>
    
    1. 등록되어 있는 email과 password로 로그인 하도록 구현
    2. 관리자 계정 회원가입을 위한 회원가입 버튼 구현
    3. 로그인 실패 - 화면에 에러코드와 에러메세지 출력
    4. 로그인 성공 - 반환되는 accessToken을 sessionStorage에 저장하여 로그인 유지 및 사용자 목록으로 이동

  </details>

  <details>
    <summary>2. 사용자 목록 </summary>
    <p align="center">
    <img src="https://github.com/seungyeonchoo/makemyhabits/assets/100207630/34da3188-c53a-4371-8114-66cbfa4140ae"/>
    </p>

    1. 사용자 목록
      - /users 경로로 사용자 Data를 fetch하여 테이블로 보여줄 수 있도록 구현
      - Pagination 적용해 20개씩 데이터를 보여줄 수 있도록 구현
      - 사용자 이름 클릭하는 경우 해당 사용자 상세 정보 페이지로 이동
      - Delete 버튼 클릭 시 회원 정보 삭제 구현
    2. Toolbar
      - 드롭다운 조건 선택 시 redux의 userParams 업데이트를 통해 filtering 구현
      - 검색어 키워드 입력 시 redux의 userParams 업데이트를 통해 텍스트가 포함된 사용자 목록만 보여줄 수 있도록 구현
    3. 신규 사용자 추가
      - New User 버튼 클릭 시 새로운 사용자 정보 입력을 위한 Modal을 보여주도록 구현
      - create 버튼 클릭 시 /users 경로로 신규 사용자 정보 post

  </details>
    <details>
    <summary>3. 사용자 상세 페이지 </summary>
    <p align="center">
    <img src="https://github.com/seungyeonchoo/react_ts_administrator_page/assets/100207630/3e0f0bb1-043a-4dab-a927-b303e75ea3d5"/>
    </p>

    1. 사용자 기본정보
      - /users/[id] 결로에서 회원 상세 정보 fetch
      - table 태그로 사용자 상세 정보를 보여줄 수 있도록 구현
      - 사용자 이름 수정 버튼 -> patch 메서드를 통해 사용자 이름 수정 구현

    2. 사용자 계좌정보
      - 회원 상세 데이터를 fetch 하며 parameter로 사용자 계좌 리스트를 같이 fetch
      - 수익률 및 손실, 이익여부에 따른 평가 금액 색깔 변화 구현
      - 계좌번호 클릭 시 계좌 상세 페이지로 이동

  </details>

  <details>
    <summary>4. 계좌 목록 </summary>
    <p align="center">
    <img src="https://github.com/seungyeonchoo/makemyhabits/assets/100207630/191bf2e3-7fe4-4948-8f64-76d35e0842b1"/>
    </p>

    1. 계좌 목록
      - /accounts 경로로 사용자 Data를 fetch 하여 테이블로 보여줄 수 있도록 구현
      - Pagination 적용해 20개씩 데이터를 보여줄 수 있도록 구현
      - 사용자 이름 클릭하는 경우 해당 사용자 상세 페이지로 이동
      - 계좌 번호 클릭하는 경우 해당 계좌 상세 정보 페이지로 이동
      - Delete 버튼 클릭 시 회원 정보 삭제 구현
      - 손실, 이익여부에 따른 평가 금액 및 수익률 색상 변화 구현
    2. Toolbar
      - 드롭다운 조건 선택 시 redux의 accountParams 업데이트를 통해 filtering 구현
      - 검색어 키워드 입력 시 redux의 accountParams 업데이트를 통해 해당 번호가 포함된 계좌 목록만 보여줄 수 있도록 구현

  </details>

  <details>
    <summary>5. 계좌 상세 </summary>
    <p align="center">
    <img src=" https://github.com/seungyeonchoo/react_ts_administrator_page/assets/100207630/e5b66087-5dfd-4aac-9bc1-48ff7f4b6c19"/>
    </p>

    1. 계좌 id로 계좌 상세정보 fetch 하여 보여줄 수 있도록 구현
    2. 계좌 이름 변경 버튼으로 계좌 이름 변경 기능 구현
    3. 손실, 이익여부에 따른 평가 금액 및 수익률 색상 변화 구현

  </details>

<br>
