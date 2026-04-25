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
            <p style={{ lineHeight: 1.7, color: "#232323", maxWidth: "36em" }}>
              This page needs a GitHub API token that can read your account. The
              default CI token does not include that, so you are seeing this message
              instead of your repo list. Add a personal access token as the{" "}
              <code>GH_TOKEN</code> repository secret (and use it for{" "}
              <code>GATSBY_GITHUB_API_TOKEN</code> in the deploy workflow), then
              rebuild.
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
