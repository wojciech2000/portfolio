import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.nav`
    position: absolute;
    right: 5vw;
    top: 6vh;
    width: 45vw;

    @media (max-width: 1024px) and (orientation: portrait)
    {
        top: 7.4vh;
        width: 65vw;
    }
`
export const UlNav = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const LiNav = styled.li`

    position: relative;
    font-size: 1rem;
    width: 25%;
    text-align: center;

    &:nth-last-child(3), &:nth-last-child(2), &:nth-last-child(1)
    {
        &::before
        {
            content: '';
            position: absolute;
            width: 3px;
            left: -1%;
            transform: translateY(-15%);
            border-radius: 20px;
            height: 180%;
            background: white;
        }
    }

    @media (max-width: 1024px) and (orientation: portrait)
    {
        font-size: 1.7rem;
    }
`

export const LinkHome = styled(Link)`
    position: absolute;
    left: 5vw;
    top: 6vh;
    color: white;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
    border-radius: 10px;
    
    ${({ active }) => active && activeTab};

    @media (max-width: 1024px) and (orientation: portrait)
    {
        font-size: 3rem;
        background: rgba(0,0,0, .4);
        border: 1px solid white;
    }

`

const activeTab = css`
    color: ${({ theme }) => theme.contrastColor};
    background-color: rgba(0,0,0, .7);
`

export const LinkNav = styled(Link)`
    border-radius: 6px;
    padding: 3% 10%;
    color: ${({color}) => color };
    transition: all .3s ease-in-out;
    transition-property: color, background-color;
    ${({ active }) => active && activeTab};

    @media (max-width: 1024px) and (orientation: portrait)
    {
        color: black;
        font-weight: 600;
        ${({ active }) => active && activeTab};
    }

`