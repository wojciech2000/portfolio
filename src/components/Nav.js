import React, { Fragment } from 'react';
import { NavWrapper, UlNav, LiNav, LinkHome, LinkNav } from '../styled-components/nav'
import { AiFillHome } from 'react-icons/ai'

function Nav() {

    return (
        <Fragment>
            <LinkHome to="/"><AiFillHome /></LinkHome>
            <NavWrapper>

                <UlNav>
                    <LiNav><LinkNav to="/about" >About</LinkNav></LiNav>
                    <LiNav><LinkNav to="/skills">Skills</LinkNav></LiNav>
                    <LiNav><LinkNav to="/projects" color="white">Projects</LinkNav></LiNav>
                    <LiNav><LinkNav to="/contact">Contact</LinkNav></LiNav>
                </UlNav>
            </NavWrapper>
        </Fragment>
    )
}

export default Nav
