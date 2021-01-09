import { createGlobalStyle, ThemeProvider } from "styled-components";
import PropsTheme from "./theme/PropsTheme";

const GlobalStyle = createGlobalStyle`

    body {
        transition: 250ms all;
        color: ${(props: PropsTheme) => props.theme.color};
        background: ${(props: PropsTheme) => props.theme.background};
        padding: 0;
        margin: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
        box-sizing: border-box;
        margin: 0;
    }

    a {
        color: ${(props: PropsTheme) => props.theme.color};
        text-decoration: none;
    }

    p {
        font-size: 20px;
        line-height: 29px;
    }

    h1 {
        font-size: 70px;
    }


`

export default GlobalStyle;