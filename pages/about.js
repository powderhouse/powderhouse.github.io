import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { asteriskSVG } from "../site-data.js";

import {
	baseGrid,
	Region,
	RegionContainer,
	Spacer,
	PageSplash,
	PageHeading,
	PageTableOfContents,
	PageTOCListItem,
	PageTOCLink,
	PageIntroduction,
	SectionHeader,
	PageSectionContent,
	FullBleedImage,
	FullBodyImage,
	randomRotate,
	slugify,
	Div,
	ShiftBy,
	Asterisk,
} from "../components/global";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

let generateTOC = function (sections) {
	return sections.map((n, i) => (
		<PageTOCListItem key={i}>
			<PageTOCLink href={"#" + slugify(n.SectionHeader)}>
				<Asterisk key={i}>{asteriskSVG()}</Asterisk>
				<div>{n.SectionHeader}</div>
			</PageTOCLink>
			<Spacer />
		</PageTOCListItem>
	));
};

// TODO: Named this way since PageSection is deprecated for Region
let CorePageSection = (props) => {
	let slug = slugify(props.header);
	return (
		<Region id={slug}>
			<SectionHeader left={props.left}>{props.header}</SectionHeader>
			<PageSectionContent markdown>{props.children}</PageSectionContent>
		</Region>
	);
};

function AboutPage({
	data: {
		attributes: {
			PageSplash: { PageHeader, PageIntro },
			PageSections,
		},
	},
}) {
	let getBgFromLight = (isLight) => (isLight ? "--off-white" : "--off-black");
	let getLightFromBg = (bg) => (bg == "--off-white" ? true : false);

	let createSection = (s, i = null) => (
		<CorePageSection
			header={s.SectionHeader}
			left={s.isLeftHeader ? s.isLeftHeader : false}
			key={i}
		>
			{s.PageSectionContent}
		</CorePageSection>
	);
	let groupRuns = function (sections) {
		let runs = [
			{
				backgroundColor: sections[0].isLightSection
					? "--off-white"
					: "--off-black",
				regions: [createSection(sections[0], 1)],
				content: true,
			},
		];
		sections.slice(1).forEach((s, i) => {
			let lastRun = runs.slice(-1)[0];
			let matchingBG =
				getBgFromLight(s.isLightSection) == lastRun.backgroundColor;
			if (matchingBG) {
				lastRun.regions.push(
					createSection(s, lastRun.regions.length + 1)
				);
			} else {
				runs.push({
					backgroundColor: getBgFromLight(s.isLightSection),
					regions: [createSection(s, i + 1), runs.length],
					content: true,
				});
			}
		});
		return runs;
	};

	let regionRuns = [
		{
			backgroundColor: "--off-white",
			regions: [<Header />],
			content: false,
		},
		{
			backgroundColor: "--yellow",
			regions: [
				<PageSplash>
					<PageHeading>{PageHeader}</PageHeading>
					<ShiftBy x={-13} y={10}>
						<PageTableOfContents className="off-black">
							{/*TODO: Check for consistency of usage of off-black in className, etc.*/}
							{generateTOC(PageSections)}
						</PageTableOfContents>
					</ShiftBy>
				</PageSplash>,
			],
			content: false,
		},
		{
			backgroundColor: "--off-white",
			regions: [
				<PageIntroduction>
					<ShiftBy x={0} y={(17 * 1.3) / 2 - 1}>
						{PageIntro}
					</ShiftBy>
				</PageIntroduction>,
			],
			content: "first",
		},
		{
			backgroundColor: "--off-white",
			regions: [<Footer />],
			content: false,
		},
	];

	let groupedRuns = groupRuns(PageSections);

	// This merges the page sections with the introduction, looking to see whether they share a background color with the introduction.
	// TODO: This whole section is way too complex; regions should just have background colors (rather than isLightSection or similar)
	if (regionRuns[2].backgroundColor == groupedRuns[0].backgroundColor) {
		regionRuns[2].regions = regionRuns[2].regions.concat(
			groupedRuns[0].regions
		);
		regionRuns.splice(3, 0, ...groupedRuns.slice(1));
	} else {
		regionRuns.splice(3, 0, ...groupedRuns.slice(0));
	}

	let pageSectionType = (<CorePageSection />).type;

	return (
		<>
			{regionRuns.map(({ backgroundColor, regions, content }, i) => {
				let keyedRegions = regions;
				return (
					<RegionContainer
						backgroundColor={backgroundColor}
						content={
							[true, "first"].includes(content) ? content : false
						}
						key={i}
					>
						{keyedRegions.map((r, j) =>
							r.type == pageSectionType ? (
								r
							) : (
								<Region key={j}>{r}</Region>
							)
						)}
					</RegionContainer>
				);
			})}
		</>
	);
}

export async function getStaticProps(context) {
	return {
		props: await fetchAPI("/about?populate=*"), // will be passed to the page component as props
	};
}

export default AboutPage;
