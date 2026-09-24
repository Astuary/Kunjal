import styled from 'styled-components';
import variables from '../../../data/variables';

export const Tag = styled.a`
  font-family: ${variables.pixelFont};
  color: ${variables.darkGrey};
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .7em;
  background: #fff;
  border-radius: 0;
  padding: .5rem 1rem;
  margin-right: 1rem;
  border: 2px solid ${variables.darkGrey};
  display: inline-block;
  margin-bottom: 1rem;
  transition: background-color 80ms steps(1), color 80ms steps(1);
  &:hover {
    background: ${variables.darkGrey};
    color: ${variables.inverse};
  }
  &.active {
    background: ${variables.primary};
    border-color: ${variables.primary};
    color: ${variables.inverse};
  }
`