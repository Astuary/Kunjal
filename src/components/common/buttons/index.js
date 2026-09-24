import styled from "styled-components";
import colors from "../../../data/variables";

export const ButtonDefault = styled.a`
  cursor: pointer;
  margin: 10% 0%;
  font-family: ${colors.pixelFont};
  font-size: .8em;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border: ${colors.pixelBorder} solid ${colors.black};
  color: ${colors.black};
  background: #fff;
  outline: none;
  position: relative;
  display: inline-block;
  padding: 15px 10px 14px;
  width: auto;
  min-width: 200px;
  box-shadow: ${colors.pixelShadow} ${colors.shadowColor};
  transition: transform 80ms steps(1), box-shadow 80ms steps(1);
  &:hover {
    background: ${colors.primary};
    border-color: ${colors.primary};
    color: #fff;
  }
  &:active {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 ${colors.shadowColor};
  }
`;

export const ReadMore = styled.span`
  color: #000;
  font-size: .85rem;
  text-transform: uppercase;
  letter-spacing: .7px;
  font-family: ${colors.pixelFont};
  &:hover {
    color: ${colors.primary};
  }
  &:after {
    bottom: 1px;
    height: 3px;
    background: ${colors.primary};
  }
`

export const ResumeButton = styled.a`
  color: #000;
  font-size: .85rem;
  letter-spacing: 1px;
  font-family: ${colors.pixelFont};
  border: ${colors.pixelBorder} solid ${colors.black};
  display: block;
  margin: 6rem 0 2rem 0;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0;
  box-shadow: ${colors.pixelShadow} ${colors.shadowColor};
  transition: color 80ms steps(1), border-color 80ms steps(1), transform 80ms steps(1), box-shadow 80ms steps(1);
  &:hover {
    color: ${colors.primary};
    border-color: ${colors.primary};
  }
  &:active {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 ${colors.shadowColor};
  }
`