import background from '../pictures/background.jpg'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html
    {
        font-size: 2vw;
    }

    body
    {
        width: 100vw;
        height: 100vh;
        background: url(${background}) no-repeat top / cover;
        font-family: ${({theme}) => theme.mainFont};
    }

    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul
    {
        list-style-type: none;
    }

    a
    {
        text-decoration: none;
        color: black;
    }

    button, input
    {
        outline: none;
        border: none;
        background: white;
    }

`