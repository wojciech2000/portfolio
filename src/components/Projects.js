import React from 'react'
import { ProjectsWrapper, Project, DesktopVersion, MobileVersion, ProjectInfo, UlList, LiList, Buttons, Button } from '../styled-components/projects'
import progresserDesktop from '../pictures/progresser-desktop.gif'
import progresserMobile from '../pictures/progresser-mobile.gif'
import eliminationTableDesktop from '../pictures/elimination_table-desktop.gif'
import eliminationTableMobile from '../pictures/elimination_table-mobile.gif'

function Projects() {

    const displayProjects = () => {

        const projects = [
            {
                desktop: progresserDesktop,
                mobile: progresserMobile,
                usedTechnologies: [
                    "React", "Redux", "Node.js", "Express", "SCSS", "MongoDB"
                ],
                githubLink: "https://github.com/wojciech2000/Progresser",
                liveLink: "https://github.com/wojciech2000/Progresser"
            },
            {
                desktop: eliminationTableDesktop,
                mobile: eliminationTableMobile,
                usedTechnologies: [
                    "HTML", "SCSS", "JS"
                ],
                githubLink: "https://github.com/wojciech2000/Elimination-Table",
                liveLink: "https://github.com/wojciech2000/Elimination-Table"
            },
        ]


        return (projects.map(({ desktop, mobile, usedTechnologies, githubLink, liveLink  }, index) => (

            <Project key={index}>
            <DesktopVersion src={desktop} />
            <MobileVersion src={mobile} />
            <ProjectInfo>
                <UlList>
                    {usedTechnologies.map((technologie, index) => <LiList key={index}>{technologie}</LiList>)}
                </UlList>
                <Buttons>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"><Button code>Code</Button></a>
                    <a href={liveLink} target="_blank" rel="noopener noreferrer"><Button>Live</Button></a>
                </Buttons>
            </ProjectInfo>
        </Project>

        )) )

    }

    return (
        <ProjectsWrapper>
            {displayProjects()}
        </ProjectsWrapper>
    )
}

export default Projects
