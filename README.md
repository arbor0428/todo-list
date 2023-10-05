# 해야 할 일 리스트 앱 프로젝트 👩‍💻

## 투두앱에서 구현된 기능들 

- <b>전체 아이템 표시:</b> useState hook를 활용해서 현재의 모든 할 일 항목을 배열로 처리해서 보여줍니다.
- <b>아이템 추가/삭제:</b> useState hook를 활용해서 새로운 할 일 항목을 기존 배열에 추가하거나 기존 항목을 삭제할 수 있습니다.
- <b>아이템 체크박스:</b> 아이템의 staus 상태 값을 변경해서 완료된 항목을 표시합니다.
- <b>아이템 필터링:</b> useState hook를 활용해서 특정 기준에 따라 할 일 항목을 필터링하여 보여줄 수 있습니다. (예: 마감 기한, 중요도 등)
- <b>다크 모드 지원:</b> useState, useEffect hook과 tailwindcss, createContext()를 활용해서 다크 모드를 구현합니다.
- <b>로컬 스토리지 저장:</b> useState, useEffect를 활용해서 사용자의 할 일 목록을 로컬 스토리지에 저장하여 나중에 앱을 다시 열 때 이전 상태를 유지할 수 있습니다.

## 완성작 보기 

미리보기 : https://sage-belekoy-3f0d37.netlify.app/

### 사용스택

- react.js(https://react.dev/) 를 사용하여 사이트를 번들링하고 관리합니다.
- react-icons(https://react-icons.github.io/react-icons/) 를 이용하여 아이콘들을 활용했습니다.
- UUID(https://www.npmjs.com/package/react-uuid)를 사용해서 data의 고유한 아이디를 자동으로 생성합니다.
- tailwindcss(https://tailwindcss.com/docs/installation)를 사용해서 다크 모드를 구현합니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행
- react를 설치합니다. `npm install -g create-react-app`
- react-icons를 설치합니다. `npm install react-icon ==save`
- UUID를 설치합니다 `npm install uuid`
- tailwindcss를 설치합니다. `npm install -D tailwindcss`
