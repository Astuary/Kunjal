import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "botanic.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <Avatar
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="my photo"
            />
            <div className="about-content">
              <Title> Hello, I'm Kunjal </Title>
              <Text> I'm a PhD candidate at Manning College of Information and Computer Sciences, Universtiy of Massachusetts - Amherst. </Text>
              <Text> My main area of research is <b className="text-primary lined-link">Machine Learning Training and Inference in Resource-</b> <b className="text-primary lined-link">constrained Environments</b>, advised by Prof. Hui Guan.</Text>
              <Text> I am currently a part of MLSys lab at UMass.</Text>
              <ResumeButton href="Kunjal_Panchal_CV_Apr_2026.pdf" target="_blank"> Download Resume / CV </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
