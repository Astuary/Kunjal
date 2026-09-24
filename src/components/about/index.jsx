import React from "react"
import { withPrefix } from "gatsby"
import {AboutSection, Avatar, Title, Text} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = ({ avatar }) => {
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <Avatar
              fluid={avatar}
              alt="Kunjal Panchal"
              loading="eager"
              fadeIn={false}
            />
            <div className="about-content">
              <Title> Hello, I'm Kunjal </Title>
              <Text> I'm a Research Scientist at Adobe, working on the development of on-device, real-time ML models. I finished my PhD from Manning College of Information and Computer Sciences, Universtiy of Massachusetts - Amherst, advised by Prof. Hui Guan at the MLSys lab. </Text>
              <Text> My main area of research is <b className="text-primary lined-link">Machine Learning Training and Inference in Resource-</b> <b className="text-primary lined-link">constrained Environments</b>.</Text>
              <ResumeButton
                href={withPrefix("/Kunjal_Panchal_Resume_Sep_2026.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume / CV
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
