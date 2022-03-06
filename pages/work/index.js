import styled from "styled-components";

import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Region2 from "../../components/Region2";
import PageContainer2 from "../../components/PageContainer2";
import PageImage from "../../components/PageImage";
import { mediaQueries } from "../../site-data.js";

import {
	PageTableOfContents,
	PageSplash,
	PageIntroduction,
	PageSectionContent,
	PageHeading,
} from "../../components/Page.js";

import {
	findLargestFormat,
	getBgFromLight,
	tenureSort,
	Div,
} from "../../components/global";

import { fetchAPI } from "../../lib/api";

function WorkPage({
	workPage: {
		data: {
			attributes: {
				PageSplash: { PageHeader, PageIntro },
				PageSections,
				meta,
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
	let accentColor = "--green";

	let partnersDesc = PageSections.find(
		(s) => s.SectionHeader == "Selected Partners"
	);
	let partners = PartnerCards.map(
		(
			{
				Image: {
					data: {
						attributes: { formats, url, alternativeText },
					},
				},
				Link,
			},
			i
		) => {
			return (
				<PartnerCard key={i}>
					<a href={Link}>
						<PartnerLogo
							src={
								formats == null ||
								Object.keys(formats).length == 0
									? url
									: formats[
											findLargestFormat(formats, "medium")
									  ].url
							}
							alt={alternativeText}
						/>
					</a>
				</PartnerCard>
			);
		}
	);
	let projectsDesc = PageSections.find(
		(s) => s.SectionHeader == "Selected Work"
	);
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
					YearStart: yearstart,
					YearEnd: yearend,
				},
			},
			index
		) => {
			return (
				<ProjectCard key={index}>
					<ProjectLink href={`/work/${id}`}>
						<ProjectTenure>
							{yearstart == yearend
								? yearstart
								: `${yearstart}-${yearend}`}
						</ProjectTenure>
						<ProjectImageDiv>
							<ProjectFeatureImage
								src={
									formats == null ||
									Object.keys(formats).length == 0
										? url
										: formats[
												findLargestFormat(
													formats,
													"small"
												)
										  ].url
								}
								alt={alternativeText}
							/>
						</ProjectImageDiv>
						<ProjectTitle>{title}</ProjectTitle>
					</ProjectLink>
					<ProjectSubtitle markdown>{subtitle}</ProjectSubtitle>
				</ProjectCard>
			);
		}
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
			index
		) => (
			<PastLifeCard key={index}>
				<ProjectLink href={Link}>
					{/*TODO: Add tenure back into past lives*/}
					{/*<ProjectTenure>
							{yearstart == yearend
								? yearstart
								: `${yearstart}-${yearend}`}
						</ProjectTenure>*/}
					<PageImage
						fullBleed={false}
						src={
							formats == null || Object.keys(formats).length == 0
								? url
								: formats[findLargestFormat(formats, "medium")]
										.url
						}
						altText={alternativeText}
						caption=""
					/>
				</ProjectLink>
				<PastLifeDesc markdown>{LinkText}</PastLifeDesc>
			</PastLifeCard>
		)
	);

	return (
		<>
			<SEO meta={meta} />
			<PageContainer2>
				<Header
					backgroundColor="--off-white"
					activeScribbleColor={accentColor}
				/>
				<PageSplash backgroundColor={accentColor}>
					<PageHeading>{PageHeader}</PageHeading>
					<PageTableOfContents sections={PageSections} />
				</PageSplash>
				<PageIntroduction backgroundColor="--off-white" markdown>
					{PageIntro}
				</PageIntroduction>
				<Region2
					backgroundColor={getBgFromLight(
						projectsDesc.isLightSection
					)}
					header={projectsDesc.SectionHeader}
					left={projectsDesc.isLeftHeader}
				>
					<ProjectSectionContent $wide={true} $grid={true}>
						{projects}
					</ProjectSectionContent>
				</Region2>
				<Region2
					backgroundColor={getBgFromLight(
						partnersDesc.isLightSection
					)}
					header={partnersDesc.SectionHeader}
					left={partnersDesc.isLeftHeader}
				>
					<PageSectionContent $wide={true}>
						<PartnerSectionContent>
							{partners}
						</PartnerSectionContent>
					</PageSectionContent>
				</Region2>
				<Region2
					backgroundColor={getBgFromLight(
						pastLivesDesc.isLightSection
					)}
					header={pastLivesDesc.SectionHeader}
					left={pastLivesDesc.isLeftHeader}
				>
					<PageSectionContent $wide={true} $grid={false}>
						{pastLivesDesc.PageSectionContent ? (
							<SectionDesc>
								{/*TODO: Add descriptions for past lives*/}
								{pastLivesDesc.PageSectionContent}
							</SectionDesc>
						) : (
							""
						)}
						<PastLifeSectionContent>
							{pastLives}
						</PastLifeSectionContent>
					</PageSectionContent>
				</Region2>
				<Footer
					backgroundColor="--off-black"
					accentColor={accentColor}
				/>
			</PageContainer2>
		</>
	);
}

let SectionDesc = styled(Div)`
	padding-bottom: var(--vertical-rhythm);
	font-size: var(--base-font-size);
	line-height: var(--base-line-height);
	grid-column: 1 / -1;
`;

let PartnerSectionContent = styled.div`
	display: grid;
	column-gap: var(--gap);
	row-gap: var(--vertical-rhythm);
	grid-template-columns: repeat(5, 1fr);
	transform: translateY(-1rem);

	@media ${mediaQueries.uptoTablet} {
		grid-template-columns: repeat(4, 1fr);
		transform: revert;
	}
	@media ${mediaQueries.uptoMobile} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

let PartnerCard = styled.div`
	height: 110px;
	overflow: hidden;
	transition: 0.25s;
	opacity: 90%;

	&:hover {
		opacity: 1;
	}

	@media (hover: none) {
		opacity: 1;
	}
`;

let PartnerLogo = styled.img`
	pointer-events: none;
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

let ProjectSectionContent = styled(PageSectionContent)`
	@media ${mediaQueries.uptoTablet} {
		grid-row-gap: var(--vertical-rhythm);
	}
`;

let ProjectCard = styled.div`
	grid-column: span 3;
	border-color: var(--off-black);
`;

let ProjectLink = styled.a`
	text-decoration: none;

	& img {
		border: 1px rgb(42, 46, 47) solid;
		// border color is --off-black with alpha channel
	}
`;

let ProjectTenure = styled.div`
	opacity: 0.6125;
	text-align: right;
	font-weight: 300;
	line-height: 1em;
	// Optical alignment with top of Left Header
	position: relative;
	top: -2px;

	@media ${mediaQueries.uptoTablet} {
		text-align: revert;
	}
`;

let ProjectImageDiv = styled.div`
	height: 200px; /*TODO: Rationalize this*/
	overflow: hidden;
`;

let ProjectFeatureImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	opacity: 90%;

	&:hover {
		opacity: 1;
		transition: 0.25s;
	}
`;

let ProjectTitle = styled.h3`
	grid-column: 1 / span 3;
	font-weight: 300;
	font-size: var(--large-font-size);
	line-height: var(--large-line-height);
	padding-top: 4pt; // Optically aligned to equalize height above and below
`;

let ProjectSubtitle = styled(Div)`
	line-height: var(--base-line-height);
	padding: 0;
	margin: 0;
	font-weight: 300;
	hyphens: auto;
`;

let PastLifeSectionContent = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	// TODO: --gap and --vertical-rhythm should probably match
	column-gap: var(--gap);
	row-gap: var(--vertical-rhythm);
	transform: translateY(6px);

	@media ${mediaQueries.uptoMobile} {
		grid-template-columns: repeat(1, 1fr);
	}
`;
let PastLifeCard = styled(ProjectCard)`
	grid-column: span 1;
`;
let PastLifeDesc = styled(Div)`
	font-size: var(--step-up-1);
	padding-top: calc(var(--vertical-rhythm) / 2);
`;

export async function getStaticProps() {
	let workPage = await fetchAPI("/work?populate=*");
	let partnerCards = await fetchAPI(
		"/work?populate[PartnerCards][populate]=*"
	);
	let projectCards = await fetchAPI("/project-cards?populate=*");
	projectCards.data.sort(
		tenureSort(
			(x) => x.attributes.YearEnd,
			(x) => x.attributes.YearEnd - x.attributes.YearStart,
			(x) => x.attributes.ProjectTitle,
			"descending"
		)
	);
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
