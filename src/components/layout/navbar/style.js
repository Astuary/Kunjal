import styled from "styled-components";
import variables from '../../../data/variables';

export const NavbarLogo = styled.div`
  a {
    color: ${variables.black};
    font-size: 1.7rem;
    font-family: ${variables.pixelFont};
  }
  @media(max-width: ${variables.breakpointPhone}) {
    display: none
  }
`

export const NavbarElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: center;
    width: 100%;
  }
`

export const NavbarList = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  > li a {
    font-family: ${variables.pixelFont};
    font-size: .8rem;
    color: #232323;
    padding: .5rem .4rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: middle;
    transition: background-color 80ms steps(1), color 80ms steps(1);
    &:hover,
    &.active {
      background-color: ${variables.black};
      color: ${variables.inverse};
    }
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span,
    svg {
      display: block;
      vertical-align: middle;
    }
    @media(max-width: ${variables.breakpointPhone}) {
      font-size: .7rem;
    }
  }
  @media(max-width: ${variables.breakpointPhone}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.35rem;
    > li {
      flex: 1 1 30%;
      max-width: 150px;
    }
    > li a {
      margin: 0;
      padding: 0.6rem 0.2rem;
    }
  }
`

