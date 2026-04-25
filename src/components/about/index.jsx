import React from "react"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "botanic.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 95) {
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
              alt="Kunjal Panchal"
              imgStyle={{ objectFit: "cover" }}
            />
            <div className="about-content">
              <Title> Hello, I'm Kunjal </Title>
              <Text> I'm a PhD candidate at Manning College of Information and Computer Sciences, Universtiy of Massachusetts - Amherst. </Text>
              <Text> My main area of research is <b className="text-primary lined-link">Machine Learning Training and Inference in Resource-</b> <b className="text-primary lined-link">constrained Environments</b>, advised by Prof. Hui Guan.</Text>
              <Text> I am currently a part of MLSys lab at UMass.</Text>
              <ResumeButton
                href={withPrefix("/Kunjal_Panchal_CV_Apr_2026.pdf")}
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
