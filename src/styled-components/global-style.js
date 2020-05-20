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
        background: url(${background}) no-repeat top / cover fixed;
        font-family: ${({theme}) => theme.mainFont};
        overflow-x: hidden;
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

    ::-webkit-scrollbar
    {
        width: 15px;
    }

    ::-webkit-scrollbar-thumb
    {
        width: 100%;
        background: ${({theme}) => theme.contrastColor};
        border-radius: 10px
    }

    ::-webkit-scrollbar-track
    {
        width: 100%;
        background: white;
        border-radius: 10px
    }

`