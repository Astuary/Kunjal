import styled from 'styled-components';
import Img from 'gatsby-image';
import variables from '../../data/variables';

export const AboutSection = styled.section`
  text-align: center;
  @media only screen and (max-width: ${variables.breakpointLarge}) {
    text-align: left;
  }
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 4rem;
    align-items: stretch;
    text-align: left;
    > .about-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`
export const Avatar = styled(Img)`
  border-radius: 0;
  border: ${variables.pixelBorder} solid ${variables.black};
  box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
  width: 100%;
  height: auto;
  display: block;
  align-self: start;
  overflow: hidden;
`
export const Title = styled.h1`
  font-size: 1.9rem;
  line-height: 1.5;
  text-transform: capitalize;
  font-family: ${variables.pixelFont};
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1.4rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.75;
  color: #232323;
  text-align: left;
  a {
    color: #3F51B5;
    text-decoration: underline;
  }
`

// export const Text = styled.p`
//   font-size: 1.2rem;
//   line-height: 2;
//   color: #232323;
//   text-transform: capitalize;
//   a {
//     color: #3F51B5;
//     text-decoration: underline;
//   }
// `

export const SubTitle = styled.h2`
  font-family: ${variables.pixelFont};
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  @media(min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
  }
`