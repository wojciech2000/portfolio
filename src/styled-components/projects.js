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


`

export const Project = styled.div`
    width: 430px;
    height: 270px;
    position: relative;
    margin: 30px 60px;
`

export const DesktopVersion = styled.div`
    position: absolute;
    width: 60%; 
    height: 70%;
    background: white;
    border-radius: 10px;
    z-index: 10;
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
`

export const ProjectInfo = styled.div`
    position: absolute;
    width: 93%; 
    height: 80%;
    right: 0;
    bottom: 12%;
    background: rgba(0,0,0, .5);
    border-radius: 10px;
`

export const UlList = styled.ul`
    color: white;
    font-size: 18px;
    position: absolute;
    right: 5%;
    top: 5%;
    line-height: 28px;
`

export const Buttons = styled.div`
    position: absolute;
    bottom: 4%;
    left: 4%;
    width: 150px;
    display: flex;
    justify-content: space-between;

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
`