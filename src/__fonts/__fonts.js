import { createGlobalStyle } from "styled-components";

import AmaticSC from "./AmaticSC-Regular.ttf";
import AmaticSCBold from "./AmaticSC-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'AmaticSC';
        src: local('AmaticSC'), local('AmaticSCBold'),
        url(${AmaticSC}) format('ttf'),
        url(${AmaticSCBold}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
