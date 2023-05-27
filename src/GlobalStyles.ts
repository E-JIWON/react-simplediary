import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";
 //리셋 패키지 설치하기
const GlobalStyles = createGlobalStyle`
    /* ${reset}; */
    
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: NanumGothic;
        font-size: 12px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
        padding-top: 50px;
    }
 
    #root {
        overflow: hidden;
    }
`;
 
export default GlobalStyles;
 