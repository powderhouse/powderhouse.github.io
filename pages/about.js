import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTableOfContents from "../components/PageTableOfContents";
import RegionContainer2 from "../components/RegionContainer2";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";
import PageImage from "../components/PageImage";
import { asteriskSVG } from "../site-data.js";

import {
	Region,
	PageSplash,
	PageHeading,
	PageIntroduction,
	PageSectionContent,
	SectionHeader,
	slugify,
	ShiftBy,
	findLargestFormat,
	getBgFromLight,
	getLightFromBg,
} from "../components/global";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

function AboutPage({
		aboutPageMeta: {
			PageSplash: { PageHeader, PageIntro },
		},
		aboutPageContent,
}) {
	let accentColor = "--yellow";
	
	let regions = [
		<Header backgroundColor="--off-white" />,
		<PageSplash backgroundColor={accentColor}>
			<PageHeading>{PageHeader}</PageHeading>
			<PageTableOfContents sections={aboutPageContent} />
		</PageSplash>,
		<PageIntroduction backgroundColor="--off-white">
			<ShiftBy x={0} y={(17 * 1.3) / 2 - 1}>
				{PageIntro}
			</ShiftBy>
		</PageIntroduction>,
		...aboutPageContent.map((e,i) => (e.PageImage 
			? (<Region2 backgroundColor="--off-black" key={i} >
				<PageImage 
					fullBleed={e.IsFullBleed}
					imgHeight="600"
					src={e.PageImage.data.attributes.formats == null ? url : e.PageImage.data.attributes.formats[findLargestFormat(e.PageImage.data.attributes.formats, "large")].url}
					alt={e.PageImage.data.attributes.alternativeText}
				/>
			</Region2>)
			: (
				<Region2 backgroundColor={getBgFromLight(e.isLightSection)} key={i} >
					{
						e.SectionHeader
						? <SectionHeader left={e.isLeftHeader ? e.isLeftHeader : false}>
							{e.SectionHeader}
						</SectionHeader>
						: ""
					}
					<PageSectionContent markdown>
						{e.PageSectionContent}
					</PageSectionContent>
				</Region2>
				)
			)
		),
		<Footer backgroundColor="--off-white" accentColor={accentColor} />,
	];

	return (
		<PageContainer2>
			{/*TODO: Some way to avoid cloning to add keys?  Maybe in PageContainer?*/}
			{regions.map((r, i) => React.cloneElement(r, { key: i }))}
		</PageContainer2>
	);
}

export async function getStaticProps(context) {
	let aboutPageMeta = await fetchAPI("/about?populate=*");
	let aboutPageContent = await fetchAPI(
		"/about?populate[PageMixedContent][populate]=*"
	);
	return {
		props: {
			aboutPageMeta: aboutPageMeta.data.attributes,
			aboutPageContent: aboutPageContent.data.attributes.PageMixedContent,
		}, // will be passed to the page component as props
	};
}

export default AboutPage;