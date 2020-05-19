import React from 'react'
import { SkillsWrapper, SkillInfo, SklillIcon, SkillTitle, SklillNames, ContrastColor } from '../styled-components/skills'
import { MdLaptopMac } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
function Skills() {
    return (
        <SkillsWrapper>
            <SkillInfo>
                <SklillIcon><MdLaptopMac /></SklillIcon>
                <SkillTitle>Front-end</SkillTitle>
                <SklillNames>
                    <li>HTML5</li>
                    <ContrastColor>CSS3</ContrastColor>
                    <li>SCSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <ContrastColor>REDUX</ContrastColor>
                    <li>STYLED-COMPONENTS</li>
                </SklillNames>
            </SkillInfo>
            <SkillInfo>
                <SklillIcon><FaDatabase /></SklillIcon>
                <SkillTitle>Back-end</SkillTitle>
                <SklillNames>
                    <li>NODE.JS</li>
                    <li>EXPRESS</li>
                    <ContrastColor>MYSQL</ContrastColor>
                </SklillNames>
            </SkillInfo>
            <SkillInfo>
                <SklillIcon><FiSettings /></SklillIcon>
                <SkillTitle>Tools</SkillTitle>
                <SklillNames>
                    <ContrastColor>GIT / GITHUB</ContrastColor>
                    <li>FIGMA</li>
                    <li>NPM</li>
                </SklillNames>
            </SkillInfo>
        </SkillsWrapper>
    )
}

export default Skills
