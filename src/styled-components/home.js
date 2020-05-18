import styled from 'styled-components'

export const HomeWrapper = styled.div`
    position: absolute;
    top: 30vh;
    left: 5vw;
`

export const Header = styled.h1`

    color: white;
    font-size: 1.4rem;
    background: rgba(0,0,0, .1);
    border-radius: 10px;
`

export const Bigger = styled.span`
    font-size: 2.7rem;
`

export const Contrast = styled.span`
    color: ${({theme}) => theme.contrastColor};
    background: rgba(0,0,0, .5);
    padding: 0 2vw;
    border-radius: 10px;
`

export const Image = styled.img`
    width: 2.5rem;
    margin-top: 2vh;
`