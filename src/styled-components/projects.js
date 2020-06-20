import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const ProjectsWrapper = styled(motion.div)`
    width: 95vw;
    height: 60vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    overflow-y: auto;
    margin: 5vh 0;

    @media (max-width: 700px) 
    {
        width: 90vw;
        height: 75vh;
    }

    @media (max-width: 460px) 
    {
        width: 100vw;
    }


`

export const Project = styled.div`
    width: 500px;
    height: 340px;
    position: relative;
    margin: 30px 60px;

    @media (max-width: 700px) 
    {
        margin: 15px 20px;
        width: 90%;
        height: 550px;
    }

`

export const DesktopVersion = styled.img`
    position: absolute;
    width: 75%; 
    height: 70%;
    border: 1px solid black;
    border-radius: 10px;
    z-index: 10;

    &:hover
    {
        z-index: 50;
    }

    @media (max-width: 700px) 
    {
        width: 80%;
        height: 45%;
    }

    @media (max-width: 460px) 
    {
        width: 100%;
    }

`

export const MobileVersion = styled.img`
    position: absolute;
    left: 66%;
    bottom: 0;
    transform: translateX(-50%);
    width: 24%;
    height: 60%;
    border-radius: 10px;
    z-index: 20;
    border: 1px solid white;

    @media (max-width: 700px) 
    {
        width: 120px;
        height: 40%;
        bottom: 45%;
        left: auto;
        right: 0;
        transform: translateX(0);
    }

`

export const ProjectInfo = styled.div`
    position: absolute;
    width: 87%; 
    height: 80%;
    right: 5%;
    bottom: 12%;
    background: rgba(0,0,0, .5);
    border-radius: 10px;

    @media(max-width: 700px)
    {
        background: rgba(0,0,0, .7);
    }

`

export const UlList = styled.ul`
    color: white;
    font-size: 18px;
    position: absolute;
    left: 85%;
    top: 5%;
    width: fit-content;

    @media (max-width: 700px) 
    {
        right: auto;
        top: auto;
        left: 0;
        bottom: 0;
        font-size: 16px;
        width: 100%;
        height: 35%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        height: 25%;
    }

    @media (max-width: 460px) 
    {
        font-size: 15px;  
    }
`

export const LiList = styled.li`

    padding: 5px;
    border: 1px solid ${({theme}) => theme.contrastColor};
    border-radius: 10px;
    margin: 5% 0;
    color: black;
    background-color: white;
    text-align: center;

    @media (max-width: 700px) 
    {
        margin: 4% 2%;
        color: white;
        background-color: transparent;
        border: none;
    }
`

export const Buttons = styled.div`
    position: absolute;
    bottom: 6%;
    left: 9%;
    width: 160px;
    display: flex;
    justify-content:  ${({portfolio}) => portfolio ? "center" : "space-between"};

    @media (max-width: 700px) 
    {
        left: 50%;
        bottom: 28%;
        width: 200px; 
        transform: translateX(-50%)
    }

` 

export const Button = styled.button`
    width: 70px;
    padding: 2.5px;
    font-size: 18px;
    border-radius: 8px;
    ${({code, theme}) => code && css`
        background: black;
        color: ${theme.contrastColor};
        
    `}
    
    &:hover
    {
        cursor: pointer;
    }

    @media (max-width: 700px) 
    {
        width: 90px;
        padding: 4px;
        font-size: 20px;
    }

`
