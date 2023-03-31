# Wanted Pre-Onboarding 6차 10팀 TenKeyLess, december_and_company 기업과제

## How to start project

```
git clone https://github.com/wanted-pre-onboarding-fe-6-10/pre-onboarding-assignment-week-4-1-team-10-TenKeyLess.git
cd pre-onboarding-assignment-week-4-1-team-10-TenKeyLess

- json server 시작(json server의 _expand 속성을 활용하기 위해 server 파일 일부 수정으로 해당 폴더에서 json server 구동 필요)
json-server --watch ./data/db.json --port 4000 -m ./node_modules/json-server-auth

- react 프로젝트 시작
npm install
npm start

yarn install
yarn start

```

> ## 목차

- [About this project](#About-this-project)
- [폴더 구조](#폴더-구조)
- [기능별 설명](#기능별-설명)
- [미구현 내용](#미구현-내용)
- [회고](#회고)

<br>

> ## About this project

- Implement financial account administrator page
- 권한 있는 사용자만 이용할 수 있는 서비스로 계좌 목록 데이터와 사용자 데이터를 활용해 계좌목록, 사용자 목록, 계좌 상세, 사용자 상세 정보를 확인할 수 있는 서비스 구현

> ## 사용기술

 <br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<!-- <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> -->
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white%22%3E">
<br>
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white%22%3E">
<img src="https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white%22%3E">
<br>
<br>

> ### 해당 기술 선택이유<br>

- React

  - 생태계가 넓고, 다양한 라이브러리 사용 가능
  - virtual DOM을 활용하여 빠른 렌더링 가능
  - 단방향 데이터 바인딩을 통한 디버깅 용이

- tailwindcss

  - css를 컴포넌트화 하여 사용할 수 있다.

- React-query

  - 캐싱, 서버 state 관리

- Redux

  - 복잡한 State관리를 단방향 데이터 흐름체계로 만들 수 있다.

- Redux Toolkit

  - 순수 redux의 boilerplate 코드를 줄여주고, 상태관리 코드 부분의 가독성을 높여준다.

- React-Testing-Library

  -

<br/>

- <br>

> ## 폴더 구조

```

```

> ## 기능별 설명

- json server의 경우 \_expand 속성을 활용하기 위해 generateData.ts 파일에서 user_id 부분을 userId로 수정
- CORS 에러를 해결하기 위해 cors 라이브러리를 install한 다음 server.ts에 적용

> ### 주요 기능

  <details>
    <summary>1. Auth Page </summary>

    1. POSTMAN으로 회원가입을 진행한 후 등록되어 있는 email과 password로 로그인 하도록 구현
    2. 로그인 후 반환되는 accessToken을 Recoil로 저장하고 recoil-persist로 로컬 스토리지에 저장해서 새로고침해도 로그인이 유지되도록 구현

  </details>

  <details>
    <summary>2. Account List Page </summary>

    1. table 태그로 계좌 목록을 받아온 다음 보여줄 수 있도록 구현
    2. data는 json server의 expand 속성을 활용해서 요청 받아온 account list data 안에 user data를 자식 형태로 받아와 account.user로 활용할 수 있도록 api 요청 처리
    3. 받아온 계좌 데이터들 중 broker_id, status, is_active와 같은 요소들은 해당 데이터의 실제 이름에 맞게 처리하여 표시하도록 구현
    4. Search API를 통해 해당 text를 포함하는 데이터들을 모두 보여줄 수 있도록 구현
    5. Pagination API를 적용해 10개씩 데이터를 보여줄 수 있도록 구현
    6. Filtering 기능을 sidebar 형태로 각 항목을 선택하여 선택한 항목에 맞는 데이터들을 보여줄 수 있도록 구현, 초기화 버튼을 통해 가장 처음 보여주었던 10개 데이터를 다시 보여줄 수 있도록 구현
    7. 마스킹처리와 손실, 이익여부에 따른 평가 금액 색깔 변화 구현
    8. 고객명이나 계좌번호를 누를 시 해당 상세 페이지로 이동하도록 구현

  </details>
    <details>
    <summary>3. Account Detail Page </summary>

    1. 계좌 상세 페이지에서는 해당 유저의 정보와 계좌 상세 내용을 받아와서 표시하도록 구현
    2. data의 경우 해당 계좌 상세 정보에 user를 expand해서 해당 계좌의 유저 데이터도 같이 받아와서 데이터를 표시

  </details>
    <details>
    <summary>4. User List Page </summary>

    1. table 태그로 사용자 목록을 보여주도록 구현
    2. data는 user list 정보와 userSetting 정보를 동시에 받아와서 혜택 수신 동의 여부와 같은 데이터들을 추가적으로 함께 처리할 수 있도록 구현
    3. 검색과 filtering과 pagination도 account와 동일하게 구현

  </details>

  <details>
    <summary>5. User Detail Page </summary>

    1. 사용자 상세의 경우 필요한 user data와 해당 유저가 소유한 계좌 data를 함께 받아온 후 사용자 정보는 위에 표시하고 목록은 아래에 표시할 수 있도록 구현
    2. 사용자 이름을 변경하거나 사용자를 삭제할 수 있는 기능 구현

  </details>

<br/>

### 추가 기능

<details>
    <summary>1.  </summary>

    1.

  </details>

<br>

> ## Git

- ### [Git branch 전략](https://github.com/wanted-pre-onboarding-fe-6-10/I.M.LAB/wiki/Git-branch-%EC%A0%84%EB%9E%B5)

- ### [커밋 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/I.M.LAB/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

<br>

> ## Prettier, Eslint

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "parser": "@typescript-eslint/parser",
  "extends": ["react-app", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn",
    "no-multiple-empty-lines": "warn",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "eqeqeq": "warn",
    "dot-notation": "warn",
    "no-unused-vars": "warn",
    "react/destructuring-assignment": "warn",
    "react/jsx-pascal-case": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-key": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-curly-brace-presence": "warn"
  }
}

```
