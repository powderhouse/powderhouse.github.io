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
	PageSection,
	PageSectionContent,
	FullBleedImage,
	FullBodyImage,
	randomRotate,
	slugify,
	Div,
	ShiftBy
} from "../components/global";

import dynamic from 'next/dynamic'

const Asterisk = dynamic(() => import('../components/global').then((mod) => mod.Asterisk), { ssr: false });

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

function AboutPage({
	data: {
		attributes: {
			PageSplash: { PageHeader, PageIntro },
			PageSections,
		},
	},
}) {
	return (
		<>
			<RegionContainer backgroundColor="--off-white">
				<Region>
					<Header />
				</Region>
			</RegionContainer>
			<RegionContainer backgroundColor="--yellow">
				<Region>
					<PageSplash>
						<PageHeading>{PageHeader}</PageHeading>
						<ShiftBy x={-13} y={0}>
							<PageTableOfContents>
								{generateTOC(PageSections)}
							</PageTableOfContents>
						</ShiftBy>
					</PageSplash>
				</Region>
			</RegionContainer>
			<RegionContainer backgroundColor="--off-white">
				<Region>
					<PageIntroduction>{PageIntro}</PageIntroduction>
				</Region>
			</RegionContainer>

			{PageSections.map((n) => (
				<RegionContainer
					key={n.id}
					id={slugify(n.SectionHeader)}
					backgroundColor={n.isLightSection ? "--off-white" : "--off-black"}
				>
				<Region>
					<SectionHeader isLeftHeader={n.isLeftHeader}>
						{n.SectionHeader}
					</SectionHeader>
					<PageSectionContent>
						<Div markdown>
							{n.PageSectionContent}
						</Div>
					</PageSectionContent>
				</Region>
				</RegionContainer>
			))}

			<RegionContainer backgroundColor="--off-white">
				<Region>
					<Footer />
				</Region>
			</RegionContainer>
		</>
	);
}

export async function getStaticProps(context) {
	return {
		props: await fetchAPI("/about?populate=*"), // will be passed to the page component as props
	};
}

export default AboutPage;
