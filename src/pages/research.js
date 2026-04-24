import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {Tag, ContainerLayout, ResearchPost, Period, Venue, Intro, Title, Text, Authors} from "../components/common"

const ResearchIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges
  const highlightedName = "Kunjal Panchal"

  return (
      <Layout> 
        <SEO title="Research" />
        <Intro>
          <ContainerLayout>

            <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
                return (
                  <ResearchPost key={node.fields.slug}>
                    <div className="content">
                      <header>
                        <Authors>
                          <strong>Authors:</strong>{" "}
                          {node.frontmatter.authors.map((author, index) => (
                            <React.Fragment key={author}>
                              {index > 0 ? ", " : ""}
                              {author === highlightedName ? <strong>{author}</strong> : author}
                            </React.Fragment>
                          ))}
                        </Authors>
                        <Title>
                          <a className="text-primary lined-link" style={{ boxShadow: `none` }} href={node.frontmatter.url}>
                            {title}
                          </a>
                        </Title>
                        <Venue>{node.frontmatter.venue}</Venue>
                        <Period>{node.frontmatter.period}</Period>
                      </header>
                      <Text
                        style={{ clear: "both", marginTop: "1.25rem", lineHeight: 1.7 }}
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <div style={{ marginTop: "0.25rem" }}>
                        {node.frontmatter.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
                      </div>
                    </div>
                  </ResearchPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
  )
}

export default ResearchIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(research)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            authors
            venue
            period
            url
            description
          }
        }
      }
    }
  }
`