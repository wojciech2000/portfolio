import styled, { css } from 'styled-components'

export const ProjectsWrapper = styled.div`
    width: 85vw;
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

    @media (max-width: 645px) 
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
    width: 430px;
    height: 270px;
    position: relative;
    margin: 30px 60px;

    @media (max-width: 645px) 
    {
        width: 90%;
        margin: 15px 20px;
        height: 400px;
    }

    @media (max-width: 460px) 
    {
        width: 90%;
        height: 500px;
    }

`

export const DesktopVersion = styled.div`
    position: absolute;
    width: 60%; 
    height: 70%;
    background: white;
    border-radius: 10px;
    z-index: 10;

    @media (max-width: 645px) 
    {
        width: 70%;
        height: 45%;
    }

    @media (max-width: 460px) 
    {
        width: 100%;
    }

`

export const MobileVersion = styled.div`
    position: absolute;
    left: 61%;
    bottom: 0;
    transform: translateX(-50%);
    width: 22%;
    height: 60%;
    background: gray;
    border-radius: 10px;
    z-index: 20;

    @media (max-width: 645px) 
    {
        width: 120px;
        height: 50%;
        left: auto;
        right: 0;
        bottom: 40%;
        transform: translateX(0);
    }

    @media (max-width: 460px) 
    {
        height: 40%;
        bottom: 45%;
    }

`

export const ProjectInfo = styled.div`
    position: absolute;
    width: 93%; 
    height: 80%;
    right: 0;
    bottom: 12%;
    background: rgba(0,0,0, .5);
    border-radius: 10px;

    @media(max-width: 645px)
    {
        background: rgba(0,0,0, .7);
    }

`

export const UlList = styled.ul`
    color: white;
    font-size: 18px;
    position: absolute;
    right: 5%;
    top: 5%;
    line-height: 28px;

    @media (max-width: 645px) 
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
    }

    @media (max-width: 460px) 
    {
        font-size: 15px;
        height: 25%;
    }
`

export const LiList = styled.li`
    @media (max-width: 645px) 
    {
        margin: 4% 2%;
    }
`

export const Buttons = styled.div`
    position: absolute;
    bottom: 4%;
    left: 4%;
    width: 150px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 645px) 
    {
        bottom: 40%;
        width: 180px; 
    }

    @media (max-width: 460px) 
    {
        left: 50%;
        bottom: 28%;
        transform: translateX(-50%)
    }

` 

export const Button = styled.button`
    width: 70px;
    padding: 2px;
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

    @media (max-width: 645px) 
    {
        width: 80px;
        padding: 2px;
        font-size: 16px;
    }

`