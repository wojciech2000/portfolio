import React from 'react'
import { AboutWrapper, Image, Text } from '../styled-components/about'
import me from '../pictures/me.jpg'

function About() {
    return (
        <AboutWrapper>
            <Image src={me} />
            <Text>My name is Wojciech,<br /> I was born and I’m living in Poland.<br /> My main specialisation is front-end, but<br /> I know basic of back-end</Text>
        </AboutWrapper>
    )
}

export default About
