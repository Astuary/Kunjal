import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, MediaLink, FooterSocialMedia, FooterLowerBar } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.filter(({ name }) => name !== "email").map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
					</FooterBody>
					<FooterLowerBar>
						<SubRight> The best time to <b className="text-primary lined-link">plant a tree</b> was 20 years ago. The second best time is <b className="text-primary lined-link">now</b>. </SubRight>
					</FooterLowerBar>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;