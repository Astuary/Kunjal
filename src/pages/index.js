import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import About from "../components/about"

const IndexPage = ({ data }) => (
    <Layout>
      <SEO title="About me" />
      <About avatar={data.placeholderImage.childImageSharp.fluid} />
    </Layout>
  )

export default IndexPage

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "botanic.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
