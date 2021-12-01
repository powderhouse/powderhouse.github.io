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
	LeftHeader,
	CenterHeader,
	PageSection,
	DarkPageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
} from '../../components/global';

function WorkPage() {
    return (
        <PageContainer css={baseGrid}>
		<Header />
		<PageSplash bgColor='green' color='off-white'>
			<PageHeader>Work</PageHeader>
			<PageTableOfContents>
				<PageTOCListItem>
					<PageTOCLink href='#'>Selected Partners</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>Selected Projects</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>Past Lives</PageTOCLink>
				</PageTOCListItem>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			<p>
				First as <a href="">sprout & co</a>, then as <a href=''>Powderhouse Studios</a>, and now as Powderhouse, since 2009, we have been fortunate to work on the same problems in many different forms with a wide variety of partners.			</p>
		</PageIntro>

		<PageSection css={baseGrid}>
			<LeftHeader>Partners</LeftHeader>
			<PartnerSectionContent>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
				<PartnerCard>
					<PartnerLink href=''></PartnerLink>
				</PartnerCard>
			</PartnerSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>Projects</LeftHeader>
			<WidePageSectionContent>
				<ProjectCard>
					<ProjectLink href=''>
						<ProjectFeatureImage></ProjectFeatureImage>
						<ProjectTitle>[Almost] A New District School</ProjectTitle>
						<ProjectSubtitle>In district high school featuring projects emphasizing computation, narrative, and design proposed in Somerville, MA</ProjectSubtitle>
					</ProjectLink>
				</ProjectCard>
				
				<ProjectCard>
					<ProjectLink href=''>
						<ProjectFeatureImage></ProjectFeatureImage>
						<ProjectTitle>Digital Storytelling</ProjectTitle>
						<ProjectSubtitle>A family of programs storytelling with the aid of software</ProjectSubtitle>
					</ProjectLink>
				</ProjectCard>
				
				<ProjectCard>
					<ProjectLink href=''>
						<ProjectFeatureImage></ProjectFeatureImage>
						<ProjectTitle>Healey STEAM</ProjectTitle>
						<ProjectSubtitle>A pilot of our innovation school model with the Healey's 7th and 8th grades</ProjectSubtitle>
					</ProjectLink>
				</ProjectCard>
				
				<ProjectCard>
					<ProjectLink href=''>
						<ProjectFeatureImage></ProjectFeatureImage>
						<ProjectTitle>Bring Your Grandma to Math Day</ProjectTitle>
						<ProjectSubtitle>People of all ages playing with math together, for fun</ProjectSubtitle>
					</ProjectLink>
				</ProjectCard>
				
				<ProjectCard>
					<ProjectLink href=''>
						<ProjectFeatureImage></ProjectFeatureImage>
						<ProjectTitle>Atlas</ProjectTitle>
						<ProjectSubtitle>Software to make messy projects legible to traditional common core standards</ProjectSubtitle>
					</ProjectLink>
				</ProjectCard>
			</WidePageSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>Past Lives</LeftHeader>
			<PageSectionContent>
				<p>Prior to Powderhouse, we called ourselves Powderhouse Studios and sprout & co. You can learn a bit more about our work under those names here.</p>
				
			</PageSectionContent>
			<PastLifeSectionContent>
					<PastLifeCard>
						<PastLifeLink href=''></PastLifeLink>
					</PastLifeCard>
				
					<PastLifeCard>
						<PastLifeLink href=''></PastLifeLink>
					</PastLifeCard>
			</PastLifeSectionContent>
		</PageSection>

		<Footer />
	</PageContainer>
    );
}

let PartnerSectionContent = styled(WidePageSectionContent)`
	grid-template-columns:repeat(5,auto);
`

let PartnerCard = styled.div`
	height:100px;
	border:black dotted 1px;
	background-image:url(https://amorphia-apparel.com/storage/images/emma-goldman/emma-goldman.1300x700.png?63d82fc46612ddd8001eae2947e6f9f0);
	background-size:cover;
`

let PartnerLink = styled.a``;

let ProjectCard = styled.div`
	grid-column:span 3;
`;

let ProjectLink = styled.a`
	text-decoration:none;
`;

let ProjectFeatureImage = styled.div`
	height:150px;
	background-image:url(https://www.pbs.org/wgbh/americanexperience/media/__sized__/canonical_images/feature/Goldman_timeline_canonical-resize-1200x0-50.jpg);
	background-size:cover;
`;

let ProjectTitle = styled.h3`
	font-size:31px; /*TK Explicit?*/
`;

let ProjectSubtitle = styled.p``;

let PastLifeSectionContent = styled(WidePageSectionContent)`
	grid-template-columns:repeat(2,auto);
`;

let PastLifeCard = styled.div`
	height:250px;
	border:black dotted 1px;
	background-image:url(https://www.foundsf.org/images/thumb/e/ef/Emma_goldman_6213.jpg/792px-Emma_goldman_6213.jpg);
	background-size:cover;
`;

let PastLifeLink = styled.a``;

export default WorkPage;