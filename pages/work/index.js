import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

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
} from '../../components/global';

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function WorkPage({workPage,projectCards}) {
    return (
        <PageContainer css={baseGrid}>
		<Header />
		<PageSplash bgColor='green' color='off-white'>
			<PageHeader>{workPage.data.attributes.PageSplash.PageHeader}</PageHeader>
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
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
				{workPage.data.attributes.PageSplash.PageIntro}
			</ReactMarkdown>
		</PageIntro>

		<PageSection isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>{workPage.data.attributes.PartnerHeader}</SectionHeader>
			<PartnerSectionContent>
				{workPage.data.attributes.PartnerCards.map(
					n => ( 	<PartnerLink key={n.id} href={n.Link}>
								<PartnerCard>
									<PartnerLogo src="https://amorphia-apparel.com/storage/images/emma-goldman/emma-goldman.1300x700.png" />
								</PartnerCard>
							</PartnerLink>
							 
						)
					)
				}
			</PartnerSectionContent>
		</PageSection>

		<PageSection isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>{workPage.data.attributes.ProjectHeader}</SectionHeader>
			<WidePageSectionContent>
				{projectCards.data.map(
					n => ( 	<ProjectCard key={n.attributes.id}>
								<ProjectLink href={n.attributes.ProjectLink}>
									<ProjectImageDiv>
										{/* Don't know why this doesn't work */}
										<ProjectFeatureImage src="https://www.foundsf.org/images/thumb/e/ef/Emma_goldman_6213.jpg/792px-Emma_goldman_6213.jpg" />
									</ProjectImageDiv>
									<ProjectTitle>{n.attributes.ProjectTitle}</ProjectTitle>
									<ProjectSubtitle>{n.attributes.ProjectSubtitle}</ProjectSubtitle>
								</ProjectLink>
							</ProjectCard>
							 
						)
					)
				}
			</WidePageSectionContent>
		</PageSection>

		<PageSection isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>{workPage.data.attributes.PastLifeHeader}</SectionHeader>
			<PageSectionContent>
				{workPage.data.attributes.PastLifeIntro}
			</PageSectionContent>
			<PastLifeSectionContent>
				{workPage.data.attributes.PastLifeCards.map(
					n => ( 	<PastLifeLink  key={n.id} href={n.Link}>
								<PastLifeCard>
									<PastLifeImage src="https://www.foundsf.org/images/thumb/e/ef/Emma_goldman_6213.jpg/792px-Emma_goldman_6213.jpg" />
								</PastLifeCard>
							</PastLifeLink>
							 
						)
					)
				}
			</PastLifeSectionContent>
		</PageSection>

		<Footer />
	</PageContainer>
    );
}

let PartnerSectionContent = styled(WidePageSectionContent)`
	grid-template-columns:repeat(5,1fr);
`;

let PartnerCard = styled.div`
	height:100px;
	border:black dotted 1px;
`;

let PartnerLogo = styled.img`
	pointer-events: none;
	object-fit:cover;
	overflow:hidden;
`;

let PartnerLink = styled.a``;

let ProjectCard = styled.div`
	grid-column:span 3;
`;

let ProjectLink = styled.a`
	text-decoration:none;
`;

let ProjectImageDiv = styled.div`
	background-color:var(--yellow);
	height:150px; /*TK Explicit?*/
	overflow:hidden;
`;

let ProjectFeatureImage = styled.img`
	object-fit:cover;
`;

let ProjectTitle = styled.h3`
	font-size:31px; /*TK Explicit?*/
`;

let ProjectSubtitle = styled.p``;

let PastLifeSectionContent = styled(WidePageSectionContent)`
	grid-template-columns:repeat(2,auto);
`;

let PastLifeCard = styled.div`
	height:250px; /*TK Explicit?*/
	border:black dotted 1px;
	/*background-image:url();*/
	background-size:cover;
`;

let PastLifeImage = styled.img`
	object-fit:cover;
`;

let PastLifeLink = styled.a``;

export async function getStaticProps(context) {
  let workPage = await fetchAPI('/work?populate=*');
  let projectCards = await fetchAPI('/project-cards?populate=*');
  console.log({
    props: {
      workPage:workPage,
      projectCards:projectCards
    }  // will be passed to the page component as props
  });
  return {
    props: {
      workPage:workPage,
      projectCards:projectCards
    }  // will be passed to the page component as props
  }
}
export default WorkPage;