import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import variables from "../data/variables"
import {
  ContainerLayout,
  WorkPost,
  Venue,
  Period,
  Intro,
  Text,
} from "../components/common"

const DegreeHeading = styled.h2`
  font-family: "GT-Walsheim-Pro-Bold";
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  text-transform: none;
  margin: 0 0 0.5rem 0;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 1.35rem;
  }
`

const SchoolLine = styled.p`
  font-family: "GT-Walsheim-Pro-Regular";
  font-size: 1.05rem;
  line-height: 1.6;
  color: #232323;
  margin: 0 0 0.75rem 0;
  font-weight: 400;
  max-width: 42em;
`

const PeriodGpaRow = styled.div`
  overflow: hidden;
  margin-top: 0.25rem;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`

const EducationIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <Layout> 
        <SEO title="Education" />
        <Intro>
          <ContainerLayout>
            <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
                return (
                  <WorkPost key={node.fields.slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid} title="work title" />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <header>
                        <DegreeHeading
                          className="text-primary lined-link"
                          style={{ boxShadow: "none" }}
                        >
                          {title}
                        </DegreeHeading>
                        {Array.isArray(node.frontmatter.categories) &&
                          node.frontmatter.categories.length > 0 && (
                            <SchoolLine>
                              {node.frontmatter.categories.join(" · ")}
                            </SchoolLine>
                          )}
                        <PeriodGpaRow>
                          <Venue>{node.frontmatter.period}</Venue>
                          <Period>{node.frontmatter.gpa}</Period>
                        </PeriodGpaRow>
                      </header>
                        <Text
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                    </div>
                  </WorkPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default EducationIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(education)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            categories
            period
            gpa
            description
          }
        }
      }
    }
  }
`