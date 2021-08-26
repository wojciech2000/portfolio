import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import {
  AboutWrapper,
  Image,
  Text,
} from "../styled-components/about";
import me from "../pictures/me.jpg";

function About() {
  const { pageVariants } =
    useContext(DataContext);

  return (
    <AboutWrapper
      initial="in"
      animate="done"
      exit="out"
      variants={pageVariants}
    >
      <Image src={me} />
      <Text>
        My name is Wojciech,
        <br /> I have been programming for three
        years.
        <br /> My main specialisation is
        front-end, but
        <br /> I strive to constant development
        and broaden
        <br /> my skills and competences
      </Text>
    </AboutWrapper>
  );
}

export default About;