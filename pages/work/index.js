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

function WorkPage({workPage,partnerCards,projectCards,pastLifeCards}) {
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
				{partnerCards.data.attributes.PartnerCards.map(
					n => ( 	<PartnerLink key={n.id} href={n.Link}>
								<PartnerCard>
									<PartnerLogo src={n.Image.data.attributes.formats == null ? n.Image.data.attributes.url : n.Image.data.attributes.formats.thumbnail.url} alt={n.Image.data.attributes.alternativeText} />
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
					n => (	<ProjectCard key={n.attributes.id}>
								<ProjectLink href={n.attributes.ProjectLink}>
									<ProjectImageDiv>
										<ProjectFeatureImage src={ n.attributes.ProjectFeatureImage.data.attributes.formats == null ? n.attributes.ProjectFeatureImage.data.attributes.url : n.attributes.ProjectFeatureImage.data.attributes.formats.small.url } alt={n.attributes.ProjectFeatureImage.data.attributes.alternativeText} />
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
				{pastLifeCards.data.attributes.PastLifeCards.map(
					n => ( 	<PastLifeLink  key={n.id} href={n.Link}>
								<PastLifeCard>
									<PastLifeImage src={n.Image.data.attributes.formats == null ? n.Image.data.attributes.url : n.Image.data.attributes.formats.medium.url} alt={n.Image.data.attributes.alternativeText} />
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
	overflow:hidden;
`;

let PartnerLogo = styled.img`
	pointer-events: none;
	object-fit:cover;
`;

let PartnerLink = styled.a``;

let ProjectCard = styled.div`
	grid-column:span 3;
	word-wrap: break-word; /*Just for debugging*/
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
	overflow:hidden;
`;

let PastLifeImage = styled.img`
	object-fit:cover;
`;

let PastLifeLink = styled.a``;

export async function getStaticProps(context) {
  let workPage = await fetchAPI('/work?populate=*');
  let partnerCards = await fetchAPI('/work?populate[PartnerCards][populate]=*');
  let projectCards = await fetchAPI('/project-cards?populate=*');
  let pastLifeCards = await fetchAPI('/work?populate[PastLifeCards][populate]=*');
  console.log({
    props: {
      workPage:workPage,
      partnerCards:partnerCards,
      projectCards:projectCards,
      pastLifeCards:pastLifeCards
    }  // will be passed to the page component as props
  });
  return {
    props: {
      workPage:workPage,
      partnerCards:partnerCards,
      projectCards:projectCards,
      pastLifeCards:pastLifeCards
    }  // will be passed to the page component as props
  }
}
export default WorkPage;