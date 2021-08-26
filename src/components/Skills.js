import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import {
  SkillsWrapper,
  SkillColumn,
  SklillIcon,
  SkillTitle,
  SklillNames,
  ContrastColor,
} from "../styled-components/skills";
import { MdLaptopMac } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
function Skills() {
  const { pageVariants } =
    useContext(DataContext);

  return (
    <SkillsWrapper
      initial="in"
      animate="done"
      exit="out"
      variants={pageVariants}
    >
      <SkillColumn>
        <SklillIcon>
          <MdLaptopMac />
        </SklillIcon>
        <SkillTitle>Front-end</SkillTitle>
        <SklillNames>
          <li>HTML5</li>
          <ContrastColor>CSS3/SCSS</ContrastColor>
          <li>JS/TS</li>
          <li>REACT/REDUX</li>
          <ContrastColor>
            STYLED-COMPONENTS
          </ContrastColor>
          <li>TAILWIND</li>
          <li>JEST/REACT-TEST.-LIB.</li>
        </SklillNames>
      </SkillColumn>
      <SkillColumn>
        <SklillIcon>
          <FaDatabase />
        </SklillIcon>
        <SkillTitle>Back-end</SkillTitle>
        <SklillNames>
          <li>NODE.JS</li>
          <li>EXPRESS</li>
          <ContrastColor>
            MYSQL/POSTGRES/MONGODB
          </ContrastColor>
          <li>MONGOOSE/TYPEORM</li>
          <li>GRAPHQL</li>
          <li>REST API</li>
        </SklillNames>
      </SkillColumn>
      <SkillColumn>
        <SklillIcon>
          <FiSettings />
        </SklillIcon>
        <SkillTitle>Tools</SkillTitle>
        <SklillNames>
          <ContrastColor>NPM/YARN</ContrastColor>
          <li>FIGMA/ZEPLIN</li>
          <li>JIRA/TRELLO</li>
          <li>STRAPI</li>
          <ContrastColor>GIT</ContrastColor>
        </SklillNames>
      </SkillColumn>
    </SkillsWrapper>
  );
}

export default Skills;