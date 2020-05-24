import React from 'react'
import { ProjectsWrapper, Project, DesktopVersion, MobileVersion, ProjectInfo, UlList, LiList, Buttons, Button } from '../styled-components/projects'
import progresserDesktop from '../pictures/progresser-desktop.gif'
import progresserMobile from '../pictures/progresser-mobile.gif'

function Projects() {
    return (
        <ProjectsWrapper>
            <Project>
                <DesktopVersion src={progresserDesktop} />
                <MobileVersion src={progresserMobile} />
                <ProjectInfo>
                    <UlList>
                        <LiList>React</LiList>
                        <LiList>Redux</LiList>
                        <LiList>Node.js</LiList>
                        <LiList>Express</LiList>
                        <LiList>SCSS</LiList>
                        <LiList>MongoDB</LiList>
                    </UlList>
                    <Buttons>
                        <a href="https://github.com/wojciech2000/Progresser" target="_blank" rel="noopener noreferrer"><Button code>Code</Button></a>
                        <a href="https://github.com/wojciech2000/Progresser" target="_blank" rel="noopener noreferrer"><Button>Live</Button></a>
                    </Buttons>
                </ProjectInfo>
            </Project>
        </ProjectsWrapper>
    )
}

export default Projects
