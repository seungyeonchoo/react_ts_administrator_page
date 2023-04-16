# Financial accounts adiministrator page

## Demo

img

## Quick Start

```
- clone project repo
git clone https://github.com/seungyeonchoo/react_ts_administrator_page.git
cd react_ts_administrator_page

- start project
npm install
npm start

- start server
cd server
npm run gen
npm start

* In order to sign in this web page, it is needed to create administrator account with Postman
url : localhost:4000/signup
method : POST
body : email / password

```

> ## Contents

- [Technical stack](#Technical-stack)
- [Directories](#Directories)
- [Functionality](#Functionality)
- [Prettier, Eslint](#Prettier,-Eslint)

<br>

> ## Technical stack

 <br/>

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://camo.githubusercontent.com/5d16e7fdd964ebca50ca82d6c8b081045630340427c463f4470050acd4e50ef3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d5461696c77696e642b43535326636f6c6f723d323232323232266c6f676f3d5461696c77696e642b435353266c6f676f436f6c6f723d303642364434266c6162656c3d">
<br>
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white%22%3E">
<img src="https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white%22%3E">
<img src='https://camo.githubusercontent.com/2c53895491eecd8aed53655963595ae41628198bd1d5939fa100b11ee9e2513f/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d52656163742b517565727926636f6c6f723d464634313534266c6f676f3d52656163742b5175657279266c6f676f436f6c6f723d464646464646266c6162656c3d'>
<br>
<br>

> ## Directories

```
src
|-App.tsx
|-AppRouter.tsx
|-Router.tsx
|-assets
| |-bars-solid.svg
| |-circle-check-regular.svg
| |-circle-exclamation-solid.svg
| |-circle-minus-solid.svg
| |-circle-xmark-solid.svg
| |-filter-solid.svg
| |-left-long-solid.svg
| |-magnifying-glass-solid.svg
| |-pencil-solid.svg
| |-spinner-solid.svg
| |-user-solid.svg
|-component
| |-Common
| | |-Input.tsx
| | |-LabelWithInput.tsx
| |-ErrorPage
| | |-ErrorPage.tsx
| | |-NoResult.tsx
| |-Footer
| | |-Footer.tsx
| |-Header
| | |-Header.tsx
| |-LoadingPage
| | |-LoadingPage.tsx
| |-Side
| | |-Side.tsx
|-fixture
| |-AccountStatus.ts
| |-BrokerList.ts
| |-InitailUserInput.ts
| |-MockAccountList.tsx
| |-MockUserList.tsx
| |-mockAccountData.ts
|-hooks
| |-__test__
| | |-useFetch.test.tsx
| | |-useInput.test.tsx
| | |-useMutate.test.tsx
| | |-useToggle.test.tsx
| |-useFetch.tsx
| |-useInput.tsx
| |-useMutate.tsx
| |-useToggle.tsx
|-index.css
|-index.tsx
|-pages
| |-AccountDetail
| | |-AccountDetail.tsx
| | |-components
| | | |-AccountInfo
| | | | |-AccountName.tsx
| | | | |-AccountUserName.tsx
| | | |-AccountInfo.tsx
| | | |-AccountProfit.tsx
| |-AccountList
| | |-AccountList.test.tsx
| | |-AccountList.tsx
| | |-components
| | | |-AccountFilter
| | | | |-AccountActiveFilter.tsx
| | | | |-AccountBrokerFilter.tsx
| | | | |-AccountFilter.tsx
| | | | |-AccountSearchInput.tsx
| | | | |-AccountStatusFilter.tsx
| | | |-AccountListTable
| | | | |-AccountListPage.tsx
| | | | |-AccountTableHead.tsx
| | | | |-AccountTableItem.tsx
| | | |-AccountListTable.tsx
| | | |-AccountToolbar.tsx
| | | |-__test__
| | | | |-AccountFilter.test.tsx
| | | | |-AccountListPage.test.tsx
| | | | |-AccountTable.test.tsx
| |-Auth
| | |-Auth.test.tsx
| | |-Auth.tsx
| | |-components
| | | |-AuthButton.tsx
| | | |-AuthErrorAlert.tsx
| | | |-AuthInput.tsx
| |-UserDetail
| | |-UserDetail.test.tsx
| | |-UserDetail.tsx
| | |-components
| | | |-UserAccountList
| | | | |-UserAccountItem.tsx
| | | | |-UserAccountListBody.tsx
| | | | |-UserAccountListHead.tsx
| | | |-UserAccountList.tsx
| | | |-UserInfoTable
| | | | |-UserBasicInfo.tsx
| | | | |-UserInfoName.tsx
| | | | |-UserSettingInfo.tsx
| | | |-UserInfoTable.tsx
| | | |-__test__
| | | | |-UserAccountList.test.tsx
| | | | |-UserInfoTable.test.tsx
| |-UserList
| | |-UserList.test.tsx
| | |-UserList.tsx
| | |-components
| | | |-UserModal
| | | | |-UserModalButton.tsx
| | | | |-UserModalInput.tsx
| | | | |-UserSettingInput.tsx
| | | |-UserModal.tsx
| | | |-UserTable
| | | | |-UseListPage.tsx
| | | | |-UserTableHead.tsx
| | | | |-UserTableItem.tsx
| | | |-UserTable.tsx
| | | |-UserToolBar
| | | | |-UserCreateButton.tsx
| | | | |-UserFilter.tsx
| | | | |-UserFilterActive.tsx
| | | | |-UserFilterStaff.tsx
| | | | |-UserSearchInput.tsx
| | | |-UserToolBar.tsx
| | | |-__test__
| | | | |-UserFilter.test.tsx
| | | | |-UserListPage.test.tsx
| | | | |-UserModal.test.tsx
| | | | |-UserTable.test.tsx
|-react-app-env.d.ts
|-reportWebVitals.ts
|-service
| |-__mock__
| | |-index.tsx
| |-api.ts
| |-http.ts
|-setupTests.ts
|-store
| |-index.ts
| |-slices
| | |-currUserSlice.ts
| | |-paramSlice.ts
|-tailwind.css
|-types
| |-user_types.ts
|-utils
| |-__test__
| | |-addComma.test.ts
| | |-convertDate.test.ts
| | |-convertGender.test.ts
| | |-convertPhoneNumber.test.ts
| |-addComma.ts
| |-calcEarningRate.ts
| |-convertAccountNumber.ts
| |-convertDate.ts
| |-convertGender.ts
| |-convertPhoneNumber.ts

```

> ## Functionality

- Account List

1. Displays account list table
2. Filters list by broker_id, active, status
3. Searches by account number
4. Navigate to Account Detail or User Detail by clicking account number or user name
5. Show next (previous) page when button is clicked

- Account Detail

1. Displays account detail table
2. Updates account name
3. Navigate to User Detail by clicking user name

- User List

1. Displays user list table
2. Filters list by active, staff
3. Searches by keyword
4. Navigate to User Detail by clicking user name
5. Delete item by clicking delete button
6. Show next (previous) page when button is clicked
7. Create new user

- User Detail

1. Displays user detail and user account list
2. Navigate to User Detail (Account Detail) by clicking user name (account number)
3. Update user name

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

```

```
