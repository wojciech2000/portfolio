import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AiOutlineGithub } from 'react-icons/ai'

export const ContactWrapper = styled(motion.div)`
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

export const GitHub = styled(AiOutlineGithub)`
    margin-top: 35%;
    font-size: 2.5rem;
    color: white;

    @media (max-width: 1024px) and (orientation: portrait)
    {
        margin-top: 40%;
        font-size: 4rem;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        margin-top: 45%;
        font-size: 5rem;
    }

`