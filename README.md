# story-book-example

1. volta node 버전 설치
2. 노드 모듈 설치
3. rollup 번들러 설치
4. 번들 진입점 생성
5. esbuild 설치
6. rollup-esbuild 설치
7. peerDependencies 는 설정<br/>
   예시) example 4.4.1 패키지와 py 3.1.1 패키지를 설치하였음. 그런데 example 4.4.1 내부에 py 2.1.1 패키지가 설치되어 있었음. py 패키지끼리 서로 충돌하는 이슈가 발생. <br/>
   그래서 이러한 경우를 사전에 미리 방지할 수 있도록 필수 버전을 넣어서 특정 버전이 아니면 설치되지 못하도록 하는 기능을 가짐.
8. rollup-peer-deps 설치
9. esm, cjs output 설정 변경

## install

```
yarn create vite cdd-with-storybook --template react
npx storybook@latest init
yarn add styled-component
yarn add rollup --dev
```
