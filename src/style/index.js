import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    ol,
    dl,
    dd,
    p,
    fieldset,
    legend,
    button {
        margin: 0;
        padding: 0;
    }

    body,
    input,
    textarea,
    select,
    button {
        font-family: '돋움', Dotum, sans-serif;
    }

    ul,
    ol {
        list-style: none;
    }

    table {
        border-collapse: collapse;
    }

    em {
        font-style: normal;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    img {
        vertical-align: top;
    }

    fieldset {
        border: 0;
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: 0;
    }
`;

export const wrapContainer = css`
    box-sizing: border-box;
    width: 400px;
    height: 500px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    padding: 20px;
    float: left;
`;
