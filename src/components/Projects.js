import React from 'react'
import { ProjectsWrapper, Project, DesktopVersion, MobileVersion, ProjectInfo, UlList, LiList, Buttons, Button } from '../styled-components/projects'
import test from '../pictures/test.gif'
import testte from '../pictures/test2.gif'

function Projects() {
    return (
        <ProjectsWrapper>
            <Project>
                <DesktopVersion src={testte} />
                <MobileVersion src={testte} />
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
                        <Button code>Code</Button>
                        <Button>Live</Button>
                    </Buttons>
                </ProjectInfo>
            </Project>
            <Project>
                <DesktopVersion></DesktopVersion>
                <MobileVersion></MobileVersion>
                <ProjectInfo>
                    <UlList>
                        <LiList>React</LiList>
                        <LiList>Redux</LiList>
                        <LiList>SCSS</LiList>
                        <LiList>MongoDB</LiList>
                    </UlList>
                    <Buttons>
                        <Button code>Code</Button>
                        <Button>Live</Button>
                    </Buttons>
                </ProjectInfo>
            </Project>
            <Project>
                <DesktopVersion></DesktopVersion>
                <MobileVersion></MobileVersion>
                <ProjectInfo>
                    <UlList>
                        <LiList>React</LiList>
                        <LiList>Redux</LiList>
                        <LiList>Node.js</LiList>
                    </UlList>
                    <Buttons>
                        <Button code>Code</Button>
                        <Button>Live</Button>
                    </Buttons>
                </ProjectInfo>
            </Project>
            <Project>
                <DesktopVersion></DesktopVersion>
                <MobileVersion></MobileVersion>
                <ProjectInfo>
                    <UlList>
                        <LiList>React</LiList>
                        <LiList>Node.js</LiList>
                        <LiList>Express</LiList>
                        <LiList>SCSS</LiList>
                        <LiList>MongoDB</LiList>
                    </UlList>
                    <Buttons>
                        <Button code>Code</Button>
                        <Button>Live</Button>
                    </Buttons>
                </ProjectInfo>
            </Project>
        </ProjectsWrapper>
    )
}

export default Projects
