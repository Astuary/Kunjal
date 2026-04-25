import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Repository from "../components/works/github"
import { graphql } from "gatsby"
import {RepoGrid, RepoInfo, Avatar} from "../components/styled/repository"
import {SectionIntro, ContainerLayout} from "../components/common";

const RepositoryPage = ({data}) => { 
  const viewer = data.githubData && data.githubData.data && data.githubData.data.viewer
  const repositories = viewer && viewer.repositories && viewer.repositories.nodes
    ? viewer.repositories.nodes
    : []

  return (
    <Layout> 
      <SEO title="Github Repositories" />
      <ContainerLayout>
        <SectionIntro>
          {viewer ? (
            <>
              <RepoInfo>
                <Avatar style={{ backgroundImage: `url(${viewer.avatarUrl})` }} />
                <h2>{viewer.name}</h2>
              </RepoInfo>
              <RepoGrid>
                {repositories.map((repo, index) => (
                  <Repository key={index} repo={repo} />
                )).reverse()}
              </RepoGrid>
            </>
          ) : (
            <p>
              GitHub repositories are temporarily unavailable. Please check back soon.
            </p>
          )}
        </SectionIntro>
      </ContainerLayout>
    </Layout>
  )
}
export default RepositoryPage

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
