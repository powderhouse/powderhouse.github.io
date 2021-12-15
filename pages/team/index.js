import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GridOverlay from '../../components/GridOverlay';

import { 
	baseGrid,
	PageContainer,
	PageSplash,
	PageHeader,
	PageTableOfContents,
	PageTOCListItem,
	PageTOCLink,
	PageIntro,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	Highlight,
} from '../../components/global.js';

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function TeamPage() {
    return (
        <PageContainer css={baseGrid}>
		<Header />
		<PageSplash bgColor='purple' color='off-black'>
			<PageHeader>Team</PageHeader>
			<PageTableOfContents>
				<PageTOCListItem>
					<PageTOCLink href='#'>Staff</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>Advisors</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>Alumni</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>Jobs</PageTOCLink>
				</PageTOCListItem>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			<p>
				Invention without advocacy is irrelevant. Advocacy without invention is incrementalist. We&apos;re building a team which believes it&apos;s only by bringing these worlds together that we can realize radically different futures of learning.  <a href='/jobs'>Join us.</a>
			</p>
		</PageIntro>

		<PageSection isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>Staff</SectionHeader>
			<WidePageSectionContent>
				<PersonCard>
					<PersonHeadshot></PersonHeadshot>
					<PersonName>Bakhtiar Mikhak</PersonName>
					<PersonTitle>Staff Onboarding</PersonTitle>
					<PersonLinks>
						<li><a href="">Twitter</a></li>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonHeadshot></PersonHeadshot>
					<PersonName>Shaunalynn Duffy</PersonName>
					<PersonTitle>Director of Operations</PersonTitle>
					<PersonLinks>
						<li><a href="">Website</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonHeadshot></PersonHeadshot>
					<PersonName>Alec Resnick</PersonName>
					<PersonTitle>Director</PersonTitle>
					<PersonLinks>
						<li><a href="">Twitter</a></li>
						<li><a href="">Website</a></li>
					</PersonLinks>
				</PersonCard>
			</WidePageSectionContent>
		</PageSection>

		<PageSection isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>Advisors</SectionHeader>
			<WidePageSectionContent>
				<PersonCard>
					<PersonName>John Bell</PersonName>
					<PersonBio>is currently a fellow at MIT’s Program in Art, Culture, and Technology and director of the Ballard Institute and Museum of Puppetry at the University of Connecticut.</PersonBio>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonName>Beth O&apos;Sullivan</PersonName>
					<PersonBio>co-founded the Science Club for Girls: a program that brings hands-on science clubs to 600 girls in the Boston area, working to close the socioeconomic and gender gaps in science.</PersonBio>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>
			</WidePageSectionContent>
		</PageSection>

		<PageSection isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>Alumni</SectionHeader>
			<WidePageSectionContent>
				<PersonCard>
					<PersonName>John Bell</PersonName>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonName>Beth O&apos;Sullivan</PersonName>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonName>John Bell</PersonName>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonName>Beth O&apos;Sullivan</PersonName>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonName>John Bell</PersonName>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>
			</WidePageSectionContent>
		</PageSection>

		<PageSection isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>Jobs</SectionHeader>
			<PageSectionContent>
				<p>
					Powderhouse is building something which has never existed before: a vertically integrated<Highlight highlight='purple'><sup>*</sup></Highlight> research, design, and advocacy organization devoted to youth.
				</p>
				<p>
					Most work in this space is about School,<Highlight highlight='purple'><sup>**</sup></Highlight> not about learning.  The little which is about learning ignores the wickedly hard problem of grappling with School.  So much talk about innovation and revolution, so little courage to tackle radical problems with the patience and rigor they require.
				</p>
				<p>
					If that inspires (rather than deflates or offends), we&apos;d like your help.
				</p>
				<FootNotes>
					<aside>
						<sup>*</sup>
						That means we <i>actually</i> work with youth, prototype tools and materials, and design systems and policies that govern learning environments all under one roof.
					</aside>
					
					<aside>
						<sup>**</sup> 
						Original Holt quote re: S-chool, <i>via Instead of Education</i>, &quot;The schools for do-ers, which help people explore the world as they choose, I now call &quot;small s schools&quot; (written s-chools). The schools for educators, which get and hold their students by the threat of jail or uselessness or poverty, I now call &quot;capital S-chools,&quot; (written S-chools). There is very little we can do to make these S-chools better, and they are almost certain to get worse.&quot;
					</aside>
				</FootNotes>

				<a href="/jobs"><div>Jobs</div></a>
			</PageSectionContent>
		</PageSection>

		<Footer />
	</PageContainer>
    );
}

let PersonCard = styled.div`
	border:black dotted 1px;
	grid-column:span 3;
`;

let PersonHeadshot = styled.div`
	height:150px;
	width:150px;
	background-image:url(https://www.biography.com/.image/t_share/MTIwNjA4NjMzODI4MjQ3MDUy/emma-goldman-9314556-1-402.jpg);
	background-size:cover;
`;

let PersonName = styled.h3`
	
`;

let PersonTitle = styled.p`
	
`;

let PersonLinks = styled.ul`
	
`;

let PersonBio = styled.p`
	
`;

let FootNotes = styled.div`
	display:grid;
	grid-template-columns:2fr 5fr;
	gap: var(--gap);	
	color:var(--purple);
`;

export default TeamPage;