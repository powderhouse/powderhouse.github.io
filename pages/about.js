import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTableOfContents from "../components/PageTableOfContents";
import RegionContainer2 from "../components/RegionContainer2";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";
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
	getBgFromLight,
	getLightFromBg,
} from "../components/global";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

function About2Page({
	data: {
		attributes: {
			PageSplash: { PageHeader, PageIntro },
			PageSections,
		},
	},
}) {
	let regions = [
		<Region2 backgroundColor="--off-white">
			<Header />
		</Region2>,
		<Region2 backgroundColor="--yellow">
			<PageSplash>
				<PageHeading>{PageHeader}</PageHeading>
				<PageTableOfContents sections={PageSections} />
			</PageSplash>
		</Region2>,
		<Region2 backgroundColor="--off-white">
			<PageIntroduction>
				<ShiftBy x={0} y={(17 * 1.3) / 2 - 1}>
					{PageIntro}
				</ShiftBy>
			</PageIntroduction>
		</Region2>,
		...PageSections.map(
			({
				SectionHeader: header,
				isLeftHeader,
				isLightSection,
				PageSectionContent: content,
			}) => {
				let slug = slugify(header);
				let backgroundColor = getBgFromLight(isLightSection);
				let left = isLeftHeader ? isLeftHeader : false;
				let PageSectionContent2 = PageSectionContent;
				return (
					<Region2 id={slug} backgroundColor={backgroundColor}>
						<SectionHeader left={left}>{header}</SectionHeader>
						<PageSectionContent markdown>
							{content}
						</PageSectionContent>
					</Region2>
				);
			}
		),
		<Region2 backgroundColor="--off-white">
			<Footer />
		</Region2>,
	];

	return (
		<PageContainer2>
			{/*TODO: Some way to avoid cloning to add keys?  Maybe in PageContainer?*/}
			{regions.map((r, i) => React.cloneElement(r, { key: i }))}
		</PageContainer2>
	);
}

export async function getStaticProps(context) {
	return {
		props: await fetchAPI("/about?populate=*"), // will be passed to the page component as props
	};
}

export default About2Page;
