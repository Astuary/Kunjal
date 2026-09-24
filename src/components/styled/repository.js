import styled from "styled-components";
import variables from '../../data/variables';

export const RepoGrid = styled.div`
  @media(min-width: ${variables.breakpointPhone}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
export const RepoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
`
export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 0;
  border: ${variables.pixelBorder} solid ${variables.black};
  box-shadow: ${variables.pixelShadowSmall} ${variables.shadowColor};
  margin-right: 1rem;
  background-color: #F9F9F9;
  background-size: cover;
  background-position: center;
`

export const RepoContent = styled.div`
  border-radius: 0;
  border: ${variables.pixelBorder} solid ${variables.black};
  margin-bottom: 2rem;
  padding: 1rem;
  font-size: 16;
  box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
  transition: transform 80ms steps(1), box-shadow 80ms steps(1);
  &:hover {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 ${variables.shadowColor};
    h2 a {
      color: ${variables.primary};
    }
  }
`
export const Title = styled.h2`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  text-transform: capitalize;
  font-family: ${variables.pixelFont};
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: .85rem;
  }
`
export const RepoHead = styled.div`
  display: flex; 
  justify-content: space-between;
`
export const Text = styled.p`
  color: rgb(25 27 29);
  margin-bottom: 1rem;
  margin-top: .25rem;
  font-size: 1rem;
  text-transform: capitalize;
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: .9rem;
  }
`
export const FooterItem = styled.span`
  margin-right: .89rem;
  margin-bottom: 1rem;
  font-size: .75rem;
  color: #242525;
  font-family: ${variables.pixelFont};
  vertical-align: middle;
  display: inline-block;
  > * {
    vertical-align: middle;
  }
  > svg {
    width: 16px;
    height: 16px;
    &.star {
      fill: #FBC02D;
      stroke: #FFC107;
    }
    &.forkcount {
      fill: #157A6E;
      stroke: #157A6E;
    }
  }
  @media(max-width: ${variables.breakpointPhone}) {
    margin-right: .49rem;
    font-size: .7rem;
    > svg {
      width: 12px;
      height: 12px;
    }
  }
`
export const Circle = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  position: relative;
  vertical-align: initial;
`
