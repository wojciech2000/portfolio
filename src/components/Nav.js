import React, { Fragment, useState, useEffect } from 'react';
import { NavWrapper, UlNav, LiNav, LinkHome, Hamburger, LinkNav } from '../styled-components/nav'
import { AiFillHome } from 'react-icons/ai'
import { FaHamburger } from 'react-icons/fa'

function Nav() {

    const [activeNavStates, setActive] = useState([false, false, false, false, false])
    const [navState, setNavState] = useState(true)

    useEffect(()=> {
        const hrefsLink = Array.from(document.querySelectorAll('a'))
        const currentPage = hrefsLink.findIndex(href => href.pathname === window.location.pathname)

        //reset all tabs
        let array = [false, false, false, false, false]
        //set active tab
        array[currentPage] = true

        setActive(array)
    },[])

    const toggleNav = () => {
        setNavState(!navState)
    }

    const activeStyle = number => {

        //reset all tabs
        let array = [false, false, false, false, false]
        //set active tab
        array[number] = true

        setActive(array)
        //hide navbar on mobile
        number !== 0 && toggleNav()
    }

    return (
        <Fragment>
            <LinkHome to="/" active={activeNavStates[0] ? 1 : 0} onClick={()=> activeStyle(0)} ><AiFillHome /></LinkHome>
            <Hamburger onClick={toggleNav}>
                <FaHamburger />
            </Hamburger>
            <NavWrapper hideNav={navState}>

                <UlNav>
                    <LiNav><LinkNav to="/about" active={activeNavStates[1] ? 1 : 0} onClick={()=> activeStyle(1)} >About</LinkNav></LiNav>
                    <LiNav><LinkNav to="/skills" active={activeNavStates[2] ? 1 : 0} onClick={()=> activeStyle(2)} >Skills</LinkNav></LiNav>
                    <LiNav><LinkNav to="/projects" active={activeNavStates[3] ? 1 : 0} onClick={()=> activeStyle(3)} color="white">Projects</LinkNav></LiNav>
                    <LiNav><LinkNav to="/contact" active={activeNavStates[4] ? 1 : 0} onClick={()=> activeStyle(4)} >Contact</LinkNav></LiNav>
                </UlNav>
            </NavWrapper>
        </Fragment>
    )
}

export default Nav
