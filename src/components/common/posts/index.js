import styled from 'styled-components';
import variables from '../../../data/variables';

export const Intro = styled.div`
  padding: 8rem 0 4rem 0;
  font-family: "GT-Walsheim-Pro-Regular";
  @media(max-width: ${variables.breakpointPhone}) {
    padding: 5.5rem 0 2.5rem 0;
  }
`;
export const HeaderIntro = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 34px;
  justify-content: space-between;
  margin-bottom: 6rem;
`
export const Title = styled.h1`
  font-family: ${variables.pixelFont};
  font-size: 1.5rem;
  line-height: 1.6;
  text-transform: capitalize;
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 1.1rem;
  }
`
export const SubTitle = styled.h3`
  font-size: 1.4rem;
  line-height: 1.6;
  text-transform: capitalize;
  font-family: ${variables.pixelFont};
  text-decoration: underline;
`
export const Text = styled.p`
  font-size: .98rem;
  line-height: 1.75;
  color: #000000;
  margin-top: 1.2rem;
  text-align: left;
  @media(max-width: ${variables.breakpointPhone}) {
    margin-top: 1rem;
    font-size: .9rem;
  }
`
export const SubText = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #232323;
`

export const SmallText = styled.small`
  font-size: .89rem;
  padding-right: 10px;
  > span {
    padding-left: 5px;
  }
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: .6rem;
  }
`

export const WorkPost = styled.article`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  margin-bottom: 3rem;
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    border: ${variables.pixelBorder} solid ${variables.black};
    border-radius: 0;
    box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
	}
  > div.content {
    padding: 2rem 3rem;
    @media(max-width: ${variables.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
  > div.media {
    text-align: center;
    > .image-wrapper {
      margin-top: 0rem;
      max-width: 100px;
      max-height: 100px;
      overflow: hidden;
      @media(min-width: ${variables.breakpointPhone}) {
        border: ${variables.pixelBorder} solid ${variables.black};
        border-radius: 0;
        box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
      }
      > a > div {
        transition: all 800ms ease-in-out;
      }
    }
  }
  &:hover {
    cursor: pointer;
    > div.media > .image-wrapper > a > div {
      transform: scale(1) rotate(360deg);
    }
  }
`

export const ResearchPost = styled.article`
  display: grid;
  align-items: center;
  margin-bottom: 2.5rem;
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    border: ${variables.pixelBorder} solid ${variables.black};
    border-radius: 0;
    box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
	}
  > div.content {
    padding: 1.25rem 2rem;
    > header {
      margin-bottom: 0.5rem;
    }
    @media(max-width: ${variables.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
  > div.media {
    text-align: center;
    > .image-wrapper {
      margin-bottom: .5rem;
      max-width: 100px;
      max-height: 100px;
      overflow: hidden;
      @media(min-width: ${variables.breakpointPhone}) {
        border: ${variables.pixelBorder} solid ${variables.black};
        border-radius: 0;
        box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
      }
      > a > div {
        transition: all 800ms ease-in-out;
      }
    }
  }
  &:hover {
    cursor: pointer;
    > div.media > .image-wrapper > a > div {
      transform: scale(1.2) rotate(8deg);
    }
  }
`

export const Authors = styled.p`
  margin: 0 0 0.4rem 0;
  color: ${variables.darkGrey};
  font-size: 0.9rem;
  line-height: 1.45;
  letter-spacing: 0.01em;
`

export const Category = styled.span`
  font-family: ${variables.pixelFont};
  color: ${variables.primary};
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .65em;
  border-radius: 0;
  padding: .5rem 1rem;
  margin-right: 1rem;
  border: 3px solid ${variables.primary};
`

export const Period = styled.span`
  font-family: ${variables.pixelFont};
  color: ${variables.darkGrey };
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .8em;
  float: right;
  @media(max-width: ${variables.breakpointPhone}) {
    float: none;
    display: block;
    margin-top: 0.25rem;
    font-size: 0.95em;
  }
`

export const Venue = styled.span`
  font-family: ${variables.pixelFont};
  color: ${variables.darkGrey };
  letter-spacing: .05em;
  font-size: .8em;
  float: left;
  @media(max-width: ${variables.breakpointPhone}) {
    float: none;
    display: block;
    font-size: 0.95em;
  }
`