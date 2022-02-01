import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Region2 from "../../components/Region2";
import PageContainer2 from "../../components/PageContainer2";

import PageTableOfContents from "../../components/PageTableOfContents";
import { asteriskSVG } from "../../site-data.js";

import {
	baseGrid,
	Spacer,
	PageSplash,
	PageHeading,
	Asterisk,
	PageIntroduction,
	SectionHeader,
	PageSection,
	PageSectionContent,
	FullBleedImage,
	getBgFromLight,
	Div,
} from "../../components/global";

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function WorkPage({
	workPage: {
		data: {
			attributes: {
				PageSplash: { PageHeader, PageIntro },
				PageSections,
			},
		},
	},
	partnerCards: {
		data: {
			attributes: { PartnerCards: PartnerCards },
		},
	},
	projectCards: { data: projectCards },
	pastLifeCards: {
		data: {
			attributes: { PastLifeCards: PastLifeCards },
		},
	},
}) {
	let partnersDesc = PageSections.find((s) => s.SectionHeader == "Partners");
	let partners = PartnerCards.map(
		(
			{
				Image: {
					data: {
						attributes: { formats, url, alternativeText },
					},
				},
				Link,
				LinkText,
			},
			i
		) => {
			return (
				<PartnerLink key={i} href={Link}>
					<PartnerCard>
						<PartnerLogo
							src={
								formats == null
									? url
									: formats[
											findLargestFormat(formats, "small")
									  ].url
							}
							alt={alternativeText}
						/>
					</PartnerCard>
				</PartnerLink>
			);
		}
	);
	let projectsDesc = PageSections.find((s) => s.SectionHeader == "Projects");
	let projects = projectCards.map(
		(
			{
				attributes: {
					ProjectFeatureImage: {
						data: {
							attributes: { url, formats, alternativeText },
						},
					},
					ProjectTitle: title,
					ProjectSubtitle: subtitle,
					ProjectId: id,
				},
			},
			index
		) => (
			<ProjectCard key={index}>
				<ProjectLink href={"/work/" + id}>
					{/* TK There's probably a better way to do this with relative URLS? */}
					<ProjectImageDiv>
						<ProjectFeatureImage
							src={
								formats == null
									? url
									: formats[
											findLargestFormat(formats, "small")
									  ].url
							}
							alt={alternativeText}
						/>
					</ProjectImageDiv>
					<ProjectTitle>{title}</ProjectTitle>
					<ProjectSubtitle>{subtitle}</ProjectSubtitle>
				</ProjectLink>
			</ProjectCard>
		)
	);
	let pastLivesDesc = PageSections.find(
		(s) => s.SectionHeader == "Past Lives"
	);
	let pastLives = PastLifeCards.map(
		(
			{
				Image: {
					data: {
						attributes: { formats, url, alternativeText },
					},
				},
				Link,
				LinkText,
			},
			i
		) => (
			<PastLifeLink key={i} href={Link}>
				<PastLifeCard>
					<PastLifeImage
						src={
							formats == null
								? url
								: formats[findLargestFormat(formats, "medium")]
										.url
						}
						alt={alternativeText}
					/>
				</PastLifeCard>
			</PastLifeLink>
		)
	);

	return (
		<PageContainer2>
			<Header backgroundColor="--off-white" />
			<PageSplash backgroundColor="--green">
				<PageHeading>{PageHeader}</PageHeading>
				<PageTableOfContents sections={PageSections} />
			</PageSplash>
			<PageIntroduction backgroundColor="--off-white" markdown>
				{PageIntro}
			</PageIntroduction>
			<Region2
				backgroundColor={getBgFromLight(partnersDesc.isLightSection)}
			>
				<SectionHeader left={partnersDesc.isLeftHeader}>
					{partnersDesc.SectionHeader}
				</SectionHeader>
				<PageSectionContent wide={true}>
					<Div>{partnersDesc.PageSectionContent}</Div>
					<PartnerSectionContent>{partners}</PartnerSectionContent>
				</PageSectionContent>
			</Region2>
			<Region2
				backgroundColor={getBgFromLight(projectsDesc.isLightSection)}
			>
				<SectionHeader left={projectsDesc.isLeftHeader}>
					{projectsDesc.SectionHeader}
				</SectionHeader>
				<PageSectionContent wide={true} grid={true}>
					{projectsDesc.PageSectionContent ? (
						<Div>{projectsDesc.PageSectionContent}</Div>
					) : (
						""
					)}
					{projects}
				</PageSectionContent>
			</Region2>
			<Region2
				backgroundColor={getBgFromLight(pastLivesDesc.isLightSection)}
			>
				<SectionHeader left={pastLivesDesc.isLeftHeader}>
					{pastLivesDesc.SectionHeader}
				</SectionHeader>
				<PageSectionContent wide={true} grid={false}>
					{pastLivesDesc.PageSectionContent ? (
						<Div>{pastLivesDesc.PageSectionContent}</Div>
					) : (
						""
					)}
					<PastLifeSectionContent>{pastLives}</PastLifeSectionContent>
				</PageSectionContent>
			</Region2>
			<Footer backgroundColor="--off-white" />
		</PageContainer2>
	);
}

let PartnerSectionContent = styled.div`
	display: grid;
	column-gap: var(--gap);
	row-gap: 1.3rem;
	grid-template-columns: repeat(5, 1fr);
`;

let PartnerCard = styled.div`
	height: 100px;
	overflow: hidden;
`;

let PartnerLogo = styled.img`
	pointer-events: none;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

let PartnerLink = styled.a``;

let ProjectCard = styled.div`
	grid-column: span 3;
	word-wrap: break-word; /*Just for debugging*/
`;

let ProjectLink = styled.a`
	text-decoration: none;
`;

let ProjectImageDiv = styled.div`
	background-color: var(--yellow);
	height: 200px; /*TK Explicit?*/
	overflow: hidden;
`;

let ProjectFeatureImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

let ProjectTitle = styled.h3`
	font-size: 31px; /*TK Explicit?*/
`;

let ProjectSubtitle = styled.p``;

let PastLifeSectionContent = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: var(--gap);
	row-gap: 1.3rem;
`;

let PastLifeCard = styled.div`
	height: 330px; /*TK Explicit?*/
	overflow: hidden;
`;

let PastLifeImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

let PastLifeLink = styled.a``;

function findLargestFormat(formatDict, maxSize = "large") {
	let formats = ["large", "medium", "small", "thumbnail"];
	formats = formats.slice(formats.indexOf(maxSize), formats.length);
	for (let size in formats) {
		if (formatDict.hasOwnProperty(formats[size])) {
			return formats[size];
		}
	}
}

export async function getStaticProps(context) {
	let workPage = await fetchAPI("/work?populate=*");
	let partnerCards = await fetchAPI(
		"/work?populate[PartnerCards][populate]=*"
	);
	let projectCards = await fetchAPI("/project-cards?populate=*");
	let pastLifeCards = await fetchAPI(
		"/work?populate[PastLifeCards][populate]=*"
	);
	return {
		props: {
			workPage: workPage,
			partnerCards: partnerCards,
			projectCards: projectCards,
			pastLifeCards: pastLifeCards,
		}, // will be passed to the page component as props
	};
}
export default WorkPage;
