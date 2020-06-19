import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeWrapper = styled(motion.div)`
    position: absolute;
    top: 30vh;
    left: 5vw;
    color: red;

    @media (max-width: 1024px) and (orientation: portrait)
    {
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        text-align: center;
        width: fit-content;
    }

    @media (max-width: 432px)
    {
        top: 40vh;
    }

`

export const Header = styled.h1`

    color: white;
    font-size: 1.4rem;
    background: rgba(0,0,0, .1);
    border-radius: 10px;


    @media (max-width: 1024px) and (orientation: portrait)
    {
        font-size: 3.6rem;
    }

    @media (max-width: 768px)
    {
        font-size: 3rem;
    }

    @media (max-width: 432px)
    {
        background: rgba(0,0,0, .3);
    }
`

export const Bigger = styled.span`
    font-size: 2.7rem;

    @media (max-width: 1024px) and (orientation: portrait)
    {
        font-size: 5.5rem;
    }

    @media (max-width: 768px)
    {
        font-size: 4.5rem;
    }
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

    @media (max-width: 1024px) and (orientation: portrait)
    {
        width: 7rem;
    }

    @media (max-width: 768px)
    {
        width: 5rem;
    }
`