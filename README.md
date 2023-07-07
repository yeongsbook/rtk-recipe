# RTK Recipe

사이트 : https://rtk-recipe.vercel.app/

Redux Toolkit을 연습해봅시다! 기본 Redux를 Redux Toolkit으로 수정해주세요.

기본 레시피는 [만개의레시피](https://www.10000recipe.com/)에서 가져왔습니다. 출처를 명시해주세요.

## 페이지 구조

- / : 메인 페이지. 레시피 목록 노출
- /recipe/:id : 레시피 설명 페이지. 작성자가 접근시 수정/삭제 버튼 노출됨
- /login : 로그인 페이지. 지정된 유저로 로그인 가능하며, 로그인 상태로 접근 시 로그아웃 가능
- /mypage : 내 정보 페이지. 로그인 후 접근 가능. 내 이름과 작성한 레시피 목록이 노출됨
- /write : 레시피 등록/수정 페이지. 로그인 후 접근 가능. 레시피 설명 페이지의 '수정' 버튼으로 접근 시 수정 가능

## 사용한 CSS 관련 정보

아래 내용들 구글링해보고 이 프로젝트에서 어떤 목적으로 쓰였는지 파악해보세요!

- padding hack
- CSS Module
- Media Query
- ::before, ::after
