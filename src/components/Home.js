import React from 'react'
import { HomeWrapper, Header, Bigger, Contrast, Image } from '../styled-components/home'
import github from '../pictures/github-icon.svg'

function Home() {
    return (
        <HomeWrapper>
            <Header>
                <Bigger>Hello</Bigger><br />
                my name is Wojtek, <br />
                and I'm <Contrast>front-end developer</Contrast>
            </Header>
            <a href="https://github.com/wojciech2000?tab=repositories" target="_blank" rel="noopener noreferrer" title="Check out my github"><Image src={github} alt="github_icon"/></a>
        </HomeWrapper>
    )
}

export default Home
