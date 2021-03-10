import styled from "styled-components";
import {motion} from "framer-motion";

export const AboutWrapper = styled(motion.div)`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 70vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) and (orientation: portrait) {
    height: 40vh;
    top: 50%;
  }

  @media (max-width: 524px) and (orientation: portrait) {
    width: 80vw;
  }
`;

export const Image = styled.img`
  height: 50%;
  object-fit: fill;
  border-radius: 50%;
  border: 1px solid white;
`;

export const Text = styled.div`
  width: 80%;
  font-size: 0.7rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  padding: 2%;
  border-radius: 10px;
  border: 1px solid white;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 20px;
    width: 370px;

    margin-top: 10%;
  }

  @media (max-width: 768px) and (orientation: portrait) {
    font-size: 16px;
    width: 330px;
  }

  @media (max-width: 524px) and (orientation: portrait) {
    font-size: 14px;
    width: 100%;
  }
`;
