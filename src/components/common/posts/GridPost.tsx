import styled from 'styled-components';
import variables from '../../../data/variables';

export const GridArticle = styled.div`
  display: grid;
  gap: .5rem; 
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  -webkit-box-align: start;
  @media(max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    border: ${variables.pixelBorder} solid ${variables.black};
    border-radius: 0;
    box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
	}
  > .content {
    padding: 1rem;
    border: ${variables.pixelBorder} solid ${variables.black};
    box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
    border-radius: 0;
    display: block;
    .subText_Tag { 
      text-wrap: no-wrap;
      text-overflow: ellipsis;
    }
  } 
  .blog_desc {
    font-size: .8rem;
    text-align: justify;
    line-height: 1.9;
  }
  &:hover {
    cursor: pointer;
    > div.media > .image-wrapper > a > div {
      transform: scale(1.2) rotate(8deg);
    }
  }
`
