import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {ContainerLayout, WorkPost, Venue, Period, Category, Intro, SubTitle, Title, Text} from "../components/common"

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
                      <div>
                          {node.frontmatter.categories.map((tag, index) => (<Category key={index}>{tag}</Category>))}
                        </div>
                        <Title>
                          <Link
                            className="text-primary lined-link"
                            style={{ boxShadow: `none`, pointerEvents: "none", cursor: "default" }}
                            to="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            {title}
                          </Link>
                        </Title>
                      </header>
                        <Venue>{node.frontmatter.period}</Venue>
                        <Period>{node.frontmatter.gpa}</Period>
                        <br/>
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