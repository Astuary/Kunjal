import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContainerLayout, Intro } from "../components/common"
import variables from "../data/variables"

const ArtGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: ${variables.breakpointLarge}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
  }
`

const ArtTile = styled.figure`
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
  background: #f7f7f7;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 250ms ease;
    aspect-ratio: 1 / 1;
  }

  &:hover img {
    transform: scale(1.04);
  }
`

const ArtIntro = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #232323;
`

const ArtPage = ({ data }) => {
  const artImages = data.allFile.nodes
    .slice()
    .sort((a, b) => {
      const aNum = Number((a.name.match(/\d+/) || ["0"])[0])
      const bNum = Number((b.name.match(/\d+/) || ["0"])[0])
      return bNum - aNum
    })

  return (
    <Layout>
      <SEO title="Art" />
      <Intro>
        <ContainerLayout>
          <ArtIntro>
            I practice with fine-line ink and oil pastel mediums, exploring quiet everyday moments.
          </ArtIntro>
          <ArtGrid>
            {artImages.map((image, index) => (
              <ArtTile key={image.id}>
                <img
                  src={image.publicURL}
                  alt={`Artwork ${index + 1}`}
                  loading="lazy"
                  draggable={false}
                />
              </ArtTile>
            ))}
          </ArtGrid>
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

export default ArtPage

export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "art" }
        extension: { in: ["jpg", "jpeg", "png", "webp"] }
      }
    ) {
      nodes {
        id
        name
        publicURL
      }
    }
  }
`
