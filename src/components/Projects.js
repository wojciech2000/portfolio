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
import progresserDesktop from "../pictures/progresser-desktop.png";
import progresserMobile from "../pictures/progresser-mobile.png";
import eliminationTableDesktop from "../pictures/elimination_table-desktop.png";
import eliminationTableMobile from "../pictures/elimination_table-mobile.png";
import portfolioDesktop from "../pictures/portfolio-desktop.png";
import portfolioMobile from "../pictures/portfolio-mobile.png";
import eCommerceDesktop from "../pictures/e-commerce-desktop.png";
import eCommerceMobile from "../pictures/e-commerce-mobile.png";
import teamMatesFinderDesktop from "../pictures/team-mate-finder-desktop.png";
import teamMatesFinderMobile from "../pictures/team-mate-finder-mobile.png";
import searchImagesDesktop from "../pictures/search-images-desktop.png";
import searchImagesMobile from "../pictures/search-images-mobile.png";

function Projects() {
  const {pageVariants} = useContext(DataContext);

  const displayProjects = () => {
    const projects = [
      {
        desktop: progresserDesktop,
        mobile: progresserMobile,
        usedTechnologies: ["React", "Redux", "Node.js", "Express", "SCSS", "MongoDB"],
        githubLink: "https://github.com/wojciech2000/Progresser",
        liveLink: "https://progresser-app.herokuapp.com/",
      },
      {
        desktop: teamMatesFinderDesktop,
        mobile: teamMatesFinderMobile,
        usedTechnologies: ["React", "SCSS", "Node.js", "GraphQL", "Apollo", "MongoDB"],
        githubLink: "https://github.com/wojciech2000/team-mates-finder",
        liveLink: "https://team-mates-finder.netlify.app/",
      },
      {
        desktop: eCommerceDesktop,
        mobile: eCommerceMobile,
        usedTechnologies: ["React", "Redux", "Node.js", "Express", "SCSS", "MongoDB"],
        githubLink: "https://github.com/wojciech2000/e-commerce-shop",
        liveLink: "https://e-comerce-app.herokuapp.com/",
      },
      {
        desktop: searchImagesDesktop,
        mobile: searchImagesMobile,
        usedTechnologies: ["React", "SCSS", "Unsplash API"],
        githubLink: "https://github.com/wojciech2000/search-images",
        liveLink: "https://search-images-unsplash.netlify.app/",
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
    ];

    return projects.map(({desktop, mobile, usedTechnologies, githubLink, liveLink}, index) => (
      <Project key={index}>
        <DesktopVersion src={desktop} />
        <MobileVersion src={mobile} />
        <ProjectInfo>
          <UlList>
            {usedTechnologies.map((technologie, index) => (
              <LiList key={index}>{technologie}</LiList>
            ))}
          </UlList>
          <Buttons center={!liveLink ? true : false}>
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
    ));
  };

  return (
    <ProjectsWrapper initial="in" animate="done" exit="out" variants={pageVariants}>
      {displayProjects()}
    </ProjectsWrapper>
  );
}

export default Projects;
