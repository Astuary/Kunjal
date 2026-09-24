import styled from 'styled-components';
import variables from '../../../data/variables';

export const FooterStyle = styled.footer`
	padding-top: 1rem;
  padding-bottom: 8rem;
	z-index: 0;
	position: relative;
	text-align: left;
	@media(min-width: ${variables.breakpointPhone}) {
		background: linear-gradient(to top, #efe9e9, transparent 50%);
	}
	@media(max-width: ${variables.breakpointPhone}) {
		padding-bottom: 2rem;
		padding-left: .5rem;
		padding-right: .5rem;
		text-align: center;
	}
	.quote {
		font-size: 3rem;
		font-family: ${variables.pixelFont};
		line-height: 1.4;
		color: ${variables.primary};
		@media(max-width: ${variables.breakpointPhone}) {
			font-size: 1.5rem;
		}
	}
`;

export const SubRight = styled.p`
	font-size: .8rem;
	line-height: 1.8;
	letter-spacing:2px;
	text-transform: capitalize;
	margin-bottom: 20px;
	font-family: ${variables.pixelFont};
`
export const CopyRight = styled.p`
	font-size: 11px;
	line-height: 1.8;
	letter-spacing:1px;
	text-transform: capitalize;
`
export const FooterBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
  gap: 2rem;
	@media(max-width: ${variables.breakpointPhone}) {
		grid-template-columns: 1fr;
	}
`
export const FooterSocialMedia = styled.ul`
	list-style: none;
	padding-left: 0;
	@media(max-width: ${variables.breakpointPhone}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	li {
		margin-bottom: 1.5rem;
	}
`
export const MediaLink = styled.a`
	padding: 1rem 0rem;
	padding-bottom: .5rem;
	line-height: 1;
	font-size: .85rem;
  text-transform: capitalize;
  font-family: ${variables.pixelFont};
	color: ${variables.primary};

`

export const FooterLowerBar = styled.div`
  margin-top: 2rem;
  padding: 1.25rem 1.5rem;
  border: ${variables.pixelBorder} solid ${variables.black};
  border-radius: 0;
  box-shadow: ${variables.pixelShadow} ${variables.shadowColor};
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media(max-width: ${variables.breakpointPhone}) {
    flex-direction: column;
    text-align: center;
  }
`