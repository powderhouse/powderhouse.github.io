import React from "react";
import styled from "styled-components";

import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTableOfContents from "../components/PageTableOfContents";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";
import PageImage from "../components/PageImage";

import {
	PageSplash,
	PageHeading,
	PageIntroduction,
	PageSectionContent,
	slugify,
	findLargestFormat,
	getBgFromLight,
} from "../components/global";

import { fetchAPI } from "../lib/api";

function AboutPage({
	aboutPageMeta: {
		PageSplash: { PageHeader, PageIntro },
	},
	aboutPageContent,
}) {
	let accentColor = "--red";

	let regions = [
		<Header
			backgroundColor="--off-white"
			key="header"
			activeScribbleColor={accentColor}
		/>,
		<PageSplash backgroundColor={accentColor} key="splash">
			<PageHeading>{PageHeader}</PageHeading>
			<PageTableOfContents sections={aboutPageContent} />
		</PageSplash>,
		<PageIntroduction backgroundColor="--off-white" key="introduction">
			{PageIntro}
		</PageIntroduction>,
		...aboutPageContent.map((e, i) =>
			e.PageImage ? (
				<Region2
					backgroundColor="--off-black"
					key={
						e.PageImage.data.attributes.caption
							? slugify(e.PageImage.data.attributes.caption)
							: `image-${i}`
					}
				>
					<PageImage
						fullBleed={e.IsFullBleed}
						src={
							e.PageImage.data.attributes.formats == null
								? url
								: e.PageImage.data.attributes.formats[
										findLargestFormat(
											e.PageImage.data.attributes.formats,
											"large"
										)
								  ].url
						}
						alt={e.PageImage.data.attributes.alternativeText}
						caption={e.PageImage.data.attributes.caption}
					/>
				</Region2>
			) : (
				<Region2
					backgroundColor={getBgFromLight(e.isLightSection)}
					key={
						e.SectionHeader
							? slugify(e.SectionHeader)
							: `section-${i}`
					}
					header={e.SectionHeader ? e.SectionHeader : null}
					left={e.isLeftHeader ? e.isLeftHeader : null}
				>
					<PageSectionContent markdown>
						{e.PageSectionContent}
					</PageSectionContent>
				</Region2>
			)
		),
		<Footer
			backgroundColor="--off-white"
			accentColor={accentColor}
			key="footer"
		/>,
	];
	return (
		<>
			<Head>
				<title>About Powderhouse</title>
			</Head>
			<PageContainer2>{regions}</PageContainer2>
		</>
	);
}

export async function getStaticProps() {
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
