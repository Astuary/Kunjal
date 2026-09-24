module.exports = {
  Site: 'https://github.com/Astuary',
  SiteTitle: 'Kunjal Panchal',
  Sitelogo: '#',
  SiteLogoText: 'Kunjal',
  SiteAuthor: 'Kunjal Panchal',
  SiteDescription: 'Kunjal Panchal - Research Scientist',
  defaultDescription: 'Kunjal Panchal - Portfolio', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
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
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    // twitter: 'https://twitter.com/AbdaliDahirr',
    github: 'https://github.com/Astuary',
    linkedin: 'https://www.linkedin.com/in/kunjal-panchal/',
  },
  SiteAddress: {
    city: 'Casablanca',
    region: 'Test',
    country: 'Morocco',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'kunjalspanchal@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2023',
};
