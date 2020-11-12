import React, {useContext} from "react";
import {DataContext} from "./DataContext";
import {
  ProjectsWrapper,
  Project,
  DesktopVersion,
  MobileVersion,
  ProjectInfo,
  UlList,
  LiList,
  Buttons,
  Button,
} from "../styled-components/projects";
import progresserDesktop from "../pictures/progresser-desktop.gif";
import progresserMobile from "../pictures/progresser-mobile.gif";
import eliminationTableDesktop from "../pictures/elimination_table-desktop.gif";
import eliminationTableMobile from "../pictures/elimination_table-mobile.gif";
import portfolioDesktop from "../pictures/portfolio-desktop.gif";
import portfolioMobile from "../pictures/portfolio-mobile.gif";
import eCommerceDesktop from "../pictures/e-commerce-desktop.gif";
import eCommerceMobile from "../pictures/e-commerce-mobile.gif";

function Projects() {
  const {pageVariants} = useContext(DataContext);

  const displayProjects = () => {
    const projects = [
      {
        desktop: progresserDesktop,
        mobile: progresserMobile,
        usedTechnologies: [
          "React",
          "Redux",
          "Node.js",
          "Express",
          "SCSS",
          "MongoDB",
        ],
        githubLink: "https://github.com/wojciech2000/Progresser",
        liveLink: "https://progresser-app.herokuapp.com/",
      },
      {
        desktop: eliminationTableDesktop,
        mobile: eliminationTableMobile,
        usedTechnologies: ["HTML", "SCSS", "JS"],
        githubLink: "https://github.com/wojciech2000/elimination-table",
        liveLink: "https://wojciech2000.github.io/elimination-table/",
      },
      {
        desktop: portfolioDesktop,
        mobile: portfolioMobile,
        usedTechnologies: ["React", "Styl.-Comp."],
        githubLink: "https://github.com/wojciech2000/portfolio",
      },
      {
        desktop: eCommerceDesktop,
        mobile: eCommerceMobile,
        usedTechnologies: [
          "React",
          "Redux",
          "Node.js",
          "Express",
          "SCSS",
          "MongoDB",
        ],
        githubLink: "https://github.com/wojciech2000/e-commerce-shop",
        liveLink: "https://e-comerce-app.herokuapp.com/",
      },
    ];

    return projects.map(
      ({desktop, mobile, usedTechnologies, githubLink, liveLink}, index) => (
        <Project key={index}>
          <DesktopVersion src={desktop} />
          <MobileVersion src={mobile} />
          <ProjectInfo>
            <UlList>
              {usedTechnologies.map((technologie, index) => (
                <LiList key={index}>{technologie}</LiList>
              ))}
            </UlList>
            <Buttons portfolio={desktop === portfolioDesktop ? true : false}>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button code>Code</Button>
              </a>
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <Button>Live</Button>
                </a>
              )}
            </Buttons>
          </ProjectInfo>
        </Project>
      ),
    );
  };

  return (
    <ProjectsWrapper
      initial="in"
      animate="done"
      exit="out"
      variants={pageVariants}
    >
      {displayProjects()}
    </ProjectsWrapper>
  );
}

export default Projects;
