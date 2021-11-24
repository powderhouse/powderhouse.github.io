import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'
import GridOverlay from '../components/GridOverlay'

import { baseGrid } from '../components/global.js'

function TeamPage() {
    return (
        <PageContainer css={baseGrid}>
		<Header />
		<PageSplash>
			<h1>Team</h1>
			<PageTableOfContents>
				<li>Staff</li>
				<li>Advisors</li>
				<li>Alumni</li>
				<li>Jobs</li>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			<p>
				Invention without advocacy is irrelevant. Advocacy without invention is incrementalist. We're building a team which believes it's only by bringing these worlds together that we can realize radically different futures of learning.  Join us. [link to jobs]
			</p>
		</PageIntro>

		<PageSection css={baseGrid}>
			<LeftHeader>Staff</LeftHeader>
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

		<PageSection css={baseGrid}>
			<LeftHeader>Advisors</LeftHeader>
			<WidePageSectionContent>
				<PersonCard>
					<PersonName>John Bell</PersonName>
					<PersonBio>is currently a fellow at MIT’s Program in Art, Culture, and Technology and director of the Ballard Institute and Museum of Puppetry at the University of Connecticut.</PersonBio>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonName>Beth O'Sullivan</PersonName>
					<PersonBio>co-founded the Science Club for Girls: a program that brings hands-on science clubs to 600 girls in the Boston area, working to close the socioeconomic and gender gaps in science.</PersonBio>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>
			</WidePageSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>Alumni</LeftHeader>
			<WidePageSectionContent>
				<PersonCard>
					<PersonName>John Bell</PersonName>
					<PersonLinks>
						<li><a href="">LinkedIn</a></li>
					</PersonLinks>
				</PersonCard>

				<PersonCard>
					<PersonName>Beth O'Sullivan</PersonName>
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
					<PersonName>Beth O'Sullivan</PersonName>
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

		<PageSection css={baseGrid}>
			<LeftHeader>Jobs</LeftHeader>
			<PageSectionContent>
				<p>
					Powderhouse is building something which has never existed before: a vertically integrated* research, design, and advocacy organization devoted to youth.
				</p>
				<p>
					Most work in this space is about School,** not about learning.  The little which is about learning ignores the wickedly hard problem of grappling with School.  So much talk about innovation and revolution, so little courage to tackle radical problems with the patience and rigor they require.
				</p>
				<p>
					If that inspires (rather than deflates or offends), we'd like your help.
				</p>
				<aside>
					* That means we <i>actually</i> work with youth, prototype tools and materials, and design systems and policies that govern learning environments all under one roof.
				</aside>
				<aside>
					** Original Holt quote re: S-chool, <i>via Instead of Education</i>, “The schools for do-ers, which help people explore the world as they choose, I now call “small s schools” (written s-chools). The schools for educators, which get and hold their students by the threat of jail or uselessness or poverty, I now call "capital S-chools," (written S-chools). There is very little we can do to make these S-chools better, and they are almost certain to get worse.”
				</aside>
				<a href="/jobs"><div>Jobs</div></a>
			</PageSectionContent>
		</PageSection>

		<Footer />
	</PageContainer>
    );
}


// This section is copied from /about. Do not change, should be pulled into components.

let PageContainer = styled.div ``;

let PageSplash = styled.div `
	grid-column: 1 / -1;
	min-height: 20rem;
	border: 1px dotted black;
`

let PageTableOfContents = styled.ol ``

let PageIntro = styled.div `
	grid-column: 1 / span 9;
	border: 1px dotted black;
	font-size: 2rem;
`

let LeftHeader = styled.div `
	grid-column: 1 / span 3;
	border: 1px dotted black;
`

let CenterHeader = styled.h2 ``

let PageSection = styled.section `
	grid-column: 1 / -1;
`

let DarkPageSection = styled(PageSection)
`
	color: white;
	background: black;
`

let PageSectionContent = styled.div `
	grid-column: 4 / 10;
`

// This is new component design/structure.

let WidePageSectionContent = styled(PageSectionContent)
`
	grid-column: 4 / -1;

	display:grid;
	grid-template-columns:9;
	gap: 24px;
`

let PersonCard = styled.div `
	border:black dotted 1px;

	&:nth-child(3n+1) {
		grid-column: 1 / 4;
	}
	&:nth-child(3n+2) {
		grid-column: 4 / 7;
	}
	&:nth-child(3n+3) {
		grid-column: 7 / 10;
	}
`

let PersonHeadshot = styled.div `
	height:150px;
	width:150px;
	background-image:url(https://www.biography.com/.image/t_share/MTIwNjA4NjMzODI4MjQ3MDUy/emma-goldman-9314556-1-402.jpg);
	background-size:cover;
`

let PersonName = styled.h3 ``

let PersonTitle = styled.p ``

let PersonLinks = styled.ul ``

let PersonBio = styled.p ``



export default TeamPage;