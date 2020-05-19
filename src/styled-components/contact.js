import styled from 'styled-components'

export const ContactWrapper = styled.div`
    width: 40vw;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0, .6);
    border-radius: 10px;
    border: 1px solid white;
    padding: 1% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactInformation = styled.div`
    width: 80%;
    display: flex;
    color: white;
    font-size: .8rem;
    margin: 2% 0;
    display: flex;
    align-items: center;    
`

export const Icon = styled.div`
    font-size: 1.3rem;
    margin-right: 5%;
    display: flex;
    align-items: center;
`

export const ContrastColor = styled.span`
    color: ${({theme}) => theme.contrastColor};
`

export const GitHub = styled.img`
    margin-top: 35%;
    width: 3rem;
`