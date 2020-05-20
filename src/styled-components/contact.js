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

    @media (max-width: 1024px) and (orientation: portrait)
    {
        top: 45%;
        width: 60vw;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        width: 80vw;
    }

`

export const ContactInformation = styled.div`
    width: 80%;
    color: white;
    font-size: .8rem;
    margin: 2% 0;
    display: flex;
    align-items: center;    

    @media (max-width: 1024px) and (orientation: portrait)
    {
        font-size: 1.4rem;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        font-size: 2rem;
    }

`

export const Icon = styled.div`
    font-size: 1.3rem;
    margin-right: 5%;
    display: flex;
    align-items: center;

    @media (max-width: 1024px) and (orientation: portrait)
    {
        font-size: 2rem;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        font-size: 2.8rem;
    }


`

export const ContrastColor = styled.span`
    color: ${({theme}) => theme.contrastColor};
`

export const GitHub = styled.img`
    margin-top: 35%;
    width: 3rem;

    @media (max-width: 1024px) and (orientation: portrait)
    {
        margin-top: 40%;
        width: 5rem;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        margin-top: 45%;
        width: 6rem;
    }

`