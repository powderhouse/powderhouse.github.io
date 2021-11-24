import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'
import GridOverlay from '../components/GridOverlay'

import { baseGrid } from '../components/global.js'

function WorkPage() {
    return (
        <PageContainer css={baseGrid}>
		<Header />
		<PageSplash>
			<h1>Work</h1>
			<PageTableOfContents>
				<li>Selected Partners</li>
				<li>Selected Projects</li>
				<li>Past Lives</li>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			<p>
				First as sprout & co [link], then as Powderhouse Studios [link], and now as Powderhouse, since 2009, we have been fortunate to work on the same problems in many different forms with a wide variety of partners.			</p>
		</PageIntro>

		<PageSection css={baseGrid}>
			<LeftHeader>Partners</LeftHeader>
			<PartnerSectionContent>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
				<PartnerCard></PartnerCard>
			</PartnerSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>Projects</LeftHeader>
			<WidePageSectionContent>
				<ProjectCard>
					<ProjectFeatureImage></ProjectFeatureImage>
					<ProjectTitle>[Almost] A New District School</ProjectTitle>
					<ProjectSubtitle>In district high school featuring projects emphasizing computation, narrative, and design proposed in Somerville, MA</ProjectSubtitle>
				</ProjectCard>
				<ProjectCard>
					<ProjectFeatureImage></ProjectFeatureImage>
					<ProjectTitle>Digital Storytelling</ProjectTitle>
					<ProjectSubtitle>A family of programs storytelling with the aid of software</ProjectSubtitle>
				</ProjectCard>
				<ProjectCard>
					<ProjectFeatureImage></ProjectFeatureImage>
					<ProjectTitle>Healey STEAM</ProjectTitle>
					<ProjectSubtitle>A pilot of our innovation school model with the Healey's 7th and 8th grades</ProjectSubtitle>
				</ProjectCard>
				<ProjectCard>
					<ProjectFeatureImage></ProjectFeatureImage>
					<ProjectTitle>Bring Your Grandma to Math Day</ProjectTitle>
					<ProjectSubtitle>People of all ages playing with math together, for fun</ProjectSubtitle>
				</ProjectCard>
				<ProjectCard>
					<ProjectFeatureImage></ProjectFeatureImage>
					<ProjectTitle>Atlas</ProjectTitle>
					<ProjectSubtitle>Software to make messy projects legible to traditional common core standards</ProjectSubtitle>
				</ProjectCard>
			</WidePageSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>Past Lives</LeftHeader>
			<PageSectionContent>
				<p>Prior to Powderhouse, we called ourselves Powderhouse Studios and sprout & co. You can learn a bit more about our work under those names here.</p>
				
			</PageSectionContent>
			<PastLifeSectionContent>
				<PastLifeCard></PastLifeCard>
				<PastLifeCard></PastLifeCard>
			</PastLifeSectionContent>
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

// This is from the Team Page.

let WidePageSectionContent = styled(PageSectionContent)`
	grid-column: 4 / -1;

	display:grid;
	grid-template-columns:9;
	gap: 24px;
`

//////////////////////////////

let PartnerSectionContent = styled(WidePageSectionContent)`
	grid-template-columns:5;
`

let PartnerCard = styled.div`
	height:100px;
	border:black dotted 1px;
	background-image:url(https://amorphia-apparel.com/storage/images/emma-goldman/emma-goldman.1300x700.png?63d82fc46612ddd8001eae2947e6f9f0);
	background-size:cover;

	&:nth-child(5n+1) {
		grid-column: 1;
	}
	&:nth-child(5n+2) {
		grid-column: 2;
	}
	&:nth-child(5n+3) {
		grid-column: 3;
	}
	&:nth-child(5n+4) {
		grid-column: 4;
	}
	&:nth-child(5n+5) {
		grid-column: 5;
	}
`

let ProjectCard = styled.div`
	&:nth-child(3n+1) {
		grid-column: 1 / span 3;
	}
	&:nth-child(3n+2) {
		grid-column: 4 / span 3;
	}
	&:nth-child(3n+3) {
		grid-column: 7 / span 3;
	}
`

let ProjectFeatureImage = styled.div`
	height:150px;
	background-image:url(https://www.pbs.org/wgbh/americanexperience/media/__sized__/canonical_images/feature/Goldman_timeline_canonical-resize-1200x0-50.jpg);
	background-size:cover;
`

let ProjectTitle = styled.h3``

let ProjectSubtitle = styled.h4``

let PastLifeSectionContent = styled(WidePageSectionContent)`
	grid-template-columns:2;
`

let PastLifeCard = styled.div`
	height:250px;
	border:black dotted 1px;
	background-image:url(https://www.foundsf.org/images/thumb/e/ef/Emma_goldman_6213.jpg/792px-Emma_goldman_6213.jpg);
	background-size:cover;

	&:first-child {
		grid-column:1;
	}
	&:last-child {
		grid-column:2;
	}
`


export default WorkPage;